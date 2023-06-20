import { useState } from 'react'
import ContactsList from '../../components/ContactsList'
import { Container } from '../../components/Container'
import Header from '../../components/Header'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [contactCount, setContactCount] = useState(0)

  const handleChangeSearchTerm = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm)
  }

  const handleContactCountChange = (count: number) => {
    setContactCount(count)
  }

  return (
    <Container>
      <Header
        withoutInput={contactCount === 0}
        searchTerm={searchTerm}
        onChangeSearchTerm={handleChangeSearchTerm}
      />
      <ContactsList
        searchTerm={searchTerm}
        onContactCountChange={handleContactCountChange}
      />
    </Container>
  )
}

export default Home
