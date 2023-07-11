import {useState} from 'react';


export default function Form(e){
    const [value,setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log('logged');
        console.log(`\n Current input character: ${e.target.value}`)
    }

    return(
        <div>
            <p className='para'>Check the console while typing in the form to see that handleChange gets executed everytime a new character is input.</p>
            <form>
                <input value={value}
                       onChange={handleChange}
                       type="text">
                </input>
            </form>
        </div>
    )
}