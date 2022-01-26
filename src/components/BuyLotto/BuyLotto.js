import { useContext, useEffect } from "react";
import { usePay } from "../../hooks/usePay";
import { lottoStateContext } from "../../context/lottoContext";
import "../scss/BuyLotto.scss";


function BuyLotto(){
    const { input, alertText, onChange, onSubmit, onReset } = usePay();
    const { pay } = useContext(lottoStateContext);
    
    useEffect(() => {
        onReset();
    }, [pay]);

    return (
        <section className="pay-section">
           <h2 className="pay-section__title">구입할 금액을 입력해주세요</h2>
           <form className="pay-form" onSubmit={onSubmit} disabled={true}>
                <input
                    className="pay-form__input"
                    type="number"
                    placeholder="구입 금액"
                    value={input}
                    onChange={onChange}
                    disabled={pay}
                />
                <button type="submit" disabled={!input || alertText || pay}>구매</button>
            </form>
            <p className="pay-section__alert">{alertText}</p>
        </section>
    );
        
}

export default BuyLotto;