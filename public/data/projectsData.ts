import { P as ImageProjectBlockProps } from "../../src/blocks/ImageProjectsBlock";
import butel from "../assets/imageProjectCards/butel.png";
import casa from "../assets/imageProjectCards/casa.png";
import illustrations from "../assets/imageProjectCards/illustrations.png";
import wedding from "../assets/imageProjectCards/wedding.png";
import doctor from "../assets/imageProjectCards/doctor.png";
import renoon from "../assets/imageProjectCards/renoon.png";
import brainster from "../assets/imageProjectCards/brainster.png";

export const graphicDesign: ImageProjectBlockProps  = {
    title: "Graphic Design",
    projects: [
        {
            image: butel,
            alt: "Basketball timeout",
            title: {
                white: "Logo Design for ",
                blue: "BC Butel",
            },
            button: {
                type: "link",
                text: "View Project",
                link: "projects/bc-butel",
            },
        },
        {
            image: casa,
            alt: "Casa 3x3 Team",
            title: {
                white: "Jersey Design for ",
                blue: "Casa 3x3",
            },
            button: {
                type: "link",
                text: "View Project",
                link: "projects/casa-3x3",
            },
        },
        {
            image: illustrations,
            alt: "Illustrations",
            title: {
                white: "Illustrations for ",
                blue: "Many Clients",
            },
            button: {
                type: "link",
                text: "View Project",
                link: "projects/illustrations",
            },
        },
        {
            image: wedding,
            alt: "Wedding dress",
            title: {
                white: "Wedding for ",
                blue: "a client",
            },
            button: {
                type: "link",
                text: "View Project",
                link: "projects/wedding",
            },
        },
    ],
};

export const uxUiDesign: ImageProjectBlockProps = {
    title: "UX & UI Design", 
    projects: [
        {
            image: doctor,
            alt: "Doctors having a conversation",
            title: {
                white: "Website for ",
                blue: "Affiliated Physicians",
            },
            button: {
                type: "link",
                text: "View Project",
                link: "/projects/affiliated-physicians",
            },
        },
        {
            image: renoon,
            alt: "Renoon logo",
            title: {
                white: "Website for ",
                blue: "Renoon",
            },
            button: {
                type: "link",
                text: "View Project",
                link: "/projects/renoon",
            },
        },
        {
            image: brainster,
            alt: "Brainster logo",
            title: {
                white: "Website for ",
                blue: "Brainster Hiring",
            },
            button: {
                type: "link",
                text: "View Project",
                link: "projects/brainster-hiring",
            },
        },
    ],
};
