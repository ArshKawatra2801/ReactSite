// import {useState} from "react";
import React from "react";
import HOC from "./Hoc"
const Heading=(propsValue)=>{
    return(
        <>
        <h2 onMouseOver={propsValue.updateCount}>Heading hovered {propsValue.value} times</h2>
        </>
    )
}
export default HOC(Heading);