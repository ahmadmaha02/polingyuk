const reducer = ( state, action ) => {
    let py = action.payload

    switch(action.type){
        case "MESSAGE_SUCCESS":
            return {
                message: py
            }
            
        case "MESSAGE_FAIL":
            return {
                message: py
            }

        default:

            return state
    }
}
export default reducer