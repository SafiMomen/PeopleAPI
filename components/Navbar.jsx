"use client"
import React from 'react'

import { IconContext } from "react-icons";
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai'
import { BsWrenchAdjustableCircleFill } from 'react-icons/bs';

let Navbar = () => {
  return (
    <div className="px-[50px] py-[50px] bg-slate-900 font-kanit">
        <div className="py-3 flex justify-left items-center">
            <h3 className="font-kanit text-white pr-3">Frameworks used:</h3>
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2em" }}>
                <div className="flex justify-left items-center mt-1">
                    <FaReact className="mr-1"/>
                    <TbBrandNextjs className="mx-1"/>
                    <SiTailwindcss className="mx-1"/>
                </div>
            </IconContext.Provider>
        </div>

        <div className="py-3 flex justify-left items-center mt-1">
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2em" }}>
                <h3 className="text-white pr-1">Purpose: Learned to use</h3>
                <AiFillApi/> 
                <h3 className="text-white px-1">( API ) inside of</h3>
                <FaReact/>
                <h3 className="text-white px-1">framework through</h3>
                <BsWrenchAdjustableCircleFill/>
                <h3 className="text-white px-1">SWR library (made by same developers as NextJS).</h3>
            </IconContext.Provider>
        </div>

        <h3 className="py-3 text-gray-500">Icons provided by react-icons library.</h3>
    </div>
  )
}

export default Navbar;
