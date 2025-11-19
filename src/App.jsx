import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import History from "./pages/History.jsx"
import FamilyTree from "./pages/FamilyTree.jsx"
import Oriki from "./pages/Eulogy.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <Routes >
          <Route path='/' element={<Home />}  />
          <Route path="/our-story" element={<History />} />
          <Route path="/family-tree" element={<FamilyTree />} />
          <Route path="/eulogy" element={ <Oriki />} />
        </Routes>
        <Footer />
      </div>

    </>
  )

}