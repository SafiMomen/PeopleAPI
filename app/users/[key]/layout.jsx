"use client"

import Link from 'next/link';
import {IconContext} from 'react-icons';

import { IoMdReturnLeft } from 'react-icons/io';

export default function Layout({ children }) {
    return (<>
        <div className='flex justify-start items-center mb-3 pl-12 pt-12 font-kanit'>
            <Link href='/' className='p-2 rounded-2xl flex justify-center items-center'>
                <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2em" }}>
                    <IoMdReturnLeft className='pt-1'/>
                    <p className='ml-3 text-xl text-white font-bold'>BACK</p>
                </IconContext.Provider> 
            </Link>
        </div>
        {children}
    </>);
}