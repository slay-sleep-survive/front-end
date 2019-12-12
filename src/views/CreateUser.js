import React from "react"
import { GameContext } from "../contexts/GameContext"

export default function CreateUser() {
    const [username, setUsername] = React.useState()
    const { socket, match } = React.useContext(GameContext)
    console.log("match", match)

    const goToMatch = e => {
        e.preventDefault()
        if (username.length < 2) return

        if (e.target.id === "create") {
            socket.emit("createMatch", username)
        }
    }

    return (
        <div className="create-user">
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button id="create" onClick={goToMatch}>
                {match ? `Join and Play` : `Create a new Match`}
            </button>
        </div>
    )
}
