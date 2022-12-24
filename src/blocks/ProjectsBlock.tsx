import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import ProjectCard, { P as ProjectCardProps } from "../components/projectCard";
import BlockTitle from "../components/blockTitle";
import arrow from "../../public/assets/arrow.png";

interface P {
    title: string;
    cards: ProjectCardProps[];
    showArrow: boolean;
}

const ProjectsBlock = ({ title, cards }: P): JSX.Element => {
    const { back } = useRouter();
    return (
        <section className="bg-black " id="projects">
            <div className="py-10 flex flex-col items-center sm:container sm:mx-auto lg:gap-y-16">
                <BlockTitle title={title} />
                <div className="py-11 flex flex-col lg:flex-row gap-y-[70px] lg:gap-y-0 justify-between w-full ">
                    {cards.map((card, idx) => (
                        <ProjectCard
                            title={card.title}
                            icon={card.icon}
                            button={card.button}
                            desc={card.desc}
                            alt={card.alt}
                            key={`project-card-${idx}`}
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

export default ProjectsBlock;
