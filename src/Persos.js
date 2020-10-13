import React from "react"

function Persos(props){
    /* <span style={props.color}>Perso : {props.perso.personnage}</span>
    <span style={props.color}>Age : {props.perso.age}</span>
    <span style={props.color}>Pouvoir : {props.perso.pouvoir}</span> */
    const tabSpan = []
    // for (let index = 0; index < 3; index++) {
    //      span[index] = <span style={props.color}>{props.perso[index].key} : {props.perso[index]}</span>
    // }

    const span = props.perso
    
    var i = 0;
    for (var key in span){
        if(span.hasOwnProperty(key) && key !== "id"){
        tabSpan.push(<div key={i}><span style={props.color}>{key} : {span[key]}</span></div>
        )}
        i++;
    }
    return(
        <div style={props.backgroundColor}>
           {tabSpan}
        </div>
    )
}

export default Persos