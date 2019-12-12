import React from "react"
import { GameContext } from "../contexts/GameContext"


export default function GameSettings() {

    const { socket, match } = React.useContext(GameContext)

    const matchLink = window.location.href + match.id

    const logAllMatches = () => {
        socket.emit("findAllMatches")
    }

    return (
        <div>
            <h1>We made it!</h1>
            <p>Match Owner: {match.owner.username}</p>

            <p>Link to this match:</p>
            <p>{matchLink}</p>
            <button onClick={logAllMatches}>Log all matches</button>
        </div>
    )
}