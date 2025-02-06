import Image from "next/image";
import Head from "next/head";
//local images go in the public folder
//I need to import my local image to use it as the Image src

// src/app/page.js

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <h1>Slow Living</h1>
      <h2>Where joy lives</h2>

      <Image
        src="/journal.jpeg"
        alt={"Open journal on blanket with pen"}
        width={500}
        height={1000}
        priority="false"
        // placeholder="blur"
        className="rounded-2xl"
      />
    </>
  );
}
