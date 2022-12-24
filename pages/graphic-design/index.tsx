import React from "react";
import Head from "next/head";

import Layout from "../../src/layout/Layout";
import ImageProjectsBlock from "../../src/blocks/ImageProjectsBlock";
import { graphicDesign } from "../../public/data/projectsData";


export default function Home() {
    return (
        <>
            <Head>
                <title>Graphic Design | Petar Prentovic</title>
                <meta
                    name="description"
                    content="The Graphic Design Projects of Petar Prentovic"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" text-white">
                <Layout>
                    <ImageProjectsBlock {...graphicDesign}/>
                    <></>                    
                </Layout>
            </main>
        </>
    );
}