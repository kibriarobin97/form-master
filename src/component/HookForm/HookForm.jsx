import useInputState from "../hooks/useInputState";

const HookForm = () => {

    const [name, handleNameChange] = useInputState('robin')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name)
    }

    return (
        <div className="w-2/3 mx-auto my-10">
            <form onSubmit={handleSubmit} className="space-y-3">
                <input 
                value={name}
                onChange={handleNameChange}
                type="text" placeholder="name" name="name" />
                <br />
                <input type="email" placeholder="email" name="email" id="" />
                <br />
                <input type="password" placeholder="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" className="btn btn-accent" />
            </form>
        </div>
    );
};

export default HookForm;