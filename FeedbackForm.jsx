import { useState, useContext, useEffect } from "react" 
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "../Context/FeedbackContext"

function FeedbackForm() {
    const [text, setText] = useState ('')
    const [rating, setRating] = useState (10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const {addFeedBack, editFeedback, updateFeedback} = useContext(FeedbackContext)
   
    useEffect(() => {
if(editFeedback.edit === true){
    setbtnDisabled(false)
    setText(editFeedback.item.text)
    setRating(editFeedback.item.rating)

}
    },[editFeedback])

    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setbtnDisabled(true)
        } else {
            setMessage(null)
            setbtnDisabled(false)
        }
        
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }
            if (editFeedback.edit === true) {
                updateFeedback(editFeedback.item.id, newFeedback)
            }else {
                addFeedBack(newFeedback)
            }
            addFeedBack(newFeedback)
            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service for us?</h2>
            <RatingSelect select= {(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                <Button type="submit" isDisabled={btnDisabled} version ="secondary">Send</Button>
            </div>
            {message && <div className="message">{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm
