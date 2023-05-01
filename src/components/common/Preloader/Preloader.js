import gifLoader from "../../../assets/images/gifLoader.gif";
import React from "react";

let Preloader =(props) => {
    return <div style={{backgroundColor: "white"}}>
        <img src={gifLoader}/>
    </div>
}

export  default Preloader;