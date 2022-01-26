import { useContext, useState } from "react";
import { lottoStateContext } from "../../context/lottoContext";
import ToggleBtn from "./ToggleBtn";
import UserLottoItem from "./UserLottoItem";
import "../scss/UserLotto.scss";

function UserLotto(){
    const { userLotto } = useContext(lottoStateContext);
    const [showLotto, setShowLotto] = useState(false);

    return (
        <section className="user-lotto">
            <div className="user-lotto__row">
               <h1 className="user-lotto__title">총 {userLotto.length}개를 구매하였습니다.</h1>
               <div className="toggle-btn-wrap">
                    <span>번호보기</span>
                    <ToggleBtn setShowLotto={setShowLotto} showLotto={showLotto}/>
               </div>
            </div>
            <ul className={showLotto ? "user-lotto__list show" : "user-lotto__list"}>
                {userLotto.map((lotto, index) => (
                    <UserLottoItem key={index} lotto={lotto}/>
                ))}
            </ul>
        </section>
    );
}

export default UserLotto;