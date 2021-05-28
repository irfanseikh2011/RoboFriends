import React, {useState,useEffect} from 'react'
import CardList from './CardList'
import {robots} from './robots'
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'

function App() {

    const [robot,setRobots] = useState([])
    const [searchField,setSearchField] = useState('')


    useEffect(() => {
        setRobots(robots)
    },[]);

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robot.filter(robots => {
        return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })

        return(
            <div className="tc baskerville">
                <h1 className="f-5">Robo Friends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );

}

export default App;