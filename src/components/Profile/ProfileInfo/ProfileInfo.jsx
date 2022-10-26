import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7H4s9BmxCOuWx-dxjnPi8xVDcG275eNFJbQ&usqp=CAU '/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;