"use client"

import React from 'react'
import useSWR, { preload } from 'swr'

import People from '@/components/Poeple';
import PageLoading from '@/components/PageLoading';
import PageError from '@/components/PageError';

import APIData from '@/utils/APIData'; 

preload(APIData.fetchPeopleURL, APIData.fetchPeople);

export default function PeopleList({amount}) {
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

    return (
        <div className="grid grid-cols-5 gap-4 px-10">
            {data.results.slice(0, amount).map((person, key) => {
                return <People key={key} id={key} person={person}/>
            })}
        </div>
    );
}

export default PeopleList;
