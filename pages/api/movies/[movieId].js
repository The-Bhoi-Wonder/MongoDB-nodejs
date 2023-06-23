import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
    //console.log(req+"   "+res);
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const id = req.query.movieId;
        console.log(id);


        const movie = await db
            .collection("movies")
            .findOne( { "_id" : ObjectId(id)}) 

        console.log("got here"+ movie);
        res.json(movie);
    }
    catch(e){
        console.error(e);
    }
};