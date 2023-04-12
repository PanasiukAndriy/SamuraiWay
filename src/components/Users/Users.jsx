import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/blue-user-icon-32.jpg';
import axios from "axios";

let Users = (props) => {
    const urlImg = 'https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=681&h=383&crop=1&resize=681%2C383';
    if(props.users.length === 0)
    {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").
        then(response => props.setUsers(response.data.items));

        /*props.setUsers([
            {id: 1, photoURL: urlImg, followed: true, fullName: 'Dima', status: 'my statysss', location: {city: 'kiev', country:'UA'}},
            {id: 2, photoURL: urlImg, followed: false, fullName: 'Andrew', status: 'my statysss', location: {city: 'london', country:'GB'}},
            {id: 3, photoURL: urlImg, followed: true,  fullName: 'Sasha', status: 'my statysss', location: {city: 'LA', country:'USA'}},
            {id: 4, photoURL: urlImg, followed: false,  fullName: 'Oleh', status: 'my statysss', location: {city: 'Dakota', country:'NA'}},
            {id: 5, photoURL: urlImg, fol lowed: true,  fullName: 'Peter', status: 'my statysss', location: {city: 'Sydney', country:'Australia'}},
            {id: 6, photoURL: urlImg, followed: false,  fullName: 'Olesja', status: 'my statysss', location: {city: 'Lissabon', country:'NA'}}]
        )*/
    }



    return <div>
        {
            props.users.map(u => <div key={u.is}>
                <span>
                    <div>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}> Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}> Follow</button>
                        }

                    </div>

                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>;
}

export default Users;