import { useEffect,useContext } from 'react'
import { GlobalContext } from '../store/contextApi'
import Notify from 'handy-notification'

const alert = () => {
    const { state } = useContext(GlobalContext)
    const { message } = state
    
    useEffect(() => {       
        message !=='' && Notify({ value: message })
    },[message])
    
    return (
        <div className='handy-notify'>
            <span></span>
        </div>
    ) 
       
       
    }
    
export default alert 