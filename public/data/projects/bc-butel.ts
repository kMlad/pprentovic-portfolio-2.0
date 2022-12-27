import { P as ProjectProps } from "../../../src/pages/ProjectPage";
import desktopHero from "../../assets/projects/butel/hero-desktop.png";
import mobileHero from "../../assets/projects/butel/hero-mobile.png";
import showcase1 from '../../assets/projects/brainster/showcase-1.png'
import showcase2 from '../../assets/projects/brainster/showcase-2.png'
import showcase3 from '../../assets/projects/brainster/showcase-3.png'
import showcase4 from '../../assets/projects/brainster/showcase-4.png'
import showcase5 from '../../assets/projects/brainster/showcase-5.png'

export const ProjectData: ProjectProps = {
    coverImage: {
        alt: "Basketball Timeout",
        desktopImage: desktopHero,
        mobileImage: mobileHero,
    },
    title: "BC Butel",
    metadataTable: {
        number: "01",
        title: "Overview",
        contents: [
            {
                title: "Project Timeline",
                records: ["August 2022"],
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
                records: ["Logo Design", "T-shirt Design", "Brand Quality"],
            },
        ],
    },
    articleSections: [
        {
            heading: "What BC Butel is about?",
            paragraph:
                "BC Butel is a Basketball Club based in Skopje, North Macedonia. It is formed 2021 and works with Youth category basketball players that want to become Professionals one day. Now with the number of 60+ youth players, it is one of the best upcoming teams in the City. ",
        },
        {
            heading: "The Vision",
            paragraph:
                "The Vision is to attract young kids to the sport of basketball and to Sport activities in general and inform their parents about the hottest Team in the moment that is on the path of becoming a great success story. With many tournaments abroad the country, the kids get a really good experience from young age and are set to a great path on becoming professional players",
        },
    ],
    stickyNotes: {
        title: "Project Goals and Principals",
        notes: [
            {
                note: "Great Brand logo that represents the character of the Club",
                number: "01",
            },
            {
                note: "Brand presentation by using t-shirts as a sample of the logo",
                number: "02",
            },
            {
                note: "Clear Design and easy to recognize logo",
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
            title: "Logo Concept",
            images: [showcase1, showcase2, showcase3],

        },
        {
            title: "Logo + T-Shirt Design",
            images: [showcase4, showcase5],

        },
    ],
    colors: {
        title: "Colors",
        description:
            "The Colors of the Logo are Orange Black and White",
        colors: [
            {
                title: "Primary Color",
                hexCode: "#FFFFFF",
            },
            {
                title: "Secondary Color",
                hexCode: "#BA6D47",
            },
            {
                title: "Background Color",
                hexCode: "#000000",
            },
        ],
    },
};
