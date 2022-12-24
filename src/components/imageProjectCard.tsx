import React from "react";
import Image, { StaticImageData } from "next/image";

import Button, { P as ButtonProps } from "./button";

export interface P {
    image: string | StaticImageData;
    alt: string;
    title: {
        white: string;
        blue: string;
    };
    button: ButtonProps;
}

const ImageProjectCard = ({ image, alt, title, button }: P): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-between gap-y-6 w-full">
            <Image src={image} alt={alt} />
            <h4 className="text-white text-base">
                {title.white}
                {""}
                <span className="text-blue font-bold">{title.blue}</span>
            </h4>
            <Button link={button.link} type={button.type} text={button.text} onClickAction={button.onClickAction}/>
        </div>
    );
};

export default ImageProjectCard;
