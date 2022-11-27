import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState ([
       { id:1,
        text: ' i love that girl',
        rating:  10
    }
    ])
const [editFeedback, setFeedbackEdit] = useState( {
    item: {}, 
    edit: false
})
const updateFeedback = function (id, updateItem) {
    setFeedback(
        feedback.map((item) => (item.id === id ? {...item, ...updateItem} : item))
    )
}
    
    const addFeedBack = (newFeedback) => {
        newFeedback.id = uuidv4()
         setFeedback([newFeedback, ...feedback])
    }

    const feedbackEdit = (item) => {
        setFeedbackEdit ({
        item,
        edit: true
    })
    }
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete')){
            setFeedback(feedback.filter((data) => data.id !== id))
        }}

        
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedBack, 
        feedbackEdit,
        editFeedback,
        updateFeedback
            }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext