import fetch from 'isomorphic-unfetch'
import url from 'next-absolute-url'

const stats = async (req, res) => {
  const requested = await fetch(`${url(req).origin}/stats`)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(await requested.text())
}
export default stats
