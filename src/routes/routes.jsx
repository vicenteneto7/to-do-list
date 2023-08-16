import { Route, Routes } from 'react-router-dom'

import Home from '../pages/App'

const MyRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}
export default MyRouter
