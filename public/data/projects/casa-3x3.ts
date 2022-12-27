import { P as ProjectProps } from "../../../src/pages/ProjectPage";
import desktopHero from "../../assets/projects/casa/hero-desktop.png";
import mobileHero from "../../assets/projects/casa/hero-desktop.png";
import showcase1 from '../../assets/projects/brainster/showcase-1.png'
import showcase2 from '../../assets/projects/brainster/showcase-2.png'
import showcase3 from '../../assets/projects/brainster/showcase-3.png'
import showcase4 from '../../assets/projects/brainster/showcase-4.png'
import showcase5 from '../../assets/projects/brainster/showcase-5.png'

export const ProjectData: ProjectProps = {
    coverImage: {
        alt: "The players of Casa 3x3",
        desktopImage: desktopHero,
        mobileImage: mobileHero,
    },
    title: "Casa 3x3",
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
                records: ["Clothing", "Design"],
            },
            {
                title: "Contributor",
                records: ["Designer", "Petar Prentovic"],
            },
            {
                title: "My contribution",
                records: ["Design Process", "Communication", "with Print Shop"],
            },
        ],
    },
    articleSections: [
        {
            heading: "What Casa 3x3 is about?",
            paragraph:
                "Casa 3x3 is a basketball Team formed in 2018. The reason of Our existence is true friendship and a lot of fun playing the game we love. We are very successful Team with many regional Championships around the last 5-6 years. 3x3 is a new and modern Sport, also an official Olympic sport in which we dream of being the best.",
        },
        {
            heading: "The Vision",
            paragraph:
                "In 2022 we decided that we wanted to redesign our Jersey designs and I was in charge of the process. I am very proud of this project and how good the design has came out. We also had a very successful Summer going to 20+ Tournaments in the Balkan Region.",
        },
    ],
    stickyNotes: {
        title: "Project Goals and Principals",
        notes: [
            {
                note: "Different and rebellious design language",
                number: "01",
            },
            {
                note: "Brand presentation by using Jersey design and the process of designing",
                number: "02",
            },
            {
                note: "Crazy design that only Casa 3x3 players will wear",
                number: "03",
            },
            {
                note: "Strict color palette with DarkMode background and interesting shapes",
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
            title: "Jersey Design",
            images: [showcase1, showcase2, showcase3],
        },
        {
            title: "Live Presentation",
            images: [showcase4, showcase5],
        },
    ],
    colors: {
        title: "Colors",
        description:
            "The Colors of the Jersey are two shades of grey and primary color of green.",
        colors: [
            {
                title: "Primary Color",
                hexCode: "#3FB44C",
            },
            {
                title: "Secondary Color",
                hexCode: "#393939",
            },
            {
                title: "Background Color",
                hexCode: "#646464",
            },
        ],
    },
    
};
