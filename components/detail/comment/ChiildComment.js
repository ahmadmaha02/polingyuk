import Link from 'next/link'

const ChildComment = ({ id, content, timestamp ,replies ,handleChange, limit }) => {
    return (
        <>
            <div className="reply ml-4 flex flex-col pt-1 pl-3 border-l border-gray-500 ">
                <div className="block px-2 text-lg text-base-100 font-thin ">
                  {content}
                </div>
                <div className="flex pb-3">
                    <div className="block px-2 text-xs sm:text-sm italic truncate text-base-400">
                        {timestamp}
                    </div>
                    <button value={id} onClick={e => handleChange(e) } name="parent" className="block px-2 cursor-pointer text-sm italic text-base-400">
                        Reply
                    </button>
                </div>
                <div className="reply-reply ml-4 flex flex-col ">
                    {(replies.length > 0 && limit <= 1)
                     ? replies.map((item,i) => {
                        return <ChildComment 
                                    key={i}        
                                    limit={limit + 1}
                                    content={item.content}
                                    handleChange={handleChange}
                                    timestamp={item.timestamp}
                                    id={item.id}
                                    replies={item.replies} />
                    })                    
                    : replies.length > 0 && 
                                        <>
                                        <Link href={`/comment/${id}`}><a><p className="text-xs sm:text-sm font-thin bg-basefont-600 sm:w-1/3 rounded-3xl w-full inline-flex justify-center justify-items-center font-mono capitalize">continue thread {replies.length}</p></a></Link>
                                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default ChildComment
