import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Hero from "../components/home/section_1/hero";
import ExperienceItems from "../components/home/section_2"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import {useEffect} from 'react'

// gsap.registerPlugin(ScrollTrigger);

export default function Home() {



  return (
    <Layout>
      <div className="overflow-hidden">
        <Head>
          <title>PortFolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="top-0 left-0 outline-none">
          <div className="flex h-[100vh] relative items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <Hero />
            </div>
          </div> 
          

          <div className="h-[100vh] items-center justify-center text-gray-600 body-font">

            <ExperienceItems />
          </div>

          {/* <section className="flex items-center h-[100vh] relative justify-center">
            <div className="skill opacity-0">
              <Skill />
            </div>
            <div className="skillanimation opacity-0">
              <AnimationSkill />
            </div>

          </section>

          <section className="flex items-center h-[100vh] relative justify-center">
            <div className="Activities">
              <h1>TEST2</h1>
            </div>
          </section> */}
        </div>

      </div>


    </Layout>
  );
}
