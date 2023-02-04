import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {id: 1, message: "post about my trip1", likesCount: 12},
    {id: 2, message: "post about my trip2", likesCount: 25}
]

const dialogs = [
    {id: 1, name: "dima"},
    {id: 2, name: "ira"},
    {id: 3, name: "sasha"},
    {id: 4, name: "oleh"}
]

const messages = [
    {id: 1, message: "hi"},
    {id: 2, message: "howayou"},
    {id: 3, message: "okk"},
    {id: 4, message: "yeeeahh"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
