import get from './get'
import stats from './stats'

const lookup = async (req, res) => {
  switch (req.query?.op) {
    case 'stats':
      return stats(req, res)
    case 'get':
      return get(req, res)
    default:
      return res.status(405).end()
  }
}
export default lookup
