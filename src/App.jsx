import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { sections } from "./config/sections.config"
import SectionRenderer from "./core/SectionRenderer"

function App() {
  return (
    <>
       <Navbar/> 
       <main>
          {
              sections.map((section,i)=>(
                <SectionRenderer key={i} section={section} />
              ))
          }
       </main> 
       <Footer/>
    </>
  )
}

export default App
