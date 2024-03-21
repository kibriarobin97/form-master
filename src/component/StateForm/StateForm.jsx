import { useState } from "react";

const StateForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(name, email, password)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div className="flex justify-center items-center mt-10">
            <form onSubmit={handleSubmit} className="space-y-3">
                <input 
                onChange={handleNameChange}
                type="text" placeholder="name" name="name" />
                <br />
                <input
                onChange={handleEmailChange}
                type="email" placeholder="email" name="email" id="" />
                <br />
                <input
                onChange={handlePasswordChange}
                type="password" placeholder="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" className="btn btn-accent" />
            </form>
        </div>
    );
};

export default StateForm;