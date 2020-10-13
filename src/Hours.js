import React from "react"

function Hours (props){
    return(
        <h1 style={{color : "green", backgroundColor: "red"}}>{props.hour +":"+ props.minutes +":"+ props.seconds}</h1>
    )
}

export default Hours