import React, { useEffect, useState } from "react"


const useFetch = (url: string) => {
    const [load, setload] = useState(false)
    const [data, setdata] = useState<React.SetStateAction<string> | null>(null)
    const [error, seterror] = useState(null)

    useEffect(() => {
        console.log("🚀 ~ useFetch ~ url:", url)

        const p: Promise<string> = new Promise((r) => {
            setload(true)
            setTimeout(() => {
                r('data')
            }, 1000)
        })
        p.then((v) => {
            setdata(v)
        })
            .catch(error => {
                seterror(error)
            })
            .finally(() => {
                setload(false)
            })
    }, [url])
    return { load, data, error }
}
const UseFetch = () => {
    console.log('Demo');
    const [count, setCount] = useState(0)
    const { load, data, error } = useFetch('11111111')
    if (load) {
        <div>load</div>
    }

    return (
        <div>
            <div onClick={() => setCount(count => count + 1)}>click</div>
            <div >{count}</div>
            {data ? <div>data</div> : null}
            {error ? <div>error</div> : null}
        </div>
    )
}
export default UseFetch