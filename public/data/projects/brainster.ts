import { P as ProjectProps } from "../../../src/pages/ProjectPage";
import desktopHero from "../../assets/projects/brainster/hero-desktop.png";
import mobileHero from "../../assets/projects/brainster/hero-desktop.png";
import showcase1 from '../../assets/projects/brainster/showcase-1.png'
import showcase2 from '../../assets/projects/brainster/showcase-2.png'
import showcase3 from '../../assets/projects/brainster/showcase-3.png'
import showcase4 from '../../assets/projects/brainster/showcase-4.png'
import showcase5 from '../../assets/projects/brainster/showcase-5.png'
import showcase6 from '../../assets/projects/brainster/showcase-6.png'

export const ProjectData: ProjectProps = {
    coverImage: {
        alt: "Brainster Logo",
        desktopImage: desktopHero,
        mobileImage: mobileHero,
    },
    title: "Brainster",
    metadataTable: {
        number: "01",
        title: "Overview",
        contents: [
            {
                title: "Project Timeline",
                records: ["Nov 2020-", "Feb 2021"],
            },
            {
                title: "Project type",
                records: ["Connecting", "Organizational"],
            },
            {
                title: "Contributor",
                records: ["Designer", "Petar Prentovic"],
            },
            {
                title: "My contribution",
                records: ["Web Design", "User Journey", "Brand Quality"],
            },
        ],
    },
    articleSections: [
        {
            heading: "What Brainster is about?",
            paragraph:
                "Brainster is a company that organizes and implements educational programs in the field of: programming, software testing, digital marketing, graphic design, data science and UX/UI design.",
        },
        {
            heading: "The Vision",
            paragraph:
                "Brainster Hiring - A free platform connecting you with talented students from all of Brainster’s academies.",
        },
    ],
    stickyNotes: {
        title: "Project Goals and Principals",
        notes: [
            {
                note: "Connecting Students of Brainster Academy with the employers",
                number: "01",
            },
            {
                note: "Clear and easy to use design in order to reach and find the employees",
                number: "02",
            },
            {
                note: "Filter of academies and students that are work-ready",
                number: "03",
            },
            {
                note: "Strict color use and great layout hierarchy",
                number: "04",
            },
        ],
    },
    secondaryTableHeader: {
        number: "02",
        title: "Development",
    },
    imagePanels: [
        {
            title: "Concept Development + UI",
            images: [showcase1, showcase2, showcase3],
        },
        {
            title: "Appointment System + Making Partner",
            images: [showcase4, showcase5, showcase6],
        },
    ],
    colors: {
        title: "Colors",
        description:
            "The Colors of the Website are primary yellow and black and white",
        colors: [
            {
                title: "Primary Color",
                hexCode: "#FBD132",
            },
            {
                title: "Secondary Color",
                hexCode: "#000000",
            },
            {
                title: "Background Color",
                hexCode: "#FFFFFF",
            },
        ],
    },
    summary:{
        heading: "Layout",
        paragraph: "The Layout is based on hierarchy of elements and their importance as an information or action in the Website. The goal here is to make the Employers stay a lot on the site and find what best suits them and their company. Every employed student is a huge success for Brainster as a Brand in the Industry."
    }
};
