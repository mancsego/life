import { Route, Routes } from 'react-router'
import HomeView from '../home/View.jsx'

function Router() {
  return (
    <main>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="about" element={<div>About</div>} />
      </Routes>
    </main>
  )
}

export default Router
