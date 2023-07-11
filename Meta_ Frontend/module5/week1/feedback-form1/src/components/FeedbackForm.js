import {useState} from 'react';

export default function FeedbackForm(){
    const [score,setScore] = useState("10");
    const [comment,setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(score<=5 && comment.length <=10){
            alert("Please provide a comment explaining why the experience was not upto your standards. Please ensure you have atleast ten characters.\n Arigato.")
        }
        else {
            console.clear();
            console.log(`Form successfully submitted on ${Date.now()}`)
            console.log(`The score given was ${score}`);
            console.log(`The comment if provided was: ${comment}`);
            setComment("");
            setScore("10");
        }

    }
    return(
        <div className="feedbackform">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className="field">
                        <label htmlFor="range">Score: {score} ⭐️</label>
                        <input value={score} type="range" required min="0" max="10" onChange={e => setScore(e.target.value)} id="range"/>
                    </div>
                    <div className='comment'>
                        <label htmlFor='comment'>Any comments: </label>
                        <textarea name='comment' id='comment' placeholder='Please enter here.' value={comment} onChange={e=> setComment(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}