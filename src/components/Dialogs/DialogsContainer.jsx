import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer.ja";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator({text: body}))},
        sendMessage: () => {dispatch(sendMessageCreator())}
    }
}

const AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer  = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;