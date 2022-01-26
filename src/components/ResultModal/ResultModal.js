import { useContext, useMemo } from "react";
import {  FaTimes } from "react-icons/fa";
import { lottoStateContext } from "../../context/lottoContext";
import { matchNumbers, calcWinningResult, calcPrize, calcProfitRate } from "../../utils/result";
import ReStartBtn from "../RestartBtn";
import ResultTable from "./ResultTable";
import "../scss/ResultModal.scss";

const ResultModal = ({setShowModal}) => {
    const { pay, userLotto, winningNumber } = useContext(lottoStateContext);
    const matchedLotto = useMemo(() => matchNumbers(userLotto, winningNumber), [userLotto, winningNumber]);
    const winningResult = useMemo(() => calcWinningResult(matchedLotto), [matchedLotto]);
    const prize = useMemo(() => calcPrize(winningResult), [winningResult]);
    const profitRate = useMemo(() => calcProfitRate(prize, pay), [prize, pay]);
    return (
        <section className="modal">
            <div className="modal__main">
                <button className="close-btn" onClick={() => setShowModal(false)}>
                    <FaTimes/>
                </button>
               <ResultTable matchedLotto={matchedLotto} winningResult={winningResult}/>
                <ul className="result-info">
                    <li className="prize">💸 당첨금액: {prize}원</li>
                    <li className="profit-rate">💸 수익률: {profitRate}%</li>
                </ul>
                <ReStartBtn closeModal={() => setShowModal(false)}/>
            </div>
        </section>
        
    );
}

export default ResultModal;