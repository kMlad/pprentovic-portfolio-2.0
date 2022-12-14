import React from "react";
import Head from "next/head";

import Layout from "../../src/layout/Layout";
import ImageProjectsBlock from "../../src/blocks/ImageProjectsBlock";
import { uxUiDesign } from "../../public/data/projectsData";


export default function Home() {
    return (
        <>
            <Head>
                <title>UI/UX | Petar Prentovic</title>
                <meta
                    name="description"
                    content="The UX/UI Projects of Petar Prentovic"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" text-white">
                <Layout>
                    <ImageProjectsBlock {...uxUiDesign}/>
                    <></>                    
                </Layout>
            </main>
        </>
    );
}