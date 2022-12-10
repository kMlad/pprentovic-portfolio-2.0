import React from "react";
import Image from "next/image";

import Button, { P as ButtonProps } from "./button";
import rocket from "../../public/rocket.png";

interface P {
    icon: string;
    alt: string;
    title: string;
    desc: string;
    button: ButtonProps;
}

const ServiceCard = ({icon, alt, title, desc, button}: P): JSX.Element => {
    return <div className="max-h-[400px] lg:max-w-[380px] w-full bg-grey flex flex-col pt-9 pb-14 items-center justify-between">
        <Image src={icon} alt={alt} width={82} height={83}/>
        <h4 className="text-white font-bold text-xl">{title}</h4>
        <p className="text-white text-base">{desc}</p>
        <Button text="View Projects" type="link" link="/"/>
    </div>;
};

export default ServiceCard;
