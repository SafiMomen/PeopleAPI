"use client"

import React from 'react'

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { IconContext } from 'react-icons'; 

export default function Counter({counterState}) {
    let [counter, setCounter] = counterState;

    let updateCounter = (amount) => {
        amount = Math.min(Math.max(amount, 1), 1000);
        setCounter(amount);
    }

    return (
        <div>
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2em" }}>
                <button onClick={() => updateCounter(counter - 1)}>
                    <BiSolidLeftArrow/>
                </button>
                <button onClick={() => updateCounter(counter + 1)}>
                    <BiSolidRightArrow/>
                </button>
            </IconContext.Provider>
        </div>
    )
}