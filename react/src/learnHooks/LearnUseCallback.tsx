import { memo, useCallback, useState } from "react"
interface IChild1 {
    name: string
    onclick: () => void
}
const Child = memo(({ name, onclick }: IChild1) => {
    console.log("🚀 ~ Child ~ name:", name)
    return <div>
        <div>
            {name}
        </div>
        <div onClick={onclick}>clickChild</div>
    </div>
})


const LearnUseCallback = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('xxx')
    console.log("🚀 ~ Demo ~ name:", name)
    const onclick = useCallback(() => {
        setName('OOO')
    }, [])
    return (
        <div>
            <Child name={name} onclick={onclick} />
            <div onClick={() => setCount(count + 1)}>click</div>
        </div>
    )
}
export default LearnUseCallback