
const SimpleForm = () => {

    const handleSubmit= e => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }

    return (
        <div className="w-2/3 mx-auto my-10">
            <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" placeholder="name" name="name"/>
                <br />
                <input type="email" placeholder="email" name="email" id=""/>
                <br />
                <input type="number" placeholder="phone number" name="phone" id=""/>
                <br />
                <input type="submit" value="submit" className="btn btn-accent" />
            </form>
        </div>
    );
};

export default SimpleForm;