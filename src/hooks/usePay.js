import { useState, useContext, useCallback } from "react";
import { lottoSetContext, lottoStateContext } from "../context/lottoContext";


export const usePay = () => {
    const [input, setInput] = useState("");
    const [alertText, setAlertText] = useState("");
    const { pay } = useContext(lottoStateContext);
    const { setPay } = useContext(lottoSetContext);

    const onChange = useCallback((e) => {
        const { value } = e.target;
        setInput(value);
        if (parseInt(value, 10) < 1000){
            setAlertText("1000원 미만의 금액은 입력이 불가합니다.");
        }
        else{
            setAlertText("");
        }
    }, []);

    const onReset = useCallback(() => {
        if (pay === 0){
            setInput("");
        }
    }, [pay]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const pay = parseInt(input);
        const changes = pay % 1000;
        if (changes !== 0){
            alert(`거스름돈 ${changes}원 챙겨가세요!`);
        }
        setPay(pay);
    }, [input]);

    return {input, alertText, onChange, onSubmit, onReset};

}