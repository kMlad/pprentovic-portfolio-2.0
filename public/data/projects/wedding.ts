import { P as ProjectProps } from "../../../src/pages/ProjectPage";
import desktopHero from "../../assets/projects/wedding/hero-desktop.png";
import mobileHero from "../../assets/projects/wedding/hero-mobile.png";
import showcase1 from '../../assets/projects/brainster/showcase-1.png'
import showcase2 from '../../assets/projects/brainster/showcase-2.png'
import showcase3 from '../../assets/projects/brainster/showcase-3.png'
import showcase4 from '../../assets/projects/brainster/showcase-4.png'
import showcase5 from '../../assets/projects/brainster/showcase-5.png'

export const ProjectData: ProjectProps = {
    coverImage: {
        alt: "Wedding Menu",
        desktopImage: desktopHero,
        mobileImage: mobileHero,
    },
    title: "Wedding Design",
    metadataTable: {
        number: "01",
        title: "Overview",
        contents: [
            {
                title: "Project Timeline",
                records: ["June 2022"],
            },
            {
                title: "Project type",
                records: ["Branding", "Design"],
            },
            {
                title: "Contributor",
                records: ["Designer", "Petar Prentovic"],
            },
            {
                title: "My contribution",
                records: ["Menu Design", "Seating", "Welcome"],
            },
        ],
    },
    articleSections: [
        {
            heading: "What this Wedding Design is about?",
            paragraph:
                "This wedding Design is for a dear Client of mine who got engaged in 2022 Summer and I was very blessed to be able to help him in a way of designing these beautiful assignments he gave me. I am very proud of how it turned out and hopeful the couple will be happy forever. ",
        },
        {
            heading: "The Vision",
            paragraph:
                "Clean and Classy look to it. With bright colors for a happy reason and many flowers and nature elements around it.",
        },
    ],
    stickyNotes: {
        title: "Project Goals and Principals",
        notes: [
            {
                note: "Fancy Typography",
                number: "01",
            },
            {
                note: "Visually appealing",
                number: "02",
            },
            {
                note: "Clean Design",
                number: "03",
            },
            {
                note: "Simple color palette and great hierarchy of elements",
                number: "04",
            },
        ],
    },
    secondaryTableHeader: {
        number: "02",
        title: "Presentation",
    },
    imagePanels: [
        {
            title: "Design Interface",
            images: [showcase1, showcase2, showcase3],

        },
        {
            title: "Photos of the Wedding",
            images: [showcase4, showcase5],

        },
    ],
    colors: {
        title: "Colors",
        description:
            "The Colors of the Website are primary yellow and black and white",
        colors: [
            {
                title: "Primary Color",
                hexCode: "#FFFFFF",
            },
            {
                title: "Secondary Color",
                hexCode: "#BBD0B3",
            },
            {
                title: "Background Color",
                hexCode: "#000000",
            },
        ],
    },
    summary:{
        heading: "Layout",
        paragraph: "The Layout is based on hierarchy of elements and their importance as an information or action in the Website. The goal here is to make the Employers stay a lot on the site and find what best suits them and their company. Every employed student is a huge success for Brainster as a Brand in the Industry."
    }
};
