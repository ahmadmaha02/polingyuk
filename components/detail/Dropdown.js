import { useState, useCallback, useContext } from 'react'

import Modal from '../other/edit/modal'
import useClick from '../../utils/reacthooks/useClick'
import axios from '../../utils/axios'
import { useRouter } from 'next/router'
import { GlobalContext } from '../../store/contextApi'

const Dropdown = ({ title, desc ,deadline ,id ,list ,result}) => {
    const router = useRouter()
    const { dispatch } = useContext(GlobalContext)
    
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)
    const [type,setType] = useState(1)
    
    const handleDelete = () => {
        const confirm = window.confirm('are you sure')
        if(confirm){
            axios.delete(`/api/${id}`)
                .then(res =>{ 
                    dispatch({
                    type:'MESSAGE_SUCCESS',
                    payload:"delete success"
                    })
                    router.push('/')
                })
                .catch(err => dispatch({
                    type:'MESSAGE_SUCCESS',
                    payload:"fail try again"
                }))
        }
    }
    
    const onClick = useCallback(() => setShow(false),[])
    useClick(onClick)

    return (
        <>
            <Modal 
                id={id}
                title={title}
                desc={desc}
                deadline={deadline}
                open={open}
                setOpen={setOpen} 
                type={type}
                list={list}
                result={result}
                />

            <div className="dropdown inline-block relative">
            <img width={22} height={22} onClick={() => setShow(prev => !prev )} className="cursor-pointer" loading="eager" src="https://img.icons8.com/color/22/000000/more.png" alt={'more'} />
                <ul className={`dropdown-menu absolute sm:min-w-max right-2 sm:right-0 bg-bgseccond text-white pt-1 shadow-sm ${show ? 'block' : 'hidden'}`}>
                    <li onClick={() => {setOpen(true) ; setType(1)}} className="transition duration-300 ease-in-out hover:bg-basefont-300 hover:text-black cursor-pointer"><p  className="rounded-t py-2 px-4 block whitespace-no-wrap" >Edit</p></li>
                    <li onClick={() => {setOpen(true) ; setType(2)}}className="transition duration-300 ease-in-out hover:bg-basefont-300 hover:text-black cursor-pointer "><p  className=" py-2 px-4 block whitespace-no-wrap" >Update Deadline</p></li>
                    <li onClick={() => handleDelete()} className="transition duration-300 ease-in-out hover:bg-basefont-300 hover:text-black cursor-pointer"><p  className=" py-2 px-4 block whitespace-no-wrap" >Delete</p></li>
                </ul>
            </div>
        </>
    )
}

export default Dropdown
