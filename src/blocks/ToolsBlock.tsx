import React from "react";
import BlockTitle from "../components/blockTitle";
import Tool, { P as ToolProps } from "../components/tool";

export interface P {
    title: string;
    tools: ToolProps[];
}

interface splitToolsResult {
    firstHalf: ToolProps[];
    secondHalf: ToolProps[];
    lastElement?: ToolProps;
}

function splitTools(tools: ToolProps[]): splitToolsResult {
    const isEven = tools.length % 2 === 0;

    const firstHalf: ToolProps[] = [];
    const secondHalf: ToolProps[] = [];
    let lastElement: ToolProps | null = null;

    let splittableLength: number;

    if (!isEven) {
        const last = tools[tools.length - 1];
        splittableLength = tools.length - 1;
        lastElement = last;
    } else {
        splittableLength = tools.length;
    }

    firstHalf.push(...tools.slice(0, splittableLength / 2));
    secondHalf.push(...tools.slice(splittableLength / 2, splittableLength));

    const result: splitToolsResult = { firstHalf, secondHalf };
    if (lastElement) {
        result["lastElement"] = lastElement;
    }

    return result;
}

const ToolsBlock = ({ title, tools }: P): JSX.Element => {
    const { firstHalf, secondHalf, lastElement } = splitTools(tools);

    return (
        <section className="bg-black " id="tools">
            <div className="py-10 flex flex-col items-center container mx-auto">
                <BlockTitle title={title} />
                <div className="pt-11 flex flex-col lg:flex-row  justify-between gap-x-10 w-full ">
                    <div className="flex flex-col w-full">
                        {firstHalf.map((tool, idx) => (
                            <Tool
                                title={tool.title}
                                icon={tool.icon}
                                alt={tool.alt}
                                key={`tool-${idx}`}
                                progress={tool.progress}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col w-full">
                        {secondHalf.map((tool, idx) => (
                            <Tool
                                title={tool.title}
                                icon={tool.icon}
                                alt={tool.alt}
                                key={`tool-${idx}`}
                                progress={tool.progress}
                            />
                        ))}
                    </div>
                </div>
                {lastElement && (
                    <div className="w-full lg:w-1/2">
                        <Tool {...lastElement} />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ToolsBlock;
