import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="dima" id ="1"/>
                    <DialogItem name="ira" id ="2"/>
                    <DialogItem name="sasha" id ="3"/>

                </div>

                <div className={s.messages}>
                    <Message message="hi"/>
                    <Message message="howayou"/>
                    <Message message="okk"/>
                </div>


            </div>

        </div>
    )
}
export default Dialogs;