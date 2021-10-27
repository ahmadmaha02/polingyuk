import ChildComment from './ChiildComment'

const Rootcomment = ({ id ,content ,timestamp , replies , handleChange}) => {
    const limit = 0
    return (
        <>
            <div className="commet flex flex-col mt-3 pb-2 pl-2 border-gray-500 border-l ">
                <div className="block px-2 text-lg text-base-100 font-thin  ">
                    {content}
                </div>
                <div className="flex pb-2">
                    <div className="block px-2 text-sm italic text-base-400">
                        {timestamp}
                    </div>
                    <button value={id} onClick={e => handleChange(e) } name="parent" className="block px-2 cursor-pointer text-sm italic text-base-400">
                        Reply
                    </button>
                </div>
                {replies.map((item,i) => {
                    return <ChildComment
                                    limit={limit}              
                                    key={i}
                                    id={item.id}
                                    content={item.content}
                                    timestamp={item.timestamp}
                                    handleChange={handleChange}
                                    replies={item.replies}
                                     />
                })}
                
            </div>
        </>
    )
}

export default Rootcomment
