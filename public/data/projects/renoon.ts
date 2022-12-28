import { P as ProjectProps } from "../../../src/pages/ProjectPage";
import desktopHero from "../../assets/projects/renoon/hero-desktop.png";
import mobileHero from "../../assets/projects/renoon/hero-mobile.png";
import showcase1 from '../../assets/projects/renoon/showcase-1.png'
import showcase2 from '../../assets/projects/renoon/showcase-2.png'
import showcase3 from '../../assets/projects/renoon/showcase-3.png'
import showcase4 from '../../assets/projects/renoon/showcase-4.png'
import showcase5 from '../../assets/projects/renoon/showcase-5.png'
import showcase6 from '../../assets/projects/renoon/showcase-6.png'

export const ProjectData: ProjectProps = {
    coverImage: {
        alt: "Renoon Logo",
        desktopImage: desktopHero,
        mobileImage: mobileHero,
    },
    title: "Renoon",
    metadataTable: {
        number: "01",
        title: "Overview",
        contents: [
            {
                title: "Project Timeline",
                records: ["Jan 2021-", "Apr 2021"],
            },
            {
                title: "Project type",
                records: ["Informative", "Brand Shop"],
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
            heading: "What Renoon is about?",
            paragraph:
                "Renoon is about sustainable fashion and eco-friendly modern way of designing clothes. It partners with a lot of big brands such as ROMBAUT, Viron, REYEM, CIRCLE and many more. It’s products consist of Ethical labor are Vegan and are usually Slow Fashion.",
        },
        {
            heading: "The Vision",
            paragraph:
                "The Vision of creating Renoon website was to be informative about their App Shop as well as let people know the values of the Renoon Brand. ",
        },
    ],
    stickyNotes: {
        title: "Project Goals and Principals",
        notes: [
            {
                note: "Great informational website and clear vision of what the Brand is about",
                number: "01",
            },
            {
                note: "Highlight the values of the brand and let people know what they are buying",
                number: "02",
            },
            {
                note: "Motion Design and very Futuristic VIbe",
                number: "03",
            },
            {
                note: "Free color use and great layout hierarchy",
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
            title: "Best Marketing Campaigns",
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
                hexCode: "#0F108F",
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
        paragraph: "The layout Design is based on hierarchy of elements with a lot of motion and modern design. There is always caring and sustainability for natural elements of the World and the purpose is to inform the people of the good values that the Brand represents."
    }
};
