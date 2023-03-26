import ContactsList from '../../components/ContactsList'
import { Container } from '../../components/Container'
import Header from '../../components/Header'

import * as S from './styles'

import cards from '../../components/CardSlider/mock'

const Home = () => (
  <Container>
    <Header />
    <ContactsList items={cards} />
  </Container>
)

export default Home
