import { NextApiRequest, NextApiResponse } from "next";
import { getMovies } from "../../../lib/mongo/movies";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {

    console.log(" req details ", req.method)

  if(req.method === "GET"){

    console.log(" inside req")

        try {

            const { movies, error } = await getMovies();

            if(error) throw new Error(error);

            return res.status(200).json({ movies });
            
        } catch (error: any) {
            return res.status(500).json({ error: error.message })
        }
    }

    res.setHeader('Allow', ['GET']);
    res.status(425).end('Method GET not allowed');
}

export default handler;