import React from "react";
import style from './Messager.module.css'



let Messager = (props) => {
    return (
        <div className={style.wrapper}>
            <div className="dialogs">
                {props.dialogs}

            </div>
            <div className="mesages">
                { props.messages }
            </div>
        </div>
    )
}

export default Messager