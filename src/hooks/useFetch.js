import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    const isMounted = useRef(true)
    const [breaking, setBreaking] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setBreaking({ data: null, loading: true, error: null });

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                        if(isMounted.current){
                        setBreaking({
                            data,
                            loading: false,
                            false: null
                        }) 
                    }else{
                        console.log('No se llamo nada');
                    }
                }, 1000);
            })
    }, [url])

    return breaking
}
