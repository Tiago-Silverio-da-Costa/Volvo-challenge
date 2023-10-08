import { NextApiResponse } from "next"
import  data  from "../../public/api/cars.json"

export default function handler(req: any, res: NextApiResponse) {
  try {
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "eer" })
  }
}