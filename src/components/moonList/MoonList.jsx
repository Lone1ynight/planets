import React from 'react';
import {Moon} from "../moon/Moon";

export const MoonList = ({moons, onClickMoon, selectedMoons}) => (
    moons.map(moon =>
        <Moon
            key={moon.id}
            moon={moon}
            onClickMoon={onClickMoon}
            selectedMoons={selectedMoons}
        />
    )
)