import { NextApiRequest, NextApiResponse } from "next";
import { getJobs, postMovies } from "../../../lib/mongo/jobs";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  console.log(" req details ", req.method);

  if (req.method === "GET") {
    console.log(" inside GET req");

    try {
      const { movies, error } = await getJobs();

      if (error) throw new Error(error);

      return res.status(200).json({ movies });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      console.log(" inside POST req");

      const jobDetails = req.body.data;

      const { movies, error } = await postMovies(jobDetails);

      return res.status(201).json({ movies });
    } catch (error) {
      console.log(error);
    }
  }
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end("Method GET and POST allowed");
};

export default handler;
