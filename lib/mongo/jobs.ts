import clientPromise from "./index";

let client;
let db: any = null;
let jobs: any;

async function init() {
  if (db) return;

  try {
    client = await clientPromise;
    db = client && (await client.db());

    jobs = await db.collection("jobs");
  } catch (e) {
    console.log(" Error while init ", e);
  }
}

async () => {
  await init();
};

export async function getJobs() {
  try {
    if (!jobs) await init();

    const result = await jobs
      .find({})
      .limit(20)
      .map((movie: any) => ({ ...movie, _id: movie._id.toString() }))
      .toArray();

    console.log(" *******************  ", result);

    return { movies: result };
  } catch (error) {
    console.log(error);
    return { error: " Error while fetching movies" };
  }
}

export async function postMovies(formData: any) {
  console.log(" formData ---> ", formData);

  try {
    if (!jobs) await init();

    console.log(" ******************* save **************", jobs);

    const result = await jobs.insertOne(formData);
    return { movies: result };
  } catch (error) {
    console.log(error);
    return { error: " Error while fetching movies" };
  }
}
