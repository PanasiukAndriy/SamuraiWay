import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    const dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesElements = state.messages.map( mess => <Message message={mess.message}/>);
    let newMessageBogy = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) =>{
        let body = e.target.value;

        props.updateNewMessageBody(body)
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBogy}
                                   onChange={onNewMessageChange}
                                   placeholder='enter text'></textarea></div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;