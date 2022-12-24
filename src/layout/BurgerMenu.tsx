import React from "react";
import Image from "next/image";

import Button from "../components/button";
import NavLink from "../components/navLink";
import IconList, { IconLink } from "../components/iconList";
import { P as HeaderProps } from "./Header";
import x from "./assets/x.png";
import logo from "./assets/logo.png";

interface P {
    headerProps: HeaderProps;
    closeBurgerMenu: () => void;
    name: string;
    icons: IconLink[];
}

const BurgerMenu = ({ icons, name, closeBurgerMenu, headerProps }: P) => {
    return (
        <section
            id="burger-mobile"
            className="lg:hidden bg-black fixed left-0 right-0 top-0 bottom-0 "
        >
            <div className="container mx-auto flex flex-col justify-between h-full pb-14">
                <div className="relative mt-5">
                    <Image
                        className="absolute top-1/2 -translate-y-1/2 cursor-pointer"
                        src={x}
                        alt="burger menu icon"
                        onClick={closeBurgerMenu}
                        height={25}
                        width={25}
                    />
                    <div className="flex justify-center items-center">
                        <Image src={logo} alt="Portfolio logo" />
                    </div>
                </div>
                <nav className="py-10 flex flex-col ">
                    <div className="flex flex-col justify-between items-center">
                        {headerProps.navLinks.map((navLink, index) => (
                            <span
                                key={`burger-link-${index}`}
                                className="py-3"
                                onClick={closeBurgerMenu}
                            >
                                <NavLink text={navLink.text} to={navLink.to} />
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col justify-between items-center mt-14">
                        {headerProps.buttons.map((btn, index) => (
                            <span key={`burger-button-${index}`} onClick={closeBurgerMenu}>
                                <Button
                                    text={btn.text}
                                    type="link"
                                    link={btn.link}
                                />
                            </span>
                        ))}
                    </div>
                </nav>
                <div className="bg-white w-full h-[1px] border-white border rounded-full" />
                <div className="flex flex-col items-center">
                    <p className="text-white text-3xl font-bold pt-6">{name}</p>
                    <p className="text-white pt-3 pb-4">
                        You can also find me here
                    </p>
                    <IconList iconLinks={icons} size="big" alignment="center"/>
                </div>
            </div>
        </section>
    );
};

export default BurgerMenu;
