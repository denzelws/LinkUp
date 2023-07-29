import { useState, useCallback, useRef, createRef, useEffect } from 'react'
import { AnimatedRefProps } from '../components/Toast/ToastMessage'

type pendingRemovalItemsProps = number[]

type RenderItemCallbackProps = (
  item: AnimatedItemProps,
  options: { isLeaving: boolean; animatedRef: AnimatedRefProps }
) => JSX.Element

type AnimatedItemProps = {
  id: number
  type: 'default' | 'success' | 'danger'
  text: string
  duration?: number
}

export const useAnimatedList = (initialValue = []) => {
  const [items, setItems] = useState<AnimatedItemProps[]>(initialValue)
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] =
    useState<pendingRemovalItemsProps>([])

  const animatedRefs = useRef(new Map())
  const animationEndListeners = useRef(new Map())

  const handleAnimationEnd = useCallback((id: number) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id))
    setPendingRemovalItemsIds((prevState) =>
      prevState.filter((itemId) => itemId !== id)
    )
  }, [])

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId)
      const alreadyHasListeners = animationEndListeners.current.has(itemId)

      if (animatedRef?.current && !alreadyHasListeners) {
        animationEndListeners.current.set(itemId, true)

        animatedRef.current.addEventListener('animationend', () => {
          handleAnimationEnd(itemId)
        })
      }
    })
  }, [handleAnimationEnd, pendingRemovalItemsIds])

  const handleRemoveItems = useCallback((id: number) => {
    setPendingRemovalItemsIds((prevState) => [...prevState, id])
  }, [])

  const getAnimatedRef = useCallback((itemId: number) => {
    let animatedRef = animatedRefs.current.get(itemId)

    if (!animatedRef) {
      animatedRef = createRef()
      animatedRefs.current.set(itemId, animatedRef)
    }

    return animatedRef
  }, [])

  const renderList = useCallback(
    (renderItem: RenderItemCallbackProps) =>
      items.map((item) => {
        const isLeaving = pendingRemovalItemsIds.includes(item.id)
        const animatedRef = getAnimatedRef(item.id)

        console.log({ animatedRef })

        return renderItem(item, { isLeaving, animatedRef })
      }),
    [items, pendingRemovalItemsIds, getAnimatedRef]
  )

  return {
    handleRemoveItems,
    renderList,
    items,
    setItems
  }
}
