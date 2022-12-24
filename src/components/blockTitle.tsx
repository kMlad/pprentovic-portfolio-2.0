import React from 'react';

interface P {
    title: string
}

const BlockTitle = ({title}: P): JSX.Element => {
    return (
        <h3 className='text-2xl lg:text-5xl font-bold text-white'>{title}</h3>
    )
}

export default BlockTitle