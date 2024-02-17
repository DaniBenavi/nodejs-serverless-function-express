import { VercelRequest, VercelResponse } from "@vercel/node";
import { readJSON } from "../utils";

const movies = readJSON('../movies.json');
export default function handler(req: VercelRequest, res: VercelResponse) {
    return res.json(movies);
}