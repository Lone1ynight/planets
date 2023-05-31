import React from "react";
import './index.css'

export const Circle = ({selectedMoons, planetWidth, planetHeight}) => (
    <>
        {
            selectedMoons?.map((moon, index) => {
                const newIndex = index + 1;

                return (
                    <div
                        className='circle'
                        style={{width: planetWidth + (20*newIndex), height: planetHeight + (20*newIndex)}}
                        id={index.toString()}
                        key={index}>
                    </div>
                )
            })
        }
    </>
)