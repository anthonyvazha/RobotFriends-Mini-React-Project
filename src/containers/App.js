import { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox.js";
import {robots} from"../robots.js";
import Scroll from '../components/Scroll.js';
import './App.css';





class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange=(event) => {
        this.setState({searchfield: event.target.value})

    }

    render(){
        const { robots , searchfield } = this.state;
        
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return(
        <div 
            className = "tc">
            <h1 classname = "f1">RobotFriends</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filterRobots}/>
            </Scroll>
        </div>
        )
        

    }
    
}
export default App; 

