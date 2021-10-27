import { useState,useContext } from 'react'
import { GlobalContext } from '../../../store/contextApi'
import axios from '../../../utils/axios'

const formUpdate = ({ id, title, desc, list, result  }) => {
    const { dispatch } = useContext(GlobalContext)

    const [state,setState] = useState({
        title:title,
        desc:desc,
        private:list,
        result_private:result,
    })
  
    const handleChange = e => {
        const { name, value } = e.target

        setState(prev => {
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const handleCheck = e => {
        const { id, checked } = e.target
        setState(prev => {
            return{
                ...prev,
                [id]:checked
            }
        })
    }
    const handleSubmit = () => {
        
        const data = JSON.stringify(state)
        axios.put(`/api/${id}/`,data)
            .then(res => dispatch({
                type:'MESSAGE_SUCCESS',
                payload:"updated"
            }))
            .catch(err => dispatch({
                type:'MESSAGE_SUCCESS',
                payload:"fail ,try again"
            }))
    
      
    }
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="field-group mb-4 flex flex-col">
                    <label htmlFor="title" name="title" className="field-labe">Title</label>                            
                    <input id="title" onChange={ e => handleChange(e)} value={state.title} name="title" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type your question here ..." />
                </div>
                <div className="field-group mb-4 flex flex-col">
                    <label htmlFor="desc" name="desc"  className="field-labe">Description</label>                            
                    <textarea id="desc" onChange={ e => handleChange(e)} value={state.desc} name="desc" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-14 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4 pt-2" placeholder="type your Description question ..." />
                </div>
                <div className="flex mt-4">
                    <input id='private' onChange={e => handleCheck(e)}  type="checkbox" checked={state.private} className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="private" className="ml-2 text-base-400">Private ( vote only via link )</label>
                </div>
                <div className="flex mt-4 mb-2">
                    <input id='result_private' onChange={e => handleCheck(e)} checked={state.result_private} type="checkbox" className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="result_private" className="ml-2 text-base-400">Private result( only you can in result )</label>
                </div>
                <button onClick={() => handleSubmit()} className={`transition relative duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full`}>
                    submit
                </button>
            </div>
        </>
    )
}

export default formUpdate
