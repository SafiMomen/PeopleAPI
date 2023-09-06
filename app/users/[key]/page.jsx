"use client"

import Image from 'next/image';
import Link from 'next/link';
import {IconContext} from 'react-icons';
import useSWR from 'swr';

import APIData from '@/utils/APIData'; 

import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

import { TiWarning } from 'react-icons/ti';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

export default function Users({params}) {
    const { data, isLoading, isValidating, error } = useSWR(
        APIData.fetchPeopleURL,
        APIData.fetchPeople,
        {
            keepPreviousData: true,
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    if (error) return (<PageError>FAILED TO LOAD</PageError>);
    if (isLoading || isValidating) return (<PageLoading/>);
    if (!data || !data.results) return (<PageError>TOO MANY REQUESTS</PageError>);

    let profile = data.results[params.key];
    if (!profile) return (<PageError>USER NOT FOUND</PageError>);

    let {name, login, dob, registered, picture, email, location} = profile;

    console.log(profile);

    return <main className="p-[50px] font-kanit text-white">
        <div className="flex justify-around items-center mt-5">
            <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "7em" }}>
                <Link href={`/users/${Math.max(parseInt(params.key) - 1, 0)}`}>
                    <BiSolidLeftArrow/>
                </Link>

                <Image 
                    src={picture.large} 
                    width={200} height={200} 
                    className='rounded-full w-[200px] h-[200px] shadow-2xl shadow-gray-800'
                    alt={`image-${name}`}
                />

                <Link href={`/users/${parseInt(params.key) + 1}`}>
                    <BiSolidRightArrow/>
                </Link>
            </IconContext.Provider>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 text-center mt-[100px]'>
            <div className='bg-slate-900 py-[50px] rounded-lg flex flex-col justify-center items-center'>
                <h2 className="text-2xl md:text-3xl">
                    {name.title}. {name.first} {name.last}
                </h2>

                <div className="text-xl">
                    <h3>{dob.age} years old</h3>
                    <h3>{profile.gender}</h3>
                </div>
            </div>

            <div className='bg-slate-900 py-[50px] rounded-lg flex flex-col justify-center items-center'>
                <h2 className="text-2xl md:text-3xl">Username: {login.username}</h2>
                <h2 className="text-xl">Password: {login.password}</h2>
                <h2 className="text-xl">Account created: {registered.date.substring(0, 10)}</h2>
            </div>

            <div className='bg-slate-900 py-[50px] rounded-lg flex flex-col justify-center items-center'>
                <h2 className="text-2xl md:text-3xl">
                    {email}
                </h2>

                <div className="text-xl">
                    <h3>Cell: {profile.cell}</h3>
                    <h3>Phone: {profile.phone}</h3>
                    <h3>{location.country}</h3>
                </div>
            </div>
        </div>

        <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-5 rounded-lg mt-[100px] flex-col md:flex-row flex justify-around items-center">
            <IconContext.Provider value={{ color: 'white', size: '7em' }}>
                <TiWarning className='mx-12'/>
            </IconContext.Provider>
            
            <div className='text-center md:text-left'>
                <h3 className="text-2xl md:text-3xl py-5 md:py-0">WARNING: These data are for mocking purposes, these credentials will not work.</h3>
                <p className="pb-3 md:pb-0">Facts and information at this website are believed to be completely false. Changes may be made at any time without prior notice. All data provided on this website is to be used for mock-data purposes only. The information contained on this website and pages within, is not intended to provide specific legal, financial or tax advice, or any other advice, whatsoever, for any individual or company and should not be relied upon in that regard. </p>
            </div>
        </div>
    </main>
}