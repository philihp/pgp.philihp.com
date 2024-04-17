import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>pgp.philihp.com</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://philihp.com/assets/fonts/fonts.css"
        />
      </Head>

      <main>
        <h1>pgp.philihp.com</h1>
        <p>
          This is a PGP keyserver built in Next.js. It only returns one (my)
          key, which you can get with the following command.
        </p>
        <code>gpg --keyserver hkps://pgp.philihp.com --recv-keys 9600F122</code>
      </main>
      <style jsx global>
        {`
          html,
          body {
            font-family: 'Computer Modern', serif;
          }

          pre,
          code {
            font-family: 'Computer Typewriter', monospace;
            font-display: fallback;
          }
        `}
      </style>
    </div>
  )
}

export default Home
