import React from "react";
import "../scss/ToggleBtn.scss";

function ToggleBtn({showLotto, setShowLotto}){
    return (
        <div className={showLotto ? "toggle-btn show" :"toggle-btn"}>
            <div 
                className="toggle-btn-circle"
                onClick={() => setShowLotto(!showLotto)}
            ></div>
        </div>
    );
}

export default ToggleBtn;