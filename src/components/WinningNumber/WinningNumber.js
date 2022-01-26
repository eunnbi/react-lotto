import { useState, useContext } from "react";
import { lottoStateContext } from "../../context/lottoContext";
import LottoBall from "./LottoBall";
import ResultModal from "../ResultModal/ResultModal";
import "../scss/WinningNumber.scss";


function WinningNumber({round}){
    const { winningNumber } = useContext(lottoStateContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="winning-number-section">
            <h2 className="winning-number-section__title">{round}회차 당첨 번호 🎉</h2>
            <ul className="winning-number-section__numbers">
                {winningNumber.map((number, index) => (
                    <li className="winning-number-section__number" key={number}>
                        {index === 6 && <span>+ 보너스 번호</span>}
                        <LottoBall number={number}/>  
                    </li>    
                ))}
            </ul>
            <button className="result-btn" onClick={() => setShowModal(true)}>결과 확인하기</button>
            {showModal && <ResultModal setShowModal={setShowModal}/>}
        </section>
    );
}

export default WinningNumber;