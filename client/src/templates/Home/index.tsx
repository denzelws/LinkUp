import ContactsList from '../../components/ContactsList'
import { Container } from '../../components/Container'
import Header from '../../components/Header'

import useHome from '../Home/useHome'

const Home = () => {
  const {
    searchTerm,
    contactCount,
    handleChangeSearchTerm,
    handleContactCountChange
  } = useHome()

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
