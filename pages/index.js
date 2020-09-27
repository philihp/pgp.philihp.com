import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>pgp.philihp.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>pgp.philihp.com</h1>

        <p className={styles.description}>
          This is a statically hosted PGP keyserver.
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/philihp/pgp.philihp.com"
            className={styles.card}
          >
            <h3>Source &rarr;</h3>
            It&apos;s open source so you can learn from my mistakes.
          </a>

          <a href="https://philihp.com/pgp" className={styles.card}>
            <h3>Query &rarr;</h3>
            It only responds to queries for my key, but if you want my key then
            that&apos;s cool.
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home
