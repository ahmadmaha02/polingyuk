import { useState,useContext } from 'react'

import axios from '../../utils/axios'
import Link from 'next/link'

import { useRouter } from 'next/router'

import RadioButton from './RadioButton'
import ShareButton from '../other/copyClipboard'

import { GlobalContext } from '../../store/contextApi';

const Detail = ({
    id,
    desc, 
    title , 
    deadline ,
    deadlineAnswer ,
    create_at ,
    slug  ,
    choice ,
}) => {
    const { dispatch } = useContext(GlobalContext)
    const router = useRouter()
    const [value, setValue] = useState(null)
    const [loading, setLoading] = useState(false)

    
    const handleVote = () => {
        if(value){
            setLoading(true)
            let form = new FormData()
                form.append('question',id)
                form.append('choice',Number(value))
       
            axios.post('/api/vote/',form)
                .then(res => {
                    setLoading(false)
                    dispatch({
                        type:'MESSAGE_SUCCESS',
                        payload:"voted , thank for voting"
                    })
                })
                .catch(err => {
                    const message = JSON.parse(err.request.response)
                    setLoading(false)
                    dispatch({
                        type:'MESSAGE_SUCCESS',
                        payload:message.error
                    })
                })
        }else{
            dispatch({
                type:'MESSAGE_SUCCESS',
                payload:"select you choice !"
            })
        }
    }
    
    return (
        <>
    
            <div className="flex sm:justify-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl sm:text-4x1 mb-2">{title}</h1>
                    <p className="antialiased text-opacity-80 text-base-400 italic text-xs sm:text-base ">Started About {create_at}</p>
                </div>
            </div>
            
          

            <div className="desc text-base-500 font-thin text-lg italic sm:ml-7 my-3">
                <blockquote>
                    " {desc}
                </blockquote> 
            </div>
         
            <div className="ml-2 sm:ml4 mb-4">
                <p className="text-2xl capitalize font-thin mb-4">Vote you answer</p>
                <div className="sm:ml-6 ml-2">
                    {choice.map((item,i) => {
                        return <RadioButton key={i} name={item.text} setValue={setValue} value={item.id} />
                    })}
                </div>
            </div>
            {deadline &&
                        <div className="ml-2 sm:ml4">
                            {deadline.substr(deadline.length - 3) === 'now' ? 
                                <p className="mb-4 text-base-500 text-lg italic capitalize font-thin">Vote will end in {deadline}</p>
                                :
                                <p className="mb-4 text-base-500 text-lg italic capitalize font-thin">vote close on {deadline}</p>
                            }
                        </div> }
            
            <div className="flex flex-col sm:flex-row sm:justify-between">
                   {deadlineAnswer ? 
                    <button disabled className="transition relative duration-300 ease-in-out opacity-40 min-h-20 cursor-not-allowed bg-basefont-800 hover:bg-blue-800 text-white font-bold py-2 px-4  rounded w-full sm:w-3/12">
                        {loading ? <div className="spinner"></div> : 'VOTE'}
                    </button>
                :
                    <button disabled={loading} onClick={() => handleVote()} className={`${loading && 'cursor-not-allowed'} min-h-20 transition relative duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-basefont-800 hover:bg-blue-700 text-white font-bold py-2 px-4 border-blue-700 rounded w-full sm:w-3/12`}>
                        {loading ? <div className="spinner"></div> : 'VOTE'}
                    </button>
                }
                <div className="flex justify-center sm:flex-grow sm:inline-flex sm:justify-end">
                    <Link href={`/${slug}/result`}>
                        <button className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outlin bg-blue-300 hover:bg-blue-700 w-1/2 sm:w-1/4 sm:min-h-full border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex justify-center">
                            <span className="cursor-pointer">Result</span>
                        </button>
                    </Link>
                    <ShareButton url={router.asPath} title={title} /> 
                </div>
            </div>
           
        </>
    )
}

export default Detail