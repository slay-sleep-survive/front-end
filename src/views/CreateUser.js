import React from "react";

export default function CreateUser() {

    const [username, setUsername] = React.useState();

    const goToMatch = e => {
        e.preventDefault();
        if (e.target.id === "create") {
            return console.log("CREATE")
        }
        if (e.target.id === "join") {
            return console.log("JOIN")
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
            <button id="create" onClick={goToMatch}>Create a new Match</button>
            <button id="join" onClick={goToMatch}>Join a Match</button>
        </div>
    )
}