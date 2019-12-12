import React from "react"
import io from "socket.io-client"

import "./App.css"
import { GameProvider } from "./contexts/GameContext"
import RenderRouter from "./views/RenderRouter"

function App() {
    const [socket, setSocket] = React.useState()
    const [match, setMatch] = React.useState()
    const matchLink = window.location.pathname.replace("/", "")

    // Needed for development to test on both phone and computer
    // Computer uses "localhost" while phone uses the computer's name
    // This makes sure we use the proper url no matter which device we use.
    const urlBase = window.location.href.replace(/:3000\/.*/, "")
    
    React.useEffect(() => {
        if (!socket) setSocket(io.connect(`${urlBase}:2019`))
        if (socket) {
            console.log(socket)
            socket.emit("joinMatch", matchLink)
            socket.on("matchInfo", newMatch => setMatch(newMatch))
            socket.on("allMatchesReturn", console.log)
        }
    }, [socket, matchLink, urlBase])

    return (
        <GameProvider value={{ socket, match }}>
            <div className="App">
                <RenderRouter />
            </div>
        </GameProvider>
    )
}

export default App
