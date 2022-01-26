import logo from "../images/lotto_ball.png";
import "./scss/Title.scss";

function Title(){
    return (
        <div className="title">
          <img src={logo} alt="lotto ball" className="title__logo"/>
          <h1 className="title__text">행운의 로또</h1>
        </div>
    )
}

export default Title;