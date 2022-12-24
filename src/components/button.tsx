import React from "react";
import Link from "next/link";

export interface P {
    text: string;
    type: "link" | "button";
    link?: string;
    onClickAction?: () => void;
}

const Button = ({ text, type, link, onClickAction }: P): JSX.Element => {
    switch (type) {
        case "button":
            return (
                <div
                    className="py-3 px-8 bg-blue rounded-full"
                    onClick={onClickAction}
                >
                    <p className="text-white font-bold text-lg">{text}</p>
                </div>
            );
        case "link":
            return (
                <Link href={link as string}>
                    <div className="py-3 px-8 bg-blue rounded-full">
                        <p className="text-white font-bold text-lg">{link ? text : 'ERROR'}</p>
                    </div>
                </Link>
            );
        default:
            return (
                <div className="py-2 px-6 bg-blue rounded-full">
                    <p className="text-white font-bold text-lg">ERROR</p>
                </div>
            );
    }
};

export default Button;
