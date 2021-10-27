import { useCallback } from 'react'
import UseEsc from '../../../utils/reacthooks/useEscape'
import RootContent from './selectedContent'

const modal = ({ 
    open, 
    setOpen, 
    type, 
    title,
    desc,
    id,
    deadline,
    result,
    list,}) => {

    const onEsc = useCallback(() => setOpen(false),[])
    UseEsc(onEsc)

    return (
       
        <div className={`fixed z-10 inset-0 overflow-hidden ${!open && 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true" >
            <div className="min-h-screen sm:pt-4 sm:px-4 pb-20 text-center align-middle block sm:mt-0 p-0 mt-72">
                {/* opacity */}
                <div onClick={() => setOpen(prev => !prev )} className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="h-screen sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block rounded-lg text-left shadow-xl transform transition-all  sm:my-8 align-middle w-screen sm:max-w-lg sm:w-full">
                {/* content modal */}
                <div className=" bg-gradient-to-r from-bgseccond to-bgseccond2 p-8 sm:p-6 sm:pb-4 ">
                    <RootContent 
                        title={title} 
                        type={type}
                        desc={desc}
                        deadline={deadline}
                        id={id} 
                        list={list}
                        result={result} />
                </div>            
            </div>
        </div>
        </div>
    )
}

export default modal
