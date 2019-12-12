import React from "react"
import { GameContext } from "../contexts/GameContext"

export default function CreateUser() {
    const [username, setUsername] = React.useState()
    const { socket } = React.useContext(GameContext)

    const goToMatch = e => {
        e.preventDefault()
        if (e.target.id === "create") {
            socket.emit("createMatch", username)
        }
        if (e.target.id === "join") {
            socket.emit("joinMatch", username)
        }
    }

    return (
        <div className="create-user">
            <input
                type="text"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button id="create" onClick={goToMatch}>
                Create a new Match
            </button>
            <button id="join" onClick={goToMatch}>
                Join a Match
            </button>
        </div>
    )
}
