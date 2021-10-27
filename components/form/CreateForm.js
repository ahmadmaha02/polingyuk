import { useState, useContext } from 'react'
import { GlobalContext } from '../../store/contextApi'
import { useRouter } from 'next/router'


import axios from '../../utils/axios'
import DataPicker from './Datepicker'
import InputAnswer from './InfinytyInput'


const CreateForm = () => {
    const { dispatch } = useContext(GlobalContext)

    const router = useRouter()
    
    const [state,setState] = useState({
        title:'',
        desc:' ',
        deadline:null,
        private:false,
        result_private:false,
 
    })
    
    const [answerPlus,setAnswerPlus] = useState(1)
    const [loading ,setLoading] = useState(false)
    const [deadlineShow,setDeadlineShow] = useState(false)
    
    const handleChange = e => {
        const { value, name } = e.target
        setState(prev => ({
            ...prev,
            [name]:value
        }))
    }
    
    const handleCheckBox = e => {
        const { id, checked } = e.target
        setState(prev => ({
            ...prev,
            [id]:checked
        }))
    }
    const handleDeadline = e => setState(prev => ({...prev,deadline:e}))
    

    const handleSubmit = () => {
        setLoading(true)
        if(!deadlineShow) setState(prev => ({...prev,deadline:null}))
        let answer = []
        let data = {}
        
        for(let key in state){
            if(key.substring(0,6) === 'answer'){
                answer.push(state[key]) 
            }else{
                data[key] = state[key]
            }
        }
        if(answer.length >= 2){
            data['choice'] = answer
    
            axios.post('/api/create/',data)
                .then(res => {
                    setLoading(false)
                    router.push(`${res.data.slug}`)
                })
                
                .catch(err => {dispatch({ type:'MESSAGE_SUCCESS', payload:JSON.parse(err.request.response).error});  setLoading(false)} )
            
        }else{
            setLoading(false)
            dispatch({ type:'MESSAGE_SUCCESS', payload:'answer required min 2 choice'})
        }
        
    }

    return (
        <>
           
            <h1 className="block text-center mb-4 sm:text-3xl">Create Poll</h1>
                <div className="flex flex-col w-full"> 
                    <div className="field-group mb-4 flex flex-col">
                        <label htmlFor="title" name="title" className="field-labe">Title</label>                            
                        <input id="title" onChange={e => handleChange(e)} name="title" className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border focus:border-transparent rounded px-4" placeholder="type your question here ..." />
                    </div>
                    <div className="field-group mb-4 flex flex-col">
                        <label htmlFor="desc" name="desc"  className="field-labe">Description (optional)</label>                            
                        <textarea id="desc" name="desc" onChange={e => handleChange(e)} className="field resize-none md:mr-2 bg-base-900 placeholder-gray-500 h-14 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border focus:border-transparent rounded px-4 pt-2" placeholder="type your Description question ..." />
                    </div>
                    <div className="field-group mb-4 flex flex-col">
                        <label className="field-labe">Answers</label>                            
                        <input name="answerL" onChange={e => handleChange(e)} className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:border-transparent focus:shadow-outlin focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." required />
                        <input name="answerR" onChange={e => handleChange(e)} className="field md:mr-2 bg-base-900 placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin focus:border-transparent focus:ring-basefont-500 focus:ring border-gray-300 border rounded px-4" placeholder="type choose answer ..." required />
                        <InputAnswer answerPlus={answerPlus} setAnswerPlus={setAnswerPlus} handleChange={handleChange} />
                    </div>
                    <div className="field-group mb-4 flex flex-col">
                        <span className="field-labe">settings</span>                            
                        <div className="flex mt-4">
                            <input id='private' onChange={e => handleCheckBox(e)}  type="checkbox" className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="private" className="ml-2 text-xs sm:text-base text-base-400">Private ( vote only via link not public (optional) )</label>
                        </div>
                        <div className="flex mt-4">
                            <input id='deadline'onChange={e => setDeadlineShow(e.target.checked)} checked={deadlineShow} type="checkbox" className="form-checkbox h-5 w-5 text-base-700" /><label htmlFor="deadline" className="ml-2 text-xs sm:text-base text-base-400">Deadline ( Vote will close, (optional) )</label>
                        </div>
                        {deadlineShow && <DataPicker handleChange={handleDeadline} />}
                    </div>
                    
                    <div className="flex mt-2">
                        <button disabled={loading} onClick={() => handleSubmit()} className={`${loading && 'cursor-not-allowed'} relative min-h-4 transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full`} >
                            {loading ? <div className="spinner"></div> : 'Create Poll'}
                        </button>
                    </div>
                </div>
        </>      
    )
}

export default CreateForm
