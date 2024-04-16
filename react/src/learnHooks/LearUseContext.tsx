import React, { createContext, useContext, useState } from 'react'

interface IdefaultData {
    count: number
}
interface IContext2 {
    setCount: React.Dispatch<React.SetStateAction<IdefaultData>>
    data: IdefaultData
}
const defaultData: IdefaultData = {
    count: 0
}
const Context2 = createContext<IContext2 | null>(null)
function Child1() {
    const context2 = useContext(Context2)
    return <div>{context2 && context2.data.count}</div>
}
function Child2() {
    const context2 = useContext(Context2)
    return <div onClick={() => {
        context2 && context2.setCount(state => ({ count: state.count + 1 }))
    }}>click</div>

}
function App() {
    const [data, setCount] = useState(defaultData)
    return (
        <Context2.Provider value={{ setCount, data }}>
            <Child1 />
            <Child2 />
        </Context2.Provider>
    )
}

export default App
