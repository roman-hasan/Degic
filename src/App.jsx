import Navbar from "./components/Navbar"
import { sections } from "./config/sections.config"
import SectionRenderer from "./core/SectionRenderer"

function App() {
  return (
    <>
       <Navbar/>  
       {
          sections.map((section,i)=>(
            <SectionRenderer key={i} section={section} />
          ))
       }
    </>
  )
}

export default App
