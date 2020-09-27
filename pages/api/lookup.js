import get from './get'
import stats from './stats'

export default async (req, res) => {
  // console.log({ query: req.query, path: req.path })
  switch (req.query?.op) {
    case 'stats':
      return stats(req, res)
    case 'get':
      return get(req, res)
    default:
      return res.status(405).end()
  }
}
