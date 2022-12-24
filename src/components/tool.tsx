import React from "react";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "react-responsive";

export interface P {
    title: string;
    icon: string | StaticImageData;
    alt: string;
    progress: number;
}

const Tool = ({ title, icon, alt, progress }: P): JSX.Element => {

    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

    return (
        <div className="w-full flex flex-col items-start justify-between mb-9">
            <div className="flex flex-row justify-between items-center w-full gap-x-10">
                <Image
                    src={icon}
                    alt={alt}
                    height={isDesktop? 78: 52}
                    width={isDesktop? 78: 52}
                />
                <div className="w-full bg-white h-[3px] rounded-full">
                    <div
                        className="bg-lightBlue h-full rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
                <p className="text-white text-center text-base mt-6">{title}</p>
        </div>
    );
};

export default Tool;
