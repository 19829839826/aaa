import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Input, Button } from 'antd';
const { TextArea } = Input;

function Demo() {
    console.log(1);
    const synth = window.speechSynthesis;

    const inpuRef = useRef(null)

    let voices = [];


    function populateVoiceList() {
        voices = synth.getVoices().sort(function (a, b) {
            const aname = a.name.toUpperCase();
            const bname = b.name.toUpperCase();

            if (aname < bname) {
                return -1;
            } else if (aname == bname) {
                return 0;
            } else {
                return +1;
            }
        });
        console.log(voices);

    }
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    function speak() {
        const inputvalue = inpuRef.current.resizableTextArea.textArea.value
        if (synth.speaking) {
            console.error("speechSynthesis.speaking");
            return;
        }

        if (inputvalue !== "") {
            const utterThis = new SpeechSynthesisUtterance(inputvalue);

            utterThis.onend = function (event) {
                console.log("SpeechSynthesisUtterance.onend");
            };

            utterThis.onerror = function (event) {
                console.error("SpeechSynthesisUtterance.onerror");
            };

            for (let i = 0; i < voices.length; i++) {
                if (voices[i].lang.includes('zh')) {
                    utterThis.voice = voices[i];
                    break;
                }
            }
            utterThis.pitch = '1'
            utterThis.rate = '1';
            synth.speak(utterThis);
        }
    }
    const click = () => {
        speak();

    }


    useEffect(() => {
        populateVoiceList();


    }, [])
    return (
        <div>
            <TextArea ref={inpuRef} />
            <Button onClick={click} type="primary" style={{ marginTop: 20 }}>播放</Button>
        </div>
    );
}
export default Demo;
