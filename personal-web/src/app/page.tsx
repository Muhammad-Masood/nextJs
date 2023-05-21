import AboutMe from "./component/about-me"
import Profession from "./component/profession"
import Skills from "./component/skills"
import { skills } from "./data/page-data"

export default function Home(){
  return (
    <div>
    <AboutMe/>
    <Skills/>
    <Profession/>  
    </div>
  )
}