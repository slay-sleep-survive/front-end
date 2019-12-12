import React from "react"
import Loading from "./Loading"
import CreateUser from "./CreateUser"
import { GameContext } from "../contexts/GameContext"

export default function RenderRouter() {

    const { socket } = React.useContext(GameContext)
    const [view, setView] = React.useState()

    if (socket) {
        socket.on("view", newView => {
            setView(newView)
            socket.emit("viewChanged")
        })
    }

    switch (view) {
        case "CREATE_USER":
            return <CreateUser />

        default:
            return <Loading />
    }
}
