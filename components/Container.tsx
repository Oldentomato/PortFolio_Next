import { AddLayoutProps } from "./types";
import Head from "next/head";
import Layout from "../components/layout";
import metadata from "./data/metadata"

const Container = (props) => {

    const meta = {
        title: metadata.title,
        description: metadata.description,
        author: metadata.author,
        tag: metadata.tag,
        ...props.customMeta,
      };

    return (
        <>
            <Layout>
            <header className="w-full max-w-3xl flex flex-row justify-between items-center my-1">
                <Head>
                    <title>{meta.title}</title>
                    <meta content={meta.description} name="description" />
                    <meta name="keyword" content={meta.tag} />
                    <meta property="og:site_name" content={meta.author} />
                </Head>
            </header>
            <div className="w-full flex flex-col items-center">
                <div className="flex flex-row items-center">
                    <span className="mx-2 font-extralight text-4xl">
                        {meta.title}
                    </span>
                </div>

                <main className="w-full max-w-2xl">{props.children}</main>
            </div>
            </Layout>
        </>

      );
}

export default Container;