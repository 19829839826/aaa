import { memo, useMemo, useState } from "react"
interface IChild1 {
    name: string
}
const Child1 = memo(({ name }: IChild1) => {
    console.log("🚀 ~ Child1 ~ name:", name)
    return <div>
        {name}
    </div>
})
const Child2 = ({ name }: IChild1) => {
    console.log("🚀 ~ Child1 ~ name:", name)
    return <div>
        {name}
    </div>
}

const LearnUseMemo = () => {
    const [count, setCount] = useState(0)
    const [name1] = useState('xxx1')
    const [name2] = useState('xxx2')
    console.log("🚀 ~ Demo ~ name:", name)
    const MemoChild = useMemo(() => <Child2 name={name1} />, [name1])
    return (
        <div>
            <Child1 name={name2} />
            {MemoChild}
            <div onClick={() => setCount(count + 1)}>click</div>
        </div>
    )
}
export default LearnUseMemo