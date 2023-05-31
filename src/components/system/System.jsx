import React, {useState} from "react";
import {Planet} from "../planet/Planet";
import {Moon} from "../moon/Moon";
import './index.css'

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
        <div className="system">
            <Planet title={system.planet.title} selectedMoons={selectedMoons}/>
            {system.moons.map(moon =>
                <Moon
                    key={moon.id}
                    moon={moon}
                    onClickMoon={onClickMoon}
                    selectedMoons={selectedMoons}
                />
            )}
        </div>
    )
}