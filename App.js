import AboutIconLink from './components/AboutIconLink'
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import '../src/App.css'
import FeedbackForm from "./components/FeedbackForm"
import { FeedbackProvider } from './Context/FeedbackContext'
function App (){
    return(
        <FeedbackProvider>
       
        <Header text={ 'Feedback UI'}/> 

        <div className="container">
           
        <FeedbackForm/>
        <FeedbackStats />
        <FeedbackList />

       </div>
       
        </FeedbackProvider>
    )
                }
    
    

export default App