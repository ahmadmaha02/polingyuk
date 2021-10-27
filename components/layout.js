import Navbar from './Navbar'
import Alert from './Alert'
export default function layout({ children }) {
    return (
        <>
            <Navbar/>
            <Alert />
            <main>
                {children}
            </main>            
        </>
    )
}
