// importing pages, components, and React Router components to route pages.
import Header from "./components/Header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"
import {Routes, Route} from "react-router-dom"

// composing jsx for App and routing paths
function App() {
  return (
    <div>
        <Header />

        <Routes>
            <Route path="/" element={<Photos />} />
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    </div>
  )
}

// exporting App to be imported in index.js
export default App
