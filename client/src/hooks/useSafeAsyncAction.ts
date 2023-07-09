import { useCallback } from 'react'
import { useIsMounted } from '../hooks/useIsMounted'

type Callback = () => void

export const useSafeAsyncAction = () => {
  const isMounted = useIsMounted()

  const runSafeAsyncAction = useCallback(
    (callback: Callback) => {
      if (isMounted()) {
        callback()
      }
    },
    [isMounted]
  )

  return runSafeAsyncAction
}
