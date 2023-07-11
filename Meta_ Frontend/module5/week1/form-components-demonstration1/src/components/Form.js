import {useState} from 'react';


export default function Form(){
    const [name,setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log(`Submitted on ${Date.now()}`)
    }
    return(
        <div className="form">
            <h2>Sample Form</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label htmlFor="name">Name: </label>
                        <input id="name" type="text" placeholder="name" name="name" value={name} onChange={(e => {setName(e.target.value); console.log(`Logged on ${Date.now()}`)})}/>
                    </div>
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}