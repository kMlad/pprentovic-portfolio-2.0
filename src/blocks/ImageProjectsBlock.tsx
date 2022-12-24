import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import ImageProjectCard, {
    P as ImageProjectCardProps,
} from "../components/imageProjectCard";
import arrow from "../../public/assets/arrow.png";

export interface P {
    title: string;
    projects: ImageProjectCardProps[];
}

const ImageProjectsBlock = ({ title, projects }: P): JSX.Element => {
    const {back} = useRouter();

    return (
        <section className="bg-black py-16">
            <div className="container mx-auto flex flex-col items-center gap-y-28">
                <h1 className="text-white font-bold text-2xl lg:text-5xl ">
                    {title}
                </h1>
                <div className="w-full flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-6">
                    {projects.map((project, index) => (
                        <ImageProjectCard
                            key={`project-card-${index}`}
                            {...project}
                        />
                    ))}
                </div>
                <span onClick={() => back()} className="cursor-pointer">
                    <Image src={arrow} alt="arrow" />
                </span>
            </div>
        </section>
    );
};

export default ImageProjectsBlock;
