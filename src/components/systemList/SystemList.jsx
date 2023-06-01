import React, {useEffect, useState} from 'react';
import {System} from '../system/System';
import './index.css';
import {moons, planets} from '../../constants';

export const SystemList = () => {
    const [systems, setSystems] = useState([]);

    useEffect(() => {
        setSystems(
            planets.map(planet => (
                {
                    planet,
                    moons: moons.filter(moon => moon.planetId === planet.id)
                }
            ))
        )
    }, [])

    return (
        <div className='systemList'>
            {systems.map(system =>
                <System system={system} key={system.planet.id}/>
            )}
        </div>
    );
}