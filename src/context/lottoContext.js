import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { createUserLotto, getWinningNumber } from "../utils/lotto";

const lottoStateContext = createContext({
    pay: 0,
    userLotto: [],
    winningNumber: []
});

const lottoSetContext = createContext({});


function LottoProvider({children}){
    const [pay, setPay] = useState(0);
    const [userLotto, setUserLotto] = useState([]);
    const [winningNumber, setWinningNumber] = useState([]);
    const [countdown, setCountdown] = useState(true);

    useEffect(() => {
        if (pay !== 0){
            const lottoNum = Math.floor(pay / 1000);
            setUserLotto(createUserLotto(lottoNum));
        }
    }, [pay]);

    useEffect(() => {
        if (!countdown){
            setWinningNumber(getWinningNumber());
        }
    }, [countdown]);

    const state = {
        pay,
        userLotto, 
        winningNumber,
        countdown
    };

    const dispatch = {
        setPay,
        setUserLotto,
        setWinningNumber,
        setCountdown
    };

    return (
        <lottoStateContext.Provider value={state}>
            <lottoSetContext.Provider value={dispatch}>
                {children}
            </lottoSetContext.Provider>
        </lottoStateContext.Provider>
    )
}

export {lottoStateContext, lottoSetContext, LottoProvider};
