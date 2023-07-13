import { useState } from 'react'

export const useHome = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [contactCount, setContactCount] = useState(0)

  const handleChangeSearchTerm = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm)
  }

  const handleContactCountChange = (count: number) => {
    setContactCount(count)
  }

  return {
    searchTerm,
    contactCount,
    handleChangeSearchTerm,
    handleContactCountChange
  }
}

export default useHome
