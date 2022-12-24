import Head from "next/head";
import Image from "next/image";

import ContactFormBlock from "../../src/blocks/ContactFormBlock";
import ProjectsBlock from "../../src/blocks/ProjectsBlock";
import Layout from "../../src/layout/Layout";
import { hero, about, projects, tools } from "../../public/data/mainPageData";
import ToolsBlock from "../../src/blocks/ToolsBlock";
import AboutBlock from "../../src/blocks/AboutBlock";
import HeroBlock from "../../src/blocks/HeroBlock";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Kurac App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" text-white">
                <Layout>
                    <ProjectsBlock title="Services" cards={projects} />
                    <></>
                </Layout>
            </main>
        </>
    );
}
