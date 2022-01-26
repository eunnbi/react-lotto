import { useCallback, useContext } from "react"
import { lottoSetContext } from "../context/lottoContext"

const RestartBtn = ({closeModal}) => {
    const { setPay, setUserLotto, setWinningNumber, setCountdown } = useContext(lottoSetContext);
    const onRestart = useCallback(() => {
        setPay(0);
        setUserLotto([]);
        setWinningNumber([]);
        setCountdown(true);
        if (closeModal){
            closeModal();
        }
    }, []);
    return (
        <button onClick={onRestart} className="restart-btn">다시 시작하기</button>
    );
}

export default RestartBtn;