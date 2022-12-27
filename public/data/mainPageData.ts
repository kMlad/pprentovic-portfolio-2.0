import { P as HeaderProps } from "../../src/layout/Header";
import { P as HeroProps } from "../../src/blocks/HeroBlock";
import { P as AboutProps } from "../../src/blocks/AboutBlock";
import { P as ProjectCardProps } from "../../src/components/projectCard";
import { P as ToolProps } from "../../src/components/tool";
import Router from "next/router";

import fbIcon from "../assets/fb-icon.png";
import liIcon from "../assets/li-icon.png";
import emailIcon from "../assets/mail-icon.png";
import rocket from "../assets/rocket.png";
import paintPalette from "../assets/paint-palette.png";
import world from "../assets/world.png";
import figma from "../assets/tools/figma.png";
import afterEffects from "../assets/tools/after-effects.png";
import photoshop from "../assets/tools/photoshop.png";
import indesign from "../assets/tools/indesign.png";
import illustrator from "../assets/tools/illustrator.png";
import xd from "../assets/tools/xd.png";
import aboutMePhoto from "../assets/about-me.png";
import heroImage from "../assets/hero-image.png";

export const images = {
    fbIcon: fbIcon,
    liIcon: liIcon,
    emailIcon: emailIcon,
};

export const author = {
    name: "Petar",
    surname: "Prentovic",
    email: "pprentovic10@gmail.com",
    facebook: "https://www.facebook.com/petar.prentovic/",
    linkedin: "https://www.linkedin.com/in/petar-prentovic-802b54201/",
};

export const headerData: HeaderProps = {
    navLinks: [
        {
            text: "About me",
            to: Router.pathname === "" ? "#about-me" : "/#about-me",
        },
        {
            text: "Services",
            to: Router.pathname === "" ? "#projects" : "/#projects",
        },
        { text: "Tools", to: Router.pathname === "" ? "#tools" : "/#tools" },
        {
            text: "Contact me",
            to: Router.pathname === "" ? "#contact-me" : "/#contact-me",
        },
    ],
    buttons: [{ text: "Projects", type: "link", link: "/projects" }],
};

export const hero: HeroProps = {
    title: "Petar Prentovic",
    subtitle: "Graphic & UX/UI Designer with 3+ years of experience",
    email: author.email,
    heroImage: heroImage,
};

export const about: AboutProps = {
    title: "About me",
    subtitle: "Graphic & UX/UI Designer",
    description:
        "Entrepreneurial and hardworking UX/UI & Graphic Designer, with 3+ years of experience in the field. Worked in a variety of industries (insurance, food, beauty, medicine, etc.). Looking for new opportunities and ready to take on new challenges. I enjoy solving complex problems and turning them into simple and beautiful interface designs. When I'm not designing you will find me going for long walks or shooting some hoops.",
    social: [
        {
            icon: fbIcon,
            to: author.facebook,
            alt: "Facebook icon",
        },
        {
            icon: liIcon,
            to: author.linkedin,
            alt: "LinkedIn icon",
        },
    ],
    photo: aboutMePhoto,
};

export const projects: ProjectCardProps[] = [
    {
        icon: paintPalette,
        alt: "paintbrush",
        title: "Graphic Design",
        desc: "Branding, typography, layout, and the overall principles of design composition.",
        button: {
            text: "View Projects",
            type: "link",
            link: "/graphic-design",
        },
    },
    {
        icon: world,
        alt: "world",
        title: "UX Design",
        desc: "UX Design primary use is to make a product or service usable, enjoyable, and accessible.",
        button: {
            text: "View Projects",
            type: "link",
            link: "/ui-ux-design",
        },
    },
    {
        icon: rocket,
        alt: "rocket",
        title: "UI Design",
        desc: "The process used to build interfaces in software or computerized devices, focusing on looks or style.",
        button: {
            text: "View Projects",
            type: "link",
            link: "/ui-ux-design",
        },
    },
];

export const tools: ToolProps[] = [
    {
        title: "Figma",
        icon: figma,
        alt: "Figma icon",
        progress: 95,
    },
    {
        title: "AfterEffects",
        icon: afterEffects,
        alt: "After Effects icon",
        progress: 70,
    },
    {
        title: "Photoshop",
        icon: photoshop,
        alt: "Photoshop icon",
        progress: 100,
    },
    {
        title: "InDesign",
        icon: indesign,
        alt: "InDesign icon",
        progress: 80,
    },
    {
        title: "Illustrator",
        icon: illustrator,
        alt: "Illustrator icon",
        progress: 100,
    },
    {
        title: "Adobe XD",
        icon: xd,
        alt: "Adobe XD icon",
        progress: 100,
    },
];
