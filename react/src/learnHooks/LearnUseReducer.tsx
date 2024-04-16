import { useReducer } from "react"
interface IinitData {
    name: string
    age: number
}
type Taction =
    {
        type: 'N',
        payload: string
    }
    |
    {
        type: 'A',
    }
const initData = {
    name: 'xxx',
    age: 0
}
const reduce = (state: IinitData, action: Taction) => {
    switch (action.type) {
        case 'N':
            return { ...state, name: action.payload }
        case 'A':
            return { ...state, age: state.age + 1 }
        default:
            return state
    }

}
const LearnUseReducer = () => {
    const [state, dispatch] = useReducer(reduce, initData)
    return <div>
        <div>{state.age}</div>
        <div>{state.name}</div>
        <div onClick={() => dispatch({
            type: 'N',
            payload: 'OOOO'
        })}>click1</div>
        <div onClick={() => dispatch({
            type: 'A'
        })}>click2</div>
    </div>
}
export default LearnUseReducer