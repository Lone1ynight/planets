import React from 'react';
import './index.css';

export const Circle = ({selectedMoons, planetWidth, planetHeight}) => (
    <>
        {
            selectedMoons?.map((moon, index) => (
                    <div
                        className='circle'
                        style={{width: planetWidth + (15*(index + 1)), height: planetHeight + (15*(index + 1))}}
                        id={index.toString()}
                        key={index}>
                    </div>
                )
            )
        }
    </>
)