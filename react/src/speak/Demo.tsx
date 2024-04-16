import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Input, Button, Select } from 'antd';
const { TextArea } = Input;

function Demo() {
    console.log(1);
    const synth = window.speechSynthesis;
    const [list, setlist] = useState<any>([])
    const [curlang, setcurlang] = useState('')
    const [alllang, setalllang] = useState([])
    const inpuRef = useRef(null)

    let voices = [];

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        setcurlang(value)
    };
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
        setalllang(voices)
        console.log(voices);
        if (voices && Array.isArray(voices)) {
            setlist(voices.map(v => ({
                label: v.lang,
                value: v.lang
            })))
        }


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

            for (let i = 0; i < alllang.length; i++) {
                if (alllang[i].lang ===curlang) {
                    utterThis.voice = alllang[i];
                    break;
                }
            }
            utterThis.pitch = '1'
            utterThis.rate = '1';
            console.log(utterThis,curlang,alllang);
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
            <Select
                style={{ width: 250, marginTop: 20 }}
                onChange={handleChange}
                options={list}
                placeholder="点我选择语言"
            />
            <div>
                <Button onClick={click} type="primary" style={{ marginTop: 20 }}>播放</Button>

            </div>
        </div>
    );
}
export default Demo;
