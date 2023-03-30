import ContactsList from '../../components/ContactsList'
import { Container } from '../../components/Container'
import Header from '../../components/Header'

import cards from '../../components/CardSlider/mock'
import Modal from '../../components/Modal'

const Home = () => (
  <Container>
    <Header />
    <Modal danger />
    <ContactsList items={cards} />
  </Container>
)

export default Home
