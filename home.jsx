import React, { useState } from 'react'
import FeedbackData from '../data/FeedbackData'
import FeedbackForm from './FeedbackForm'
import FeedbackList from './FeedbackList'
import FeedbackStats from './FeedbackStats'
import Header from './Header'
import {v4 as uuidv4} from 'uuid'

const Home = () => {
    const addFeedBack = (newFeedback) => {
        newFeedback.id = uuidv4()
         setFeedback([newFeedback, ...feedback])
    }
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete')){
            setFeedback(feedback.filter((data) => data.id !== id))
        }}
  return (
    <>
        <Header text={ 'Feedback UI'}/> 
        <FeedbackForm handleAdd = {addFeedBack}/>
        <FeedbackStats feedback ={feedback}/>
        <FeedbackList feedback = {feedback}
        handleDelete = {deleteFeedback}/>
    </>
  )
}

export default Home
