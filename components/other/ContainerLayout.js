import React from 'react'

const ContainerLayout = ({ children }) => {
    return (
        <div className="container mx-auto my-5 bg-gradient-to-r from-bgseccond to-bgseccond2 relative sm:w-5/6 w-screen p-10 rounded">
            {children}
        </div>
    )
}

export default ContainerLayout
