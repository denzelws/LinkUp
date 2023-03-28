import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

import Home from '../../templates/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<PageHeader title="Novo Contato" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
