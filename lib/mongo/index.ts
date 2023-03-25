import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
const options = {};

if(!URI) throw new Error("URI not found");

let client = new MongoClient(URI, options);
let clientPromise: Promise<MongoClient> | undefined;

let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>
  }

if(process.env.NODE_ENV !== "production"){
    if(!globalWithMongo._mongoClientPromise){
        globalWithMongo._mongoClientPromise = client.connect();
    } 
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    clientPromise = client.connect();
}

export default clientPromise;

