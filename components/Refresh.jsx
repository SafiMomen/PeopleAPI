"use client"

import React, { useState, useEffect } from 'react'
import { useSWRConfig } from 'swr'
import { IconContext } from 'react-icons'; 

import { TbRefresh } from 'react-icons/tb';

import APIData from '@/utils/APIData'; 

export default function Refresh() {
    let [lastClicked, setLastClicked] = useState(Date.now());
    let [timeRemaining, setTimeRemaining] = useState(0);

    let { mutate } = useSWRConfig();

    let canPress = (time = Date.now()) => {
        let timeElasped = (time - lastClicked) / 1000;
        return timeElasped >= APIData.fetchDebounce;
    }

    let handleRefresh = () => {
        let time = Date.now();
        if (!canPress(time)) return;

        setLastClicked(time);
        mutate(APIData.fetchPeopleURL);
    }

    useEffect(() => {
        let intervalId = setInterval(() => {
            const time = Date.now();
            const timeElapsed = (time - lastClicked) / 1000;
            const timeRemaining = Math.ceil(APIData.fetchDebounce - timeElapsed);
            setTimeRemaining(timeRemaining);
        }, 25);

        return ()=> {clearInterval(intervalId)};
    }, [lastClicked]);

    return (
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2em" }}>
            <div className="flex flex-col justify-center items-center pt-3 pl-[50px]">
                <button onClick={handleRefresh}>
                    <TbRefresh className='hover:rotate-180 ease-linear duration-300'/>
                </button>

                <h3 className="text-gray-500 text-sm font-kanit">
                    {timeRemaining > 0 ? timeRemaining : "GENERATE"}
                </h3>
            </div>
        </IconContext.Provider>
    )
}