import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button, { P as ButtonProps } from "../components/button";
import NavLink, { P as NavLinkProps } from "../components/navLink";
import burger from "./assets/burger.png";
import logo from "./assets/logo.png";
import desktopLogo from "./assets/logoDesktop.png";

export interface P {
    navLinks: NavLinkProps[];
    buttons: ButtonProps[];
    openBurgerMenu?: () => void;
}

const Header = ({ navLinks, buttons, openBurgerMenu }: P): JSX.Element => {
    return (
        <>
            <header
                id="header-mobile"
                className="flex lg:hidden bg-black w-full py-5"
            >
                <div className="container relative mx-auto">
                    <span onClick={openBurgerMenu}>
                        <Image
                            className="absolute top-1/2 -translate-y-1/2 cursor-pointer"
                            src={burger}
                            alt="burger menu icon"
                            height={25}
                            width={25}
                        />
                    </span>

                    <div className="flex justify-center items-center">
                        <Image src={logo} alt="Portfolio logo" />
                    </div>
                </div>
            </header>
            <header
                id="header-desktop"
                className="hidden lg:flex bg-black w-full py-16"
            >
                <div className="container gap-x-40 xl:gap-x-60 mx-auto flex flex-row justify-between items-center w-full">
                    <Link href="/" className="shrink-0">
                        <Image
                            src={desktopLogo}
                            alt="portfolio logo"
                            width={130}
                            height={45}
                        />
                    </Link>
                    <nav className="flex flex-row justify-between w-full gap-x-12 xl:gap-x-28">
                        <div className="flex flex-row justify-between items-center w-full">
                            {navLinks.map((navLink, index) => (
                                <span
                                    key={`burger-link-${index}`}
                                    className="py-3"
                                >
                                    <NavLink
                                        text={navLink.text}
                                        to={navLink.to}
                                    />
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            {buttons.map((btn, index) => (
                                <Button
                                    text={btn.text}
                                    type="link"
                                    link={btn.link}
                                    key={`burger-button-${index}`}
                                />
                            ))}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
