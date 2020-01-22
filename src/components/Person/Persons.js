import React, { Component} from 'react';
import Person from "./Person";

class Persons extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log('getDerivedStateFromProps')
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shoulComponentUptade');
        if(nextProps.persons !== this.props.persons){ //v skratke: ak nechceme aby toto prebehlo vzdy ale len
            return true;                   // ked sa nieco zmeni, tak skontrolujeme ci dalsi person je zmeneni
        }                                  //maju miesto v memories ale toto su len pointery
        else{
            return false;
        }
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