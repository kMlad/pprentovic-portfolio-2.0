import { StaticImageData } from "next/image";
import { P as StickyNoteProps } from "../../../src/components/stickyNote";
import { P as ColorProps } from "../../../src/components/color";
import showcase1 from '../../assets/projects/brainster/showcase-1.png'
import showcase2 from '../../assets/projects/brainster/showcase-2.png'
import showcase3 from '../../assets/projects/brainster/showcase-3.png'
import showcase4 from '../../assets/projects/brainster/showcase-4.png'
import showcase5 from '../../assets/projects/brainster/showcase-5.png'
import showcase6 from '../../assets/projects/brainster/showcase-6.png'

export interface CoverImage {
    mobileImage: StaticImageData;
    desktopImage: StaticImageData;
    alt: string;
}


export interface TableHeader {
    number: string;
    title: string;
}

export interface TableColumn {
    title: string;
    records: string[];
}

export interface Table {
    number: string;
    title: string;
    contents?: TableColumn[];
}

export interface ArticleSection {
    heading: string;
    paragraph: string;
}

export interface StickyNotes {
    title: string;
    notes: StickyNoteProps[];
}

export interface Colors {
    title: string;
    description: string;
    colors: ColorProps[];
}

export interface ProjectImages {
    title: string;
    images: StaticImageData[];
}

export interface Typography {
    color: string;
    text: string;
    font: string;
}
