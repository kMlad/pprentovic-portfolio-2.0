import { P as ProjectProps } from "../../../src/pages/ProjectPage";
import desktopHero from "../../assets/projects/illustrations/hero-desktop.png";
import mobileHero from "../../assets/projects/illustrations/hero-mobile.png";
import showcase1 from '../../assets/projects/illustrations/showcase-1.png'
import showcase2 from '../../assets/projects/illustrations/showcase-2.png'
import showcase3 from '../../assets/projects/illustrations/showcase-3.png'
import showcase4 from '../../assets/projects/illustrations/showcase-4.png'
import showcase5 from '../../assets/projects/illustrations/showcase-5.png'

export const ProjectData: ProjectProps = {
    coverImage: {
        alt: "Illustrations",
        desktopImage: desktopHero,
        mobileImage: mobileHero,
    },
    title: "Illustrations",
    metadataTable: {
        number: "01",
        title: "Overview",
        contents: [
            {
                title: "Project Timeline",
                records: ["Mar 2020-", "Oct 2021"],
            },
            {
                title: "Project type",
                records: ["Illustrator", "Design"],
            },
            {
                title: "Contributor",
                records: ["Designer", "Petar Prentovic"],
            },
            {
                title: "My contribution",
                records: ["Free-Hand art", "Photoshop", "Illustrator"],
            },
        ],
    },
    articleSections: [
        {
            heading: "What my Illustrations are about?",
            paragraph:
                "During the Covid period every person went through the stage of being stuck at home and for me it was a period where mt free art creativity was dominating and I started doing illustrations for people as a gift or as a client thing.",
        },
        {
            heading: "The Vision",
            paragraph:
                "I had a vision to make a great instagram profile and do it for money which turned to be a good idea, but it was taking a lot of my time and I did it on rare occasions. Still, managed to draw 20+ illustrations and made a lot of my friends happy by drawing them and making their day.",
        },
    ],
    stickyNotes: {
        title: "Project Goals and Principals",
        notes: [
            {
                note: "Portrait Illustrations",
                number: "01",
            },
            {
                note: "Redrawing images posted on social media",
                number: "02",
            },
            {
                note: "Instagram profile and big reach",
                number: "03",
            },
            {
                note: "Paid Illustration Portraits",
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
            title: "Illustrations",
            images: [showcase1, showcase2, showcase3],

        },
        {
            title: "Used Tools",
            images: [showcase4, showcase5],

        },
    ],
    
};
