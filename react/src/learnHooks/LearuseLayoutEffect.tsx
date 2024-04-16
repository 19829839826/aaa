import { useEffect, useLayoutEffect, useState } from "react"

function LearuseLayoutEffect() {
    const [state, setState] = useState("hello world")

    // useEffect(() => {
    //     // 渲染后执行, 有闪烁
    //     setState("world hello");
    // }, []);

    useLayoutEffect(() => {
        console.log("🚀 ~ useLayoutEffect ~ useLayoutEffect:", useLayoutEffect)
        // 渲染前执行, 无闪烁
        setState("world hello");
    }, []);

    return (
        <>
            <div>{state}</div>
        </>
    );
}
export default LearuseLayoutEffect;
