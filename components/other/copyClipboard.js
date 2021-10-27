import { copyToClipboard } from '../../utils/copyClipbord'
import { shareurl } from '../../utils/baseUrl'

import { useContext } from 'react'
import { GlobalContext } from '../../store/contextApi';

export default function copyClipbord({ url, title }){
    const { dispatch } = useContext(GlobalContext)
    const toClipbord = () => {
        try {
            copyToClipboard(shareurl(url))
            dispatch({
                type:'MESSAGE_SUCCESS',
                payload:"Copy to Clipboard"
            })
         
        } catch (error) {
            dispatch({
                type:'MESSAGE_SUCCESS',
                payload:"fail copy to clipboard"
            })

        }
    }
    const copyClipbord = () => {
        toClipbord()
        if(navigator.canShare){
            navigator.share({
                url:`https://pollin1.netlify.app${url}`,
                text:`hey Time to vote`,
                title:`${title} - pollIn`
            })
        }
        
    }
    return(
    <button onClick={() => copyClipbord()} className="transition duration-300shado ease-in-out focus:outline-none focus:w-outlin bg-blue-300 hover:bg-blue-700 w-1/2 border sm:w-1/4 sm:min-h-full  border-blue-500 text-gray-800 font-bold py-2 px-4 inline-flex items-center justify-center">
        <span>Share</span>
    </button> ) 
}