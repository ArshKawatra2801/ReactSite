import React from "react";
import Com2 from "./C2";
import Com from "./C1";
import Com4 from "./C4";
function Food(){
    return(
        <><br/>
        <h2 className="hdn">Food</h2>
        <hr className="un"></hr>
        <div className="md">
            <div className="md1">
            <div className="sbln">
                <Com2/><Com2/><Com2/><Com2/><Com2/>
            </div>
            <div className="mjrt"><h1 className="b3">The news title comes here</h1></div>
            </div>
            <div className="tpd">
            <div className="adv">
                Advertisment
            </div>
            <div className="tpd1">
            <h2>Top Posts</h2>
            <hr className="un1"></hr><br/>
            <Com/>
            <Com4/><Com4/><Com4/> 
            </div>
            </div>
        </div>
        </>
    )
}
export default Food;