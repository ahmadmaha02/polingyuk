import { createContext,useReducer } from 'react'

import reducer from './reducer'

const initialState = {
    message:'',
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}