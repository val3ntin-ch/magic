import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SignIn from "@/components/signIn";

export default function Home() {
  return (
    <>
      <Head>
        <title>Magic</title>
        <meta name="description" content="Magic app for testing login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SignIn />
      </main>
    </>
  );
}
