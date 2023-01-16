import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogs = [
        {id: 1, name: "dima"},
        {id: 2, name: "ira"},
        {id: 3, name: "sasha"},
        {id: 4, name: "oleh"}
    ]

    const messagesData = [
        {id: 1, message: "hi"},
        {id: 2, message: "howayou"},
        {id: 3, message: "okk"},
        {id: 4, message: "yeeeahh"}
    ]

    const dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesElements = messagesData.map( mess => <Message message={mess.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;