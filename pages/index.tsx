import Head from "next/head";
import Image from "next/image";

import ContactFormBlock from "../src/blocks/ContactFormBlock";
import ProjectsBlock from "../src/blocks/ProjectsBlock";
import Layout from "../src/layout/Layout";
import { hero, about, projects, tools } from "../public/data/mainPageData";
import ToolsBlock from "../src/blocks/ToolsBlock";
import AboutBlock from "../src/blocks/AboutBlock";
import HeroBlock from "../src/blocks/HeroBlock";

export default function Home() {
    return (
        <>
            <Head>
                <title>Petar Prentovic</title>
                <meta
                    name="description"
                    content="Petar Prentovic is an experienced UX/UI and Graphic Designer with multiple successful design projects."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" text-white">
                <Layout>
                    <HeroBlock {...hero} />
                    <AboutBlock {...about} />
                    <ProjectsBlock title="Services" cards={projects} showArrow={false}/>
                    <ToolsBlock title="Tools" tools={tools} />
                    <ContactFormBlock title="Contact me" />
                </Layout>
            </main>
        </>
    );
}
