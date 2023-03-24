import clientPromise from "./index";

let client;
let db: any = null;
let movies: any;

async function init() {
    if(db) return;

    try {      
        client = await clientPromise;
        db = client && await client.db();

        movies = await db.collection('movies');
    } catch (e) {
        
    }
}; 

(async () => {
    await init();
});

export async function getMovies(){
    try {
        
        if(!movies) await init();

        const result = await movies
            .find({})
            .limit(20)
            .map((movie: any)=> ({ ...movie, _id: movie._id.toString() }))
            .toArray();

        return { movies: result };
    } catch (error) {
        console.log(error);
        return { error: " Error while fetching movies" }
    }
}