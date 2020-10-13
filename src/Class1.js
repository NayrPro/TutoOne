import React, {Component} from "react"
import Hours from "./Hours"
import Condition from './Condition'
class Class1 extends Component{
    constructor(){
        super()
        this.state={
            hour : "",
            minutes : "",
            seconds : ""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    hourManage(){
        const TimeOfDay = new Date()
        this.setState({hour : (TimeOfDay.getHours()<10?"0":"") + TimeOfDay.getHours(),
                        minutes : (TimeOfDay.getMinutes()<10?"0":"") + TimeOfDay.getMinutes(),
                        seconds : (TimeOfDay.getSeconds()<10?"0":"") + TimeOfDay.getSeconds()
                    })
    }
    componentDidMount(){
        this.interval = setInterval( () => this.hourManage(), 1000)
    }

    handleClick(){
        console.log("Cool!");
    }

    componentWillUnmount() {
    clearInterval(this.interval);
  }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <p>{this.props.name}</p>
                <Hours hour = {this.state.hour} minutes = {this.state.minutes} seconds = {this.state.seconds}/>
                <Condition seconds = {this.state.seconds}/>
            </div>

        )
    }
}

export default Class1