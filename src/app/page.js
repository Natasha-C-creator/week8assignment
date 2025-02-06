//Home page, showing nav bar and a list of all of the

import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <nav></nav>
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
