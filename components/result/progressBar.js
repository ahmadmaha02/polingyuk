import React from 'react'

const progressBar = ({name, percent, color}) => {
    return (
        <>
            <div className="relative pt-1">
                <div className="flex items-center justify-between border-b border-gray-500 py-2">
                    <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                        {name}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-pink-600">
                            {percent}
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-5 mb-1 text-xs  border-b border-gray-500 flex rounded bg-amber-200 ">
                    <div style={{ width: percent,backgroundColor:color }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center `}></div>
                </div>
            </div>  
        </>
    )
}

export default progressBar
