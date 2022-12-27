import React from "react";

export interface P {
    number: string;
    note: string;
}

const StickyNote = ({ number, note }: P): JSX.Element => {
    return <div className="bg-gray h-[255px] w-[294px] relative">
        <p className="text-white text-3xl absolute top-2 right-3">{number}</p>
        <p className="text-white text-xl absolute left-3 bottom-3">{note}</p>
    </div>;
};

export default StickyNote;
