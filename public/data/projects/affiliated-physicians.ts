import { P as ProjectProps } from "../../../src/pages/ProjectPage";
import desktopHero from "../../assets/projects/doctors/hero-desktop.png";
import mobileHero from "../../assets/projects/doctors/hero-mobile.png";
import showcase1 from '../../assets/projects/doctors/showcase-1.png'
import showcase2 from '../../assets/projects/doctors/showcase-2.png'
import showcase3 from '../../assets/projects/doctors/showcase-3.png'
import showcase4 from '../../assets/projects/doctors/showcase-4.png'
import showcase5 from '../../assets/projects/doctors/showcase-5.png'
import showcase6 from '../../assets/projects/doctors/showcase-6.png'



export const ProjectData: ProjectProps = {
    coverImage: {
        alt: "Doctor Consultation",
        desktopImage: desktopHero,
        mobileImage: mobileHero,
    },
    title: "Affiliated Physicians",
    metadataTable: {
        number: "01",
        title: "Overview",
        contents: [
            {
                title: "Project Timeline",
                records: ["Sep-Nov 2021"],
            },
            {
                title: "Project type",
                records: ["Informational", "Organizational"],
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
            heading: "What Affiliate Physicians is about?",
            paragraph:
                "Affiliate Physicians Florida is a Hospital based in Tampa, Florida and it has all the technology of a modern day hospital that brings the best care of its patients. It has over 30 employees and a very well built team organization in order to help the patients in any needed situation.",
        },
        {
            heading: "The Vision",
            paragraph:
                "The Vision of creating a website is to give the patients an easier way to make appointments and choose the doctor they want to go to. It’s also very informational about what the Hospital is about and what kind of treatments they do. Letting the patients have bigger control and knowledge about what they do.",
        },
    ],
    stickyNotes: {
        title: "Project Goals and Principals",
        notes: [
            {
                note: "Great informational website and clear vision of what the Hospital is about",
                number: "01",
            },
            {
                note: "Better appointment system in order to have easier and faster workflow",
                number: "02",
            },
            {
                note: "Clear Design and easy to use website",
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
            title: "Appointment System",
            images: [showcase4, showcase5, showcase6],

        },
    ],
    colors: {
        title: "Colors",
        description:
            "The Colors of the Website are two shades of blue as a primary and secondary color and white as base color for the background.",
        colors: [
            {
                title: "Primary Color",
                hexCode: "#0E3E69",
            },
            {
                title: "Secondary Color",
                hexCode: "#4BA9DE",
            },
            {
                title: "Background Color",
                hexCode: "#FFFFFF",
            },
        ],
    },
    summary:{
        heading: "Layout",
        paragraph: "The Layout is based on hierarchy of elements and their importance as an information or action in the Website. The goal here is not to make the Patients stay a lot on the site, but rather to find the thing they need and get faster to where they need to be."
    }
};
