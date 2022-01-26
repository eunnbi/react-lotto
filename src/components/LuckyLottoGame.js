import { useContext, useMemo } from "react";
import { lottoStateContext } from "../context/lottoContext";
import Title from "./Title";
import BuyLotto from "./BuyLotto/BuyLotto";
import UserLotto from "./UserLotto/UserLotto";
import WinningNumber from "./WinningNumber/WinningNumber";
import Countdown from "./Countdown/Countdown";
import { getNextRound } from "../utils/lotto";

const LuckyLottoGame = () => {
    const { pay, countdown } = useContext(lottoStateContext);
    const round = useMemo(() => getNextRound(), []);
    return (
        <div className="wrap">
            <Title/>
            <BuyLotto/>
            {pay !== 0 && (
                <>
                    <UserLotto/>
                    {countdown ? <Countdown round={round}/>  : <WinningNumber round={round}/>}            
                </>
            )}
        </div>
    );
}

export default LuckyLottoGame;