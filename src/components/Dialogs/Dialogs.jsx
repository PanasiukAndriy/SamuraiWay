import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog}>
                        dima
                    </div>
                    <div className={s.dialog}>
                        valera
                    </div>
                    <div className={s.dialog}>
                        ira
                    </div>

                </div>

                <div className={s.messages}>
                    <div className={s.message}>
                        hi
                    </div>
                    <div className={s.message}>
                        how are you
                    </div>
                    <div className={s.message}>
                        okk
                    </div>

                </div>


            </div>

        </div>
    )
}
export default Dialogs;