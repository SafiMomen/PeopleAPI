"use client"

import PeopleList from '@/components/PeopleList';
import Counter from '@/components/Counter';
import Refresh from '@/components/Refresh';

import {useState} from 'react';
import Head from 'next/head';

export default function Home() {
  let [peopleAmount, setPeopleAmount] = useState(15);

  return (
    <main className="pb-[100px]">
      <h2 className="text-white text-5xl pl-[50px] py-[50px] font-kanit">
        Generated {peopleAmount} {peopleAmount > 1 ? "people" : "person"}
      </h2>

      <div className="flex justify-between items-center">
          <Refresh/>
          <Counter counterState={[peopleAmount, setPeopleAmount]}/>
      </div>

      <PeopleList amount={peopleAmount}/>
    </main>
  )
}
