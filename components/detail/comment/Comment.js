import Comments from './Rootcomment'

import axios from '../../../utils/axios'

import { useState, useContext, useRef, useEffect } from 'react'

import { GlobalContext } from '../../../store/contextApi'




const comment = ({ comments, id, contenttype }) => {

    const { dispatch } = useContext(GlobalContext)
    const [loading, setLoading] = useState(false)
    const [state,setState] = useState({
        content:'',
        parent:null,
    })

    const handleChange = e => {
        const { name, value } = e.target
        setState(prev => ({
            ...prev,
            [name]:value
        }))

    }
    const handleSubmit = () => {
        setLoading(true)
        if(state.content !== ''){
            
            const data = {
                content_type:Number(contenttype),
                obj_id:Number(id),
                content:state.content,
                parent:Number(state.parent)
            }
            axios.post(`/comment/create/`,data)
                .then(res => {
                    setLoading(false)
                    dispatch({
                        type:'MESSAGE_SUCCESS',
                        payload:"Comment Success Created"
                    })
                    setState({content:'',parent:null})
                })
                .catch(err => setLoading(false))
        }
    }
    const textinput = useRef(null)
    
    useEffect(() => {
        if(state.parent) textinput.current.focus()
    },[state.parent])


    return (
        <>
            <div className="flex flex-col">
                <p className="text-3xl ">Comments</p>
                <div className="flex flex-col">
                    {state.parent && 
                                <div onClick={ () => setState(prev=> ({...prev,parent:null}))} className="h-4 text-base-600 font-mono cursor-pointer capitalize mt-2 ml-6">
                                    your replies comment , Click if want cancel
                                </div>}
                    <div className="flex mt-2">
                        <textarea ref={textinput} name="content" value={state.content} onChange={e => handleChange(e)} className="bg-base-900 max-h-10 resize-none  focus:border-transparent placeholder-gray-500 h-10 mt-2 transition duration-300 ease-in-out rounded-r-none rounded-l p-2 w-3/4" placeholder="comment this question ..." />
                        <button disabled={loading} onClick={() => handleSubmit()} className={`${loading && 'cursor-not-allowed'} relative transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-basefont-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-sm h-10 mt-2`}>{loading ? <div className="spinner"></div> : 'Comment'}</button>
                    </div>
                    {comments.length > 0 
                    ? 
                        comments.map((item,i) => {
                            return <Comments 
                                        key={i}
                                        id={item.id}
                                        handleChange={handleChange} 
                                        content={item.content}
                                        timestamp={item.timestamp}
                                        replies={item.replies}
                                         />
                        })
                    :
                        <>
                            <div className="inline-flex justify-center justify-items-center italic text-base-600 font-mono capitalize mt-2">
                                jadilah first comment
                            </div>
                        </>
                    }
                </div>
              
            </div>
        </>
    )
}

export default comment
