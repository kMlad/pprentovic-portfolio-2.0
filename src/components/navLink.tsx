import React from "react";
import Link from "next/link";

export interface P {
    text: string;
    to: string;
}

const NavLink = ({ text, to }: P): JSX.Element => {
    return (
        <Link href={to} scroll={false}>
            <p className="text-white text-lg">{text}</p>
        </Link>
    );
};

export default NavLink;
