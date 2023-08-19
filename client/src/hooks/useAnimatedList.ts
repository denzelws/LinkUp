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

  const handleAnimationEnd = useCallback((itemId: number) => {
    const removeListener = animationEndListeners.current.get(itemId)
    removeListener()

    animationEndListeners.current.delete(itemId)
    animatedRefs.current.delete(itemId)

    console.log({ animationEndListeners, animatedRefs })

    setItems((prevState) => prevState.filter((item) => item.id !== itemId))
    setPendingRemovalItemsIds((prevState) =>
      prevState.filter((id) => itemId !== id)
    )
  }, [])

  useEffect(() => {
    pendingRemovalItemsIds.forEach((itemId) => {
      const animatedRef = animatedRefs.current.get(itemId)
      const animatedElement = animatedRef?.current
      const alreadyHasListeners = animationEndListeners.current.has(itemId)

      if (animatedElement && !alreadyHasListeners) {
        const onAnimationEnd = () => handleAnimationEnd(itemId)
        const removeListener = () => {
          animatedElement.removeEventListener('animationend', onAnimationEnd)
        }

        animatedElement.addEventListener('animationend', onAnimationEnd)
        animationEndListeners.current.set(itemId, removeListener)
      }
    })
  }, [handleAnimationEnd, pendingRemovalItemsIds])

  useEffect(() => {
    const removeListeners = animationEndListeners.current

    return () => {
      removeListeners.forEach((removeListener) => removeListener())
    }
  }, [])

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
