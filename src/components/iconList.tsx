import React from "react";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "react-responsive";

export interface IconLink {
    icon: string | StaticImageData;
    to: string;
    alt: string;
    isMail?: boolean;
}

export interface P {
    iconLinks: IconLink[];
    alignment: "left" | "center";
    size: "big" | "small";
}

const IconList = ({ iconLinks, alignment, size }: P): JSX.Element => {
    const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
    return (
        <div
            className={`flex ${
                alignment === "center" ? "justify-center" : "justify-start"
            } ${size === "small" ? "gap-x-3 lg:gap-x-10" : "gap-x-10"} w-full`}
        >
            {iconLinks.map((icon, index) => (
                <span key={`icon-list-icon-${index}`}>
                    <a href={`${icon.isMail ? "mailto:" : ""}${icon.to}`}>
                        {size === "small" ? (
                            <Image
                                src={icon.icon}
                                alt={icon.alt}
                                height={isDesktop ? 43 : 32}
                                width={isDesktop ? 43 : 32}
                            />
                        ) : (
                            <Image src={icon.icon} alt={icon.alt} />
                        )}
                    </a>
                </span>
            ))}
        </div>
    );
};

export default IconList;
