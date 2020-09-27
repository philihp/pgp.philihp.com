import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default (req, res) => {
  // const id = req.query.search.replace(/\W/g, '')
  const data = fs.readFileSync(
    path.join(serverRuntimeConfig.PROJECT_ROOT, 'public', `9600F122.asc`)
  )
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(data)
}
