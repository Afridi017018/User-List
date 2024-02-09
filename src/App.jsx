import { Outlet } from "react-router-dom"
import Home from "./pages/Home/Home"
import UserDetails from "./pages/UserDetails/UserDetails"

function App() {
  
  return (
    <div>
    <Outlet />
    </div>
  )
}

export default App
