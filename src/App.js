import React from "react"
import "./App.css"
import { GameProvider } from "./contexts/GameContext"
import RenderRouter from "./views/RenderRouter"

function App() {

    const [view, setView] = React.useState()

    React.useEffect(() => {
        setTimeout(() => {
            setView("CREATE_USER");
        }, 3000)
    }, [])

    const log = (...items) => {
        console.log(`${items}`)
    }

    return (
        <GameProvider value={{ log }}>
            <div className="App">
                <RenderRouter view={view} />
            </div>
        </GameProvider>
    )
}

export default App
