import React from "react"
import listeUltime from "./list"
import Persos from "./Persos"

function Main(){
    const color =  {color: "green"}
    const backgroundColor =  {backgroundColor : "#f5bd8c"}
    const MaListe = listeUltime.map(perso => <div key={perso.id}>
        <Persos
                perso={perso} 
                backgroundColor={backgroundColor}
                color={color}
        ></Persos><br></br></div>
    )
    return(
        <div>
            {MaListe}
        </div>
    )
}

export default Main