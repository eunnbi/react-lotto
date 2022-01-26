import { useEffect, useState } from "react";
import "../scss/LottoBall.scss";

const LottoBall = ({number}) => {
  const [className, setClassName] = useState("number");

  useEffect(() => {
    let color;
    switch(Math.floor(number / 10)){
      case 0: color = "yellow"; break;
      case 1: color = "blue"; break;
      case 2: color = "red"; break;
      case 3: color = "purple"; break;
      case 4: color = "green"; break;
      default: color = "";
    }
    setClassName(className => className.concat(" ", color));
  }, []);

  return (
      <div className="lotto-ball">
        <div className={className}>{number}</div>
      </div>    
  );
}

export default LottoBall;