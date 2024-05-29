// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://clockchoco123:QsyHSgqzuqL9AwNI@cluster0.qpf3unk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

 
    await client.connect();

    
    


  if (req.method === 'GET') {
    const db = client.db("db");
    let result = await db.collection('test').find().toArray();
    console.log(result);
    return result;
  }
  if (req.method === 'POST') {
    const index = req.body.index;
    const user = req.body.user;
    console.log(index)
    res.status(200).json({data:index});
  }
  if (req.method === 'DELETE') {
    const index = req.body.index;
    const user = req.body.user;
    console.log(index)
    res.status(200).json({data:index});
  }
  
}
