import React, {Component} from "react"

class PokeApi extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         sprites: "",
    //         types: "",
    //         name:"",
    //         height: "",
    //         weight: "",
    //         baseExperience: "",
    //         speciesName: "",
    //         nationalId: "",
    //         genre: "", 
    //         flavorText: "",
    //         captureRate: "",
    //         loading: true
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }

    state = {
        sprites: "",
        types: "",
        name:"",
        height: "",
        weight: "",
        baseExperience: "",
        speciesName: "",
        nationalId: "",
        genre: "", 
        flavorText: "",
        captureRate: "",
        loading: true
    }

    componentDidMount(){
        this.setState({loading: false})
        this.ApiCall()
    }

    ApiCall(){
        fetch("https://pokeapi.co/api/v2/pokemon/blastoise")
        .then(response => response.json())
        .then(data => this.setState({
                                        sprites:  data.sprites.front_default,
                                        types:  data.types[0].type.name,
                                        name: data.name[0].toUpperCase() + data.name.slice(1),
                                        height:  data.height,
                                        weight:  data.weight,
                                        baseExperience:  data.base_experience,
                                        speciesName:  data.species.name,
                                        nationalId:  data.id,
                                        loading: true
                                    }))
        fetch("https://pokeapi.co/api/v2/pokemon-species/9/")
        .then(response => response.json())
        .then(data => this.setState({
                                        genre: data.has_gender_differences, 
                                        flavorText: data.flavor_text_entries[0].flavor_text,
                                        captureRate: data.capture_rate,
                                        loading: true
                                    }))
    }

    handleChange = () => {
        this.setState(prevState =>({ loading : !prevState }))
        !this.state.loading && this.ApiCall()
    }
    render(){
        if(this.state.loading){ 
        return(
            <div>
                <img src={this.state.sprites} alt="sprite"/>
                <label>
                    <input type="checkbox" 
                           name="ApiCall"
                           id="ApiCall" 
                           checked={this.state.loading} 
                           onChange={this.handleChange}
                    />
                    API Call
                </label>
                <p>Type: {this.state.types} </p>
                <p>Name: {this.state.name}</p>
                <p>Height: {this.state.height}</p>
                <p>Weight: {this.state.weight}</p>
                <p>Base Experience: {this.state.baseExperience}</p>
                <p>Species Name: {this.state.speciesName}</p>
                <p>National Id: {this.state.nationalId}</p>
                <p>Genre: {!this.state.genre && "None"}</p>
                <p>Description: {this.state.flavorText}</p>
                <p>Taux de capture : {this.state.captureRate}</p>
            </div>
        )}
        else return (
            <div>
                <p>...Loading</p>
                <label>
                    <input type="checkbox" 
                           name="ApiCall"
                           id="ApiCall" 
                           checked={this.state.loading} 
                           onChange={this.handleChange}
                    />
                    API Call
                </label>
            </div>
        )
    }
}

export default PokeApi