import React from "react";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "react-responsive";

import BlockTitle from "../components/blockTitle";
import IconList from "../components/iconList";

interface SocialIcon {
    icon: string | StaticImageData;
    to: string;
    alt: string;
}

interface SocialMediaProps {
    social: SocialIcon[];
}

export interface P {
    title: string;
    subtitle: string;
    description: string;
    social: SocialIcon[];
    photo: string | StaticImageData;
}

const SocialMediaLinks = ({ social }: SocialMediaProps): JSX.Element => {
    return (
        <div>
            <h4 className="text-blue font-bold text-lg lg:text-xl lg:mb-4">
                Social Media
            </h4>
            <IconList iconLinks={social} alignment="left" size="small"/>
        </div>
    );
};

const AboutBlock = ({
    title,
    subtitle,
    description,
    social,
    photo,
}: P): JSX.Element => {
    const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
    return (
        <section className="bg-gray" id="about-me">
            <div className="container mx-auto flex flex-col lg:flex-row gap-x-16 pt-20 pb-28 px-[10%]">
                <Image
                    src={photo}
                    alt="Petarce so racete vo dzeb"
                    style={{ objectFit: "cover" }}
                    className="hidden lg:block"
                />
                <div className="flex flex-col items-start justify-between">
                    <BlockTitle title={title} />
                    <h4 className="text-blue font-bold text-lg lg:text-xl lg:mt-4">
                        {subtitle}
                    </h4>
                    <p className="text-base lg:text-xl lg:my-10">{description}</p>
                    {isDesktop && <SocialMediaLinks social={social} />}
                </div>
                <div className="flex flex-row mt-16 justify-around items-center gap-x-5">
                    <Image
                        src={photo}
                        alt="Petarce so racete vo dzeb"
                        style={{ objectFit: "cover" }}
                        className="block lg:hidden "
                        height={300}
                        width={225}
                    />
                    {!isDesktop && <SocialMediaLinks social={social} />}
                </div>
            </div>
        </section>
    );
};

export default AboutBlock;
