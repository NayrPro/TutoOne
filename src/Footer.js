import React from "react"

function Footer(props){
    const position = {marginTop: "15%"}
    return(
        <footer style={position}>
            <p style={props.features}>{props.content}</p>
            <span style={props.features}>{props.features.color}</span>
        </footer>
    )
}

export default Footer