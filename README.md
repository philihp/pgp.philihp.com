[![Dependencies](https://img.shields.io/librariesio/github/philihp/pgp.philihp.com)](https://libraries.io/github/philihp/pgp.philihp.com)
[![Keybase](https://badgen.net/keybase/pgp/philihp)](https://keybase.io/philihp)
![Github Build](https://badgen.net/github/status/philihp/pgp.philihp.com)

# pgp.philihp.com

This is a PGP Keyserver built in Next.js, and satisfying a minimum subset of the HKP interface so you can query it with

```bash
❯ gpg --keyserver hkps://pgp.philihp.com --recv-keys 9600F122
```

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, then verify it's working with gpg by running

```bash
❯ gpg --keyserver hkp://localhost:3000 --recv-keys 9600F122
```
