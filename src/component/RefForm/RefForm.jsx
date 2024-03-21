import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    }

    return (
        <div className="w-2/3 mx-auto my-10">
            <form onSubmit={handleSubmit} className="space-y-3">
                <input ref={nameRef} type="text" placeholder="name" name="name" />
                <br />
                <input ref={emailRef} type="email" placeholder="email" name="email" id="" />
                <br />
                <input ref={passRef} type="password" placeholder="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" className="btn btn-accent" />
            </form>
        </div>
    );
};

export default RefForm;