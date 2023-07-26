import React, { useContext } from "react";
import CricketContext from "../context/CricketContext";

const Cricket = () =>{

    // let a = useContext(CricketContext);
    let info = useContext(CricketContext);

    return (

       <div>
            {/* <h1>This is a hard way context</h1> */}
            {/* <CricketContext.Consumer>
                {(info) => (
                     <h1>Hard way context value: {info}</h1>
                )}
            </CricketContext.Consumer> */}

            {/* <h1>I am the easy way and my value is: {a}</h1>
            <h2>Second Calling</h2> */}

            <h1>Employee Name : {info.name}</h1>
            <h3>Email : {info.email}</h3>
            <h3>Age : {info.age}</h3>
            <h3>Company : {info.company}</h3>
            <h3>Designation : {info.profession}</h3>

       </div>
    )
}

export default Cricket;