import React, { ReactNode, useState } from "react";

import BurgerMenu from "./BurgerMenu";
import Header from "./Header";
import Footer from "./Footer";
import { headerData, author, images } from "../../public/data/mainPageData";

interface P {
    children?: JSX.Element[];
}

const Layout = ({ children }: P) => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState<boolean>(false);
    const closeBurgerMenu = () => {
        setBurgerMenuIsOpen(false);
    };
    const openBurgerMenu = () => {
        setBurgerMenuIsOpen(true);
    };
    return (
        <>
            <Header {...headerData} openBurgerMenu={openBurgerMenu} />
            {burgerMenuIsOpen && (
                <BurgerMenu
                    headerProps={headerData}
                    closeBurgerMenu={closeBurgerMenu}
                    name={`${author.name} ${author.surname}`}
                    icons={[
                        {
                            to: author.facebook,
                            icon: images.fbIcon,
                            alt: "facebook icon",
                        },
                        {
                            to: author.email,
                            icon: images.emailIcon,
                            alt: "email icon",
                            isMail: true,
                        },
                        {
                            to: author.linkedin,
                            icon: images.liIcon,
                            alt: "linkedin icon",
                        },
                    ]}
                />
            )}
            {children}
            <Footer
                name={`${author.name} ${author.surname}`}
                icons={[
                    {
                        to: author.facebook,
                        icon: images.fbIcon,
                        alt: "facebook icon",
                    },
                    {
                        to: author.email,
                        icon: images.emailIcon,
                        alt: "email icon",
                        isMail: true,
                    },
                    {
                        to: author.linkedin,
                        icon: images.liIcon,
                        alt: "linkedin icon",
                    },
                ]}
            />
        </>
    );
};

export default Layout;
