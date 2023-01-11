import { AddLayoutProps } from "./types";
import Head from "next/head";
import Layout from "../components/layout";
import metadata from "./data/metadata"

const Container = (props) => {
    return (
        <>
            <Layout>
            <header className="w-full max-w-3xl flex flex-row justify-between items-center my-1">
                <Head>
                    <title>{metadata.title}</title>
                </Head>
            </header>
            <div className="w-full flex flex-col items-center p-3">
                <div className="flex flex-row items-center">
                    <span className="mx-2 font-extralight text-4xl">
                        {metadata.title}
                    </span>
                </div>

                <main className="w-full max-w-3xl">{props.children}</main>
            </div>
            </Layout>
        </>

      );
}

export default Container;