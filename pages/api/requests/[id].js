import Requests from '@models/Requests'
import CRUD from '@server/CRUD'

export default async function handler(req, res) {
  return await CRUD(Requests, req, res)
}
