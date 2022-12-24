import React from "react";
import IconList, { IconLink } from "../components/iconList";


interface P {
    name: string;
    icons: IconLink[];
}

const Footer = ({name, icons}: P): JSX.Element => {
    return (
        <footer className="bg-black w-full py-16">
            <div className="flex flex-col items-center">
                    <p className="text-white text-3xl font-bold pt-6">{name}</p>
                    <p className="text-white pt-3 pb-8">
                        You can also find me here
                    </p>
                    <IconList iconLinks={icons} alignment="center" size="big"/>
                </div>
        </footer>
    );
};

export default Footer;
