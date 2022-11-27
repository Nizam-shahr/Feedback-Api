import {FaEdit, FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
function FeedbackItem({items }) {
  const {deleteFeedback, feedbackEdit} = useContext(FeedbackContext)
  return (
    <Card reverse = {true}>
    <div className="num-display">{items.rating}</div>
    <button onClick={() => deleteFeedback (items.id)}
     className="close">
      <FaTimes color='white'/>
    </button>
    <button onClick={() => feedbackEdit(items)} className="edit">
      <FaEdit color='purple'/>
    </button>
     
    <div className="text-display">{items.text}</div>
    </Card>
  )
}
  


FeedbackItem.propTypes ={
  items: PropTypes.object.isRequired
}
export default FeedbackItem