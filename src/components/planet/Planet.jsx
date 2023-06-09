import React, {useRef} from 'react';
import {Circle} from '../circle/Circle';
import './index.css';

export const Planet = ({title, selectedMoons}) => {
    const refPlanet = useRef(null);

    const planetWidth = refPlanet.current?.getBoundingClientRect()?.width;
    const planetHeight = refPlanet.current?.getBoundingClientRect()?.height;

    return (
        <div className='planet'
             ref={refPlanet}
        >
            <Circle selectedMoons={selectedMoons} planetWidth={planetWidth} planetHeight={planetHeight}/>
            <div>{title}</div>
            <div className='count'>{selectedMoons.length || ''}</div>
        </div>
    )
}