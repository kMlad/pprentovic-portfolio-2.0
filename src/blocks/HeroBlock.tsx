import React from "react";
import Image, { StaticImageData } from "next/image";
import { useMediaQuery } from "react-responsive";

import emailIcon from "../../public/assets/mail-icon.png";

export interface P {
    title: string;
    subtitle: string;
    email: string;
    heroImage: string | StaticImageData;
}

const HeroBlock = ({ title, subtitle, email, heroImage }: P): JSX.Element => {
    const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
    return (
        <section className="bg-black" id="hero">
            <div className="flex flex-col lg:flex-row justify-between container lg:max-w-[84.5%] mx-auto lg:ml-auto">
                <div className="flex flex-col items-start justify-start mt-[10%] w-full mb-2 lg:mb-0">
                    <h1 className="font-bold text-white text-2xl lg:text-6xl mb-4 lg:mb-6">
                        {title}
                    </h1>
                    <h2 className="text-blue font-medium text-lg lg:text-3xl mb-3 lg:mb-6 w-[60%] lg:w-full">
                        {subtitle}
                    </h2>
                    <a
                        href={`mailto:${email}`}
                        className="flex flex-row gap-x-4 items-center"
                    >
                        <Image
                            src={emailIcon}
                            alt={"Email Icon"}
                            height={isDesktop ? 43 : 32}
                            width={isDesktop ? 43 : 32}
                        />
                        <p className="text-white text-base lg:text-xl">{email}</p>
                    </a>
                </div>
                <Image src={heroImage} alt="Hero Image" />
            </div>
        </section>
    );
};

export default HeroBlock;
