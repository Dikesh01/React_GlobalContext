import React,{ useState } from "react";
import CricketContext from "./CricketContext";

const CricketProvider = (props) => {

    // let a = 55;
    // let b = 25;
    // return (
    //      <CricketContext.Provider value={a}>
    //         {props.children}
    //      </CricketContext.Provider>
    // )

    // easy way and  pass multivalue
    let [cricketer,setCricketer] = useState({
        name: "Kabir Kumar",
        email: "kabir@gmail.com",
        age: 25,
        profession:"Developer",
        company: "accenture"
    })

    return(
        <CricketContext.Provider value={cricketer}>
        {props.children}

        </CricketContext.Provider>
    )

}

export default CricketProvider;