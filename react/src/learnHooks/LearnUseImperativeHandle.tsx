import { forwardRef, useImperativeHandle, useRef } from "react"

interface IChild {
    name: string
}
interface IchildRef {
    a: () => void
    b: React.RefObject<HTMLInputElement>
}
const Child = forwardRef(({ name }: IChild, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const a = () => {
        console.log('a');
    }
    useImperativeHandle(ref, () => ({
        a,
        b: inputRef
    }))
    return <div>
        <div>{name}</div>
        <input type="text" ref={inputRef} />
    </div>
})
function LearnUseImperativeHandle() {
    console.log(111111);
    const childRef = useRef<IchildRef>(null)
    const onClick = () => {
        if (childRef.current && childRef.current.a) {
            childRef.current.a()
        }
        if (childRef.current && childRef.current.b) {
            console.log(childRef.current.b.current);
        }
    }
    return (
        <div>
            <Child name="child" ref={childRef} />
            <div onClick={onClick}>click</div>
        </div>
    );
}
export default LearnUseImperativeHandle;
