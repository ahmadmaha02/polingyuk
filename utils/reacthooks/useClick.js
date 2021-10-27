import { useEffect } from 'react';

const useClick = (onEscape) => {
    useEffect(() => {
        const handleClick = (event) => {
            if(event.toElement.localName !== 'p' && event.toElement.localName !== 'img' ) onEscape();
        };
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [onEscape]);
}

export default useClick
