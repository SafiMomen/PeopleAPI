import React from 'react'
import {IconContext} from 'react-icons';

export default function PageMessage({color, size, children}) {
    return (<div className="h-[675px] flex justify-center items-center">
        <IconContext.Provider value={{ color: color, size: size }}>
            <div className="flex justify-center items-center flex-col">
                {children}
            </div>
        </IconContext.Provider>
    </div>);
}