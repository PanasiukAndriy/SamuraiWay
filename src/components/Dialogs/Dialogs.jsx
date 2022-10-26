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

const dialogsData = [
    {id: 1, name: "dima"},
    {id: 2, name: "ira"},
    {id: 3, name: "sasha"},
    {id: 4, name: "oleh"}]

const messagesData = [
    {id: 1, message: "hi"},
    {id: 2, message: "howayou"},
    {id: 3, message: "okk"},
    {id: 4, message: "yeeeahh"}]

const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="dima" id="1"/>
                <DialogItem name="ira" id="2"/>
                <DialogItem name="sasha" id="3"/>

            </div>

            <div className={s.messages}>
                <Message message="hi"/>
                <Message message="howayou"/>
                <Message message="okk"/>
            </div>


        </div>


    )
}
export default Dialogs;