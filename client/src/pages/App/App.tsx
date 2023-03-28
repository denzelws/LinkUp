import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

import Home from '../../templates/Home'
import NewContact from '../../templates/NewContact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewContact />} />
        <Route
          path="/edit/:id"
          element={<PageHeader title="Editar Contato" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
