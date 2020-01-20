import React, { Component} from 'react';
import Person from "./Person";

class Persons extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log('getDerivedStateFromProps')
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shoulComponentUptade');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return {message: 'snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('consoleDidUptade');
    }

    render(){
        console.log('person rendering');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                />);
        });
    }
}


export default Persons;