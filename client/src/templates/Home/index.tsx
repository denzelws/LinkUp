import { useState } from 'react'
import ContactsList from '../../components/ContactsList'
import { Container } from '../../components/Container'
import Header from '../../components/Header'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChangeSearchTerm = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm)
  }

  return (
    <Container>
      <Header
        searchTerm={searchTerm}
        onChangeSearchTerm={handleChangeSearchTerm}
      />
      <ContactsList searchTerm={searchTerm} />
    </Container>
  )
}

export default Home
