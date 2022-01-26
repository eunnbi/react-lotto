import { IoTicketSharp } from "react-icons/io5";

const UserLottoItem = ({lotto}) => {
    return (
        <li className="user-lotto__item">
            <IoTicketSharp className="icon"/>
            <div className="user-lotto__number">
                {lotto && lotto.map((number) => {
                    let text = number.toString(10).padStart(2, "0");
                    return (
                        <span key={number}>{text} </span>  
                    );
                })}
            </div>
        </li>
    );
}

export default UserLottoItem;