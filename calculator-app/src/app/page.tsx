import './globals.css'
import Screeen from "./components/screen"
import Keyboard from "./components/keyboard"

export default function Home() {
    return(
    <div className="calculator">
        <Screeen/>
        <Keyboard/>
    </div>
    )
}