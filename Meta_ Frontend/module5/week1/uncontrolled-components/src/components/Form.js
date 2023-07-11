import {useRef} from 'react';

export default function Form(){
    const inputRef = useRef(null);

    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
        console.log(`The input from the form was : ${inputValue}`);
    }

    return(
        <div>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text"/>
        </form>
        </div>
    )
}