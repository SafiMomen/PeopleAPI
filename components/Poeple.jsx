import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function People({person, id})  {
    let {picture, name, email, location} = person;

    return (
        <div className="rounded-lg py-5 mt-[50px] relative
        bg-gradient-to-b from-white to-gray-200
        flex flex-col justify-between items-center">

            <Image 
                src={picture.large} 
                width={100} height={100} 
                className='absolute bottom-[185px] rounded-full border-8 border-black'
                alt={`image-${name}`}
            />

            <div className="font-kanit pt-[40px] pb-2 flex flex-col justify-center items-center">
                <h3 className="lg:text-lg md:tp-5 xl:text-xl font-bold mt-3">{name.title}. {name.first} {name.last}</h3>
                <h3>{email}</h3>
                <h3>{location.country}</h3>

                <Link 
                    className="font-kanit bg-black text-white p-3 rounded-lg mt-5"
                    href={`/users/${id}`}
                >EXTEND</Link>
            </div>
        </div>
    )
}
