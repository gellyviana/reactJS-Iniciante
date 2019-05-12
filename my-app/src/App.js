import React, {Component} from 'react'
import Table from './Table';

class App extends Component{
    render(){
        const character = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name:'Mac',
                job:'Bouncer'
            },
            {
                name:'Dee',
                job:'Aspiring actress',
            },
            {
                name:'Dennis',
                job:'Bartender',
            },
        ]
        return (
            <div className = "container">
                <Table characterData={character} />
            </div>
        )
    }
}

export default App