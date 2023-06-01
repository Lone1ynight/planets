import React, {useState} from 'react';
import {Planet} from '../planet/Planet';
import './index.css';
import {MoonList} from "../moonList/MoonList";

export const System = ({system}) => {
    const [selectedMoons, setSelectedMoons] = useState([]);

    const onClickMoon = (moon) => {
        setSelectedMoons(prevState =>{
           if(prevState.includes(moon)){
               return prevState.filter(selectedMoon => selectedMoon.id !== moon.id)
           }else {
               return [...prevState, moon]
           }
        })
    }

    return (
        <div className='system'>
            <Planet title={system.planet.title} selectedMoons={selectedMoons}/>
            <MoonList moons={system.moons} onClickMoon={onClickMoon} selectedMoons={selectedMoons}/>
        </div>
    )
}