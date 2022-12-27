import React from "react";

export interface P {
    hexCode: string;
    title: string;
}

const Color = ({hexCode, title}:P):JSX.Element => {
    return <div className="flex flex-col items-center gap-y-5">
        <div className={`h-24 w-24 lg:h-32 lg:w-32 bg-[${hexCode}] ${hexCode === "#000000" ? 'border border-white' : ''} rounded-full`}/>
        <p className="text-white text-xl">{title}</p>
    </div>
}

//bg-[#FFFFFF]
//bg-[#FBD132]
//bg-[#3FB44C]
//bg-[#393939]
//bg-[#646464]
//bg-[#BA6D47]
//bg-[#000000]
//bg-[#0E3E69]
//bg-[#4BA9DE]
//bg-[#0F108F]
//bg-[#BBD0B3]

export default Color;