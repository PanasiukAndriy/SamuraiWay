import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let  state = props.store.getState().dialogsPage;

    const dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesElements = state.messages.map( mess => <Message message={mess.message}/>);
    let newMessageBogy = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNeMessageChange = (e) =>{
        debugger
        let text = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator({text}));
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
                                   onChange={onNeMessageChange}
                                   placeholder='enter text'></textarea></div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;