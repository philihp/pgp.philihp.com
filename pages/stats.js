import React from 'react'
import Head from 'next/head'

const Stats = () => {
  const datetime = new Date().toISOString()
  const date = datetime.slice(0, 10)
  const hour = datetime.slice(11, 13)
  return (
    <body>
      <Head>
        <title>SKS OpenPGP Keyserver statistics</title>
      </Head>
      <h1>
        SKS OpenPGP Keyserver statistics
        <br />
        Taken at {datetime}
      </h1>
      <h2>Settings</h2>
      <table summary="Keyserver Settings">
        <tr>
          <td>Hostname:</td>
          <td>pgp.philihp.com</td>
        </tr>
        <tr>
          <td>Nodename:</td>
          <td>pgp.philihp.com</td>
        </tr>
        <tr>
          <td>Version:</td>
          <td>1.1.7</td>
        </tr>
        <tr>
          <td>Server contact:</td>
          <td>philihp@gmail.com</td>
        </tr>
        <tr>
          <td>HTTP port:</td>
          <td>80</td>
        </tr>
        <tr>
          <td>Recon port:</td>
          <td>80</td>
        </tr>
        <tr>
          <td>Debug level:</td>
          <td>0</td>
        </tr>
      </table>

      <table summary="Keyserver Peers" width="100%">
        <tr valign="top">
          <td>
            <h2>Gossip Peers</h2>
            <table summary="Gossip Peers" />
          </td>
          <td>
            <h2>Outgoing Mailsync Peers</h2>
            <table summary="Mailsync Peers" />
          </td>
        </tr>
      </table>
      <h2>Statistics</h2>
      <p>Total number of keys: 6660666</p>
      <h3>Daily Histogram</h3>
      <table summary="Statistics" border="1">
        <tr>
          <td>Time</td>
          <td>New Keys</td>
          <td>Updated Keys</td>
        </tr>
        <tr>
          <td>{date}</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
      <h3>Hourly Histogram</h3>
      <table summary="Statistics" border="1">
        <tr>
          <td>Time</td>
          <td>New Keys</td>
          <td>Updated Keys</td>
        </tr>
        <tr>
          <td>
            {date} {hour}
          </td>
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
    </body>
  )
}

export default Stats
