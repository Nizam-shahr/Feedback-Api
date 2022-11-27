import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../Context/FeedbackContext'


function FeedbackList() {
const {feedback} = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
}
  
    return (
   <div className="feedback-list">
    <AnimatePresence>
    {feedback.map((items) => (
        <motion.div   
        key= {items.id}
        initial ={{opacity: 0}}
        animate = {{opacity :1 }}
            exit= {{opacity: 0}}>
        <FeedbackItem key = {items.id} items = {items}/>
        </motion.div>
    ))}
    </AnimatePresence>
    {/* <div className="feedback-list">
    {feedback.map((items) => (
        <FeedbackItem key = {items.id} items = {items}
        handleDelete = {handleDelete}/>
    ))} */}
    
    </div>
    ) }




export default FeedbackList