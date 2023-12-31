import React from 'react'

import PageMessage from './PageMessage'

import {TbError404} from 'react-icons/tb'

export default function PageError ({children}) {
    return (<PageMessage color="red" size="3em">
        <TbError404/>
        <h3 className="text-red-500">{children}</h3>
    </PageMessage>);
}
