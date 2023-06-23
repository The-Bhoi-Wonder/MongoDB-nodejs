import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");


        const movies = await db
            .collection("movies")
            .aggregate([{$sample: {size : 1}}]) // gets a random sample of 1 from movies db
            .toArray();

        res.json(movies);
    }
    catch(e){
        console.error(e);
    }
};