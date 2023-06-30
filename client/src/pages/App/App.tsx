import { Routes, Route } from 'react-router-dom'

import EditContact from '../../templates/EditContact'
import Home from '../../templates/Home'
import NewContact from '../../templates/NewContact'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  )
}

export default App
