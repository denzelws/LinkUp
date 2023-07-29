import { useState, useCallback } from 'react'

type pendingRemovalItemsProps = number[]

type RenderItemCallbackProps = (
  item: AnimatedItemProps,
  options: { isLeaving: boolean }
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

  const handleRemoveItems = useCallback((id: number) => {
    setPendingRemovalItemsIds((prevState) => [...prevState, id])
  }, [])

  const handleAnimationEnd = useCallback((id: number) => {
    setItems((prevState) => prevState.filter((items) => items.id !== id))
    setPendingRemovalItemsIds((prevState) =>
      prevState.filter((itemsId) => itemsId !== id)
    )
  }, [])

  const renderList = useCallback(
    (renderItem: RenderItemCallbackProps) =>
      items.map((item) =>
        renderItem(item, {
          isLeaving: pendingRemovalItemsIds.includes(item.id)
        })
      ),
    [items, pendingRemovalItemsIds]
  )

  return {
    handleRemoveItems,
    handleAnimationEnd,
    renderList,
    items,
    setItems
  }
}
