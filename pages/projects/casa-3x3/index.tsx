import Head from "next/head";
import React from "react";
import Layout from "../../../src/layout/Layout";
import ProjectPage from "../../../src/pages/ProjectPage";
import { ProjectData } from "../../../public/data/projects/casa-3x3";

const BrainsterHiring = () => {
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
                    <ProjectPage {...ProjectData}/>
                    <></>
                    <></>
                </Layout>
            </main>
        </>
    );
};

export default BrainsterHiring;
