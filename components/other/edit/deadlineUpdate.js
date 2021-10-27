import { useState,useContext } from 'react'

import axios from '../../../utils/axios'
import { GlobalContext } from '../../../store/contextApi'

import DatePicker from '../../form/Datepicker'


const deadlineUpdate = ({ id, deadline }) => {
    const { dispatch } = useContext(GlobalContext)
    const [time,setDeadline] = useState(deadline)
    const [cheked,setChaked] = useState(false)
    const [nodeadline,setNot] = useState(false)

    const handleDeadline = e => setDeadline(e)
    
    const handleSubmit = () => {
        if(cheked){
            const data ={
                deadline:new Date()
            }
            axios.put(`/api/${id}/`,data)
                .then(res => dispatch({
                    type:'MESSAGE_SUCCESS',
                    payload:"update Deadline"
                }))
                .catch(err => console.log(err.request))
        }else if(nodeadline){
            const data ={
                deadline:'nodeadline',
            }
            axios.put(`/api/${id}/`,data)
                .then(res => dispatch({
                    type:'MESSAGE_SUCCESS',
                    payload:"update Deadline"
                }))
                .catch(err => console.log(err.request))
        }
        else{
            const data ={
                deadline: time
            }
            axios.put(`/api/${id}/`,data)
                .then(res => dispatch({
                    type:'MESSAGE_SUCCESS',
                    payload:"update Deadline"
                }))
                .catch(err => console.log(err.request))
        }
    }

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="field-group mb-4 flex flex-col">
                    <div className="flex mt-4">
                        <input id='deadline' type="checkbox" onChange={ e => setChaked(e.target.checked)} checked={cheked} className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="deadline" className="ml-2 text-base-400">Close Vote Now !</label>
                    </div>
                </div>
                <div className="field-group mb-4 flex flex-col">
                    <div className="flex mt-4">
                        <input id='not' type="checkbox" onChange={ e => setNot(e.target.checked)} checked={nodeadline} className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="not" className="ml-2 text-base-400">No deadline !</label>
                    </div>
                </div>
                <div className="field-group mb-4 flex flex-col">
                    <DatePicker handleChange={handleDeadline} />
                </div>
                <div className="w-full">
                    <button onClick={()=>handleSubmit()} className={`transition relative duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full`}>
                        submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default deadlineUpdate
