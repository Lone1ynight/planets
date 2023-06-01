import React, {useState} from 'react';
import {System} from '../system/System';
import {moons, planets} from '../../constants';
import {filteredMoons} from '../../helpers';
import './index.css';

export const SystemList = () => {
    const [systems] = useState(() => filteredMoons(planets, moons));

    return (
        <div className='systemList'>
            {systems?.map(system =>
                <System system={system} key={system.planet.id}/>
            )}
        </div>
    );
}