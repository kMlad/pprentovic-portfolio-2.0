import React from "react";
import Image, { StaticImageData } from "next/image";

import Button, { P as ButtonProps } from "./button";

export interface P {
    icon: string | StaticImageData;
    alt: string;
    title: string;
    desc: string;
    button: ButtonProps;
}

const ProjectCard = ({icon, alt, title, desc, button}: P): JSX.Element => {
    return <div className="max-h-[400px] lg:max-w-[380px] w-full bg-gray flex flex-col pt-9 pb-11 px-11 items-center justify-between">
        <Image src={icon} alt={alt} width={82} height={83}/>
        <h4 className="text-white font-bold text-xl pt-6 pb-5">{title}</h4>
        <p className="text-white text-base text-center mb-9">{desc}</p>
        <Button {...button}/>
    </div>;
};

export default ProjectCard;
