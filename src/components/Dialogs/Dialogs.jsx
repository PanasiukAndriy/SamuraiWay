import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {



    const dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesElements = props.state.messages.map( mess => <Message message={mess.message}/>);

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