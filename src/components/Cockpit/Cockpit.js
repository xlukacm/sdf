import React, { useEffect } from 'react';

import classes from './cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
        console.log('useEffect'); //zobrazuje sa po kazdom kliknuti / zmene ktora zasiahne aj cockpit
        const timer = setTimeout(() => {
            alert('saved data to cloud');
        }, 1000); // toto vyuzijeme na to aby nam vyskakovalo okno pri nacitani stranky po sec
        return () => { //clean up
            clearTimeout(timer); //aby nevyhazdovalo po kazdom zmazani niecoho, aby to unmoutlo pri cleane
            console.log('[Cockpit] cleanup work in useEffect'); //toto sa nezobrazi pokioal neda zmazat cockpit
        }
    },[]);
    //}, [props.persons]); //ak nechceme aby nam sprav vyposovalo neustale po spusteni alebo zmene, tak definujeme, ze len pri zmene
        //persons to vypise. Ak dame [] tak nam zareaguje iba prvykrat pri nacitani

    useEffect(() => {
        console.log('2.useEffect'); //useful pre  operáciu, ktorá by sa mala skutočne zrušiť vždy, keď sa komponent znovu vykreslí
                                    // ak to bude aktualizované. useEffect su velmi rare
    });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }


    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
}



export default cockpit;