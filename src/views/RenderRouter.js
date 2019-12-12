import React from "react"
import Loading from "./Loading"
import CreateUser from "./CreateUser"

export default function RenderRouter({ view }) {
    switch (view) {
        case "CREATE_USER":
            return <CreateUser />

        default:
            return <Loading />
    }
}
