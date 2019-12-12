import React from "react"
import io from "socket.io-client"

import "./App.css"
import { GameProvider } from "./contexts/GameContext"
import RenderRouter from "./views/RenderRouter"

function App() {
    const [socket, setSocket] = React.useState();
    const matchLink = window.location.pathname.replace("/", "");

    React.useEffect(() => {
        if (!socket)
            setSocket(io.connect("http://localhost:2019"))
        if (socket)
            socket.emit("joinMatch", matchLink)

    }, [socket, matchLink])

    return (
        <GameProvider value={{ socket }}>
            <div className="App">
                <RenderRouter />
            </div>
        </GameProvider>
    )
}

export default App
