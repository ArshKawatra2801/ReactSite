import React from "react";
import "./Page.css"
import Com from "./C1";
import Com2 from "./C2";
import Com3 from "./C3";
import Com4 from "./C4";
function Main(){
    return(
        <>
        <div className="mjr">
            <div className="i1"><h1 className="b3">The new space view</h1></div>
            <div className="i2"><h1 className="b3">The new space view</h1></div>
            <div className="i3"><h1 className="b3">The new space view</h1></div>
        </div>
        <h2 className="hh">The Latest</h2>
        <hr className="un"></hr><br/>
        <div className="lts">
            <Com/><Com/><Com/>
        </div>
        <div className="g1">
            <h2 className="hdn">Latest Articles</h2>
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
        </div><br/><br/>
            <h1 className="lts1">Latest Stories</h1>
            <hr className="un"></hr>
            <div className="lts2"><Com3/><Com3/><Com3/></div>
        </>
    )
}
export default Main;