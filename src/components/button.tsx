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
                <div className="py-3 px-8" onClick={onClickAction}>
                    <p className="text-white font-bold text-lg">{text}</p>
                </div>
            );
        case "link" && link:
            return (
                <Link href={link as string} passHref>
                    <a>
                        <div className="py-3 px-8">
                            <p className="text-white font-bold text-lg">
                                {text}
                            </p>
                        </div>
                    </a>
                </Link>
            );
        default:
            return (
                <div className="h-20 w-20 bg-blue">
                    <p className="text-white font-bold">ERRROR</p>
                </div>
            );
    }
};

export default Button;
