import React from "react";
import './index.css';

export const Moon = ({moon, onClickMoon, selectedMoons}) => {
    return <div className={`moon ${selectedMoons.includes(moon) ? 'selected' : ''}`} onClick={() => onClickMoon(moon)}>
        {moon.title}
    </div>
}