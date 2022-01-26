import React, { useState, useEffect, useRef} from "react";
import { useContext } from "react/cjs/react.development";
import { lottoSetContext } from "../../context/lottoContext";
import { getRemainingTime } from "../../utils/countdown";
import RestartBtn from "../RestartBtn";
import "../scss/Countdown.scss";

function Countdown({round}) {
    const { setCountdown } = useContext(lottoSetContext);
    const [remaining, setRemaining] = useState(null);
    const timer = useRef(null);
    useEffect(() => {
        setRemaining(getRemainingTime());
        timer.current = setInterval(() => setRemaining(getRemainingTime()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (remaining === 0){
            setCountdown(false);
        }
    }, [remaining]);

    return (
        <div className="countdown">
            {remaining ? (
                <>
                    <h2 className="countdown__title">⏰ {round}회차 당첨번호 공개까지 남은 시간 ⏰</h2>
                    <div className="countdown__numbers">
                        <div className="countdown__number">
                            <span >{remaining.day.toString(10).padStart(2, "0")}</span>
                            <span>days</span>
                        </div>
                        <div className="countdown__number">
                            <span>{remaining.hour.toString(10).padStart(2, "0")}</span>
                            <span>hours</span>
                        </div>
                        <div className="countdown__number">
                            <span>{remaining.minutes.toString(10).padStart(2, "0")}</span>
                            <span>mins</span>
                        </div>
                        <div className="countdown__number">
                            <span>{remaining.seconds.toString(10).padStart(2, "0")}</span>
                            <span>hours</span>
                        </div>
                    </div>
                    <RestartBtn/>
                </>
            ) : null}    
        </div>
    );
}

export default Countdown;