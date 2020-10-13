import React from "react"

function Condition(props){
    return props.seconds < 10 && <p>Dix secondes</p>
}

export default Condition