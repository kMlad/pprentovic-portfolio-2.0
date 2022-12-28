import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

import downArrow from "./assets/down-arrow.png";
import arrow from "../../public/assets/arrow.png";

import {
    CoverImage,
    Table,
    ArticleSection,
    StickyNotes,
    TableHeader,
    ProjectImages,
    Colors,
    Typography,
} from "../../public/data/projects/interfaces";
import StickyNote from "../components/stickyNote";
import Color from "../components/color";

export interface P {
    title: string;
    coverImage: CoverImage;
    metadataTable: Table;
    articleSections: ArticleSection[];
    stickyNotes: StickyNotes;
    secondaryTableHeader: TableHeader;
    imagePanels: ProjectImages[];
    colors?: Colors;
    typography?: Typography;
    summary?: ArticleSection;
}

const ProjectPage = ({
    title,
    coverImage,
    metadataTable,
    articleSections,
    stickyNotes,
    secondaryTableHeader,
    imagePanels,
    colors,
    summary,
    typography,
}: P): JSX.Element => {
    const isMobile = useMediaQuery({ query: "(max-width: 504px)" });
    const { back } = useRouter();

    return (
        <div className="bg-black text-white">
            <div className=" mb-16">
                {isMobile && (
                    <Image
                        unoptimized
                        src={coverImage.mobileImage}
                        alt={coverImage.alt}
                    />
                )}
                {!isMobile && (
                    <Image
                        unoptimized
                        src={coverImage.desktopImage}
                        alt={coverImage.alt}
                        style={{ objectFit: "cover" }}
                    />
                )}
            </div>
            <div className="container mx-auto ">
                <div className="flex flex-row items-center justify-between mb-16">
                    <h1 className="font-bold text-[64px]">{title}</h1>
                    <Image src={downArrow} alt="Down facing arrow" />
                </div>
                <section className="mb-10">
                    <div className="flex flex-row justify-between items-center py-5 font-bold text-2xl border-t border-b border-white mb-5">
                        <p>{metadataTable.number}</p>
                        <p>{metadataTable.title}</p>
                    </div>
                    <div className="flex flex-col gap-y-5 lg:flex-row justify-between items-start border-b border-white pb-5">
                        {metadataTable.contents?.map((column, index) => (
                            <div
                                className="flex flex-col"
                                key={`meta-col-${index}`}
                            >
                                <p className="font-bold lg:mb-5">
                                    {column.title}
                                </p>
                                {column.records.map((record, innerIndex) => (
                                    <p
                                        key={`meta-col-${index}-row-${innerIndex}`}
                                    >
                                        {record}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col gap-y-9 mb-16">
                    {articleSections.map((article, index) => (
                        <div
                            className="flex flex-col gap-y-5"
                            key={`article-section-${index}`}
                        >
                            <h3 className="font-bold text-3xl">
                                {article.heading}
                            </h3>
                            <p className="text-xl">{article.paragraph}</p>
                        </div>
                    ))}
                </section>
                <section className="mb-16">
                    <h3 className="font-bold text-3xl mb-9">
                        {stickyNotes.title}
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-5 gap-x-10">
                        {stickyNotes.notes.map((note) => (
                            <StickyNote key={`note-${note.number}`} {...note} />
                        ))}
                    </div>
                </section>
                <section className="mb-9">
                    <div className="flex flex-row justify-between items-center py-5 font-bold text-2xl border-t border-b border-white">
                        <p>{secondaryTableHeader.number}</p>
                        <p>{secondaryTableHeader.title}</p>
                    </div>
                </section>
                <section className="mb-16 flex flex-col gap-y-14">
                    {imagePanels.map((panel, index) => (
                        <div
                            key={`image-panel-${index}`}
                            className="flex flex-col gap-y-10"
                        >
                            <h3 className="font-bold text-3xl">
                                {panel.title}
                            </h3>
                            <div
                                className={`flex flex-col lg:flex-row ${
                                    panel.images.length % 2 !== 0
                                        ? "justify-between"
                                        : "justify-around"
                                } items-center`}
                            >
                                {panel.images.map((image, index2) => (
                                    <Image
                                        key={`image-panel-${index}-image-${index2}`}
                                        src={image}
                                        alt="project showcase image"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
                {colors && (
                    <section className="mb-16">
                        <div className="flex flex-col gap-y-10">
                            <h3 className="font-bold text-3xl">
                                {colors.title}
                            </h3>
                            <h3 className="text-2xl">{colors.description}</h3>
                            <div className="flex flex-col lg:flex-row justify-start items-center gap-y-6 gap-x-10">
                                {colors.colors.map((color, index) => (
                                    <Color key={`color-${index}`} {...color} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                <section className="flex flex-col gap-y-9">
                    {summary && (
                        <div className="flex flex-col gap-y-5">
                            <h3 className="font-bold text-3xl">
                                {summary.heading}
                            </h3>
                            <p className="text-xl">{summary.paragraph}</p>
                        </div>
                    )}
                </section>
                <section className="w-full flex justify-center items-center pt-32 pb-16">
                    <span onClick={() => back()} className="cursor-pointer">
                        <Image src={arrow} alt="arrow" />
                    </span>
                </section>
            </div>
        </div>
    );
};

export default ProjectPage;
