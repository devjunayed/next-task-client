const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.afpl30n.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const nextTaskDb =  client.db("nextTask");
    const onGoingTask = nextTaskDb.collection("onGoingTask");

    app.post("/next-task", async(req, res) => {
        const data = req.body;
        const result = await onGoingTask.insertOne(data);
    })


    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {}
}
run().catch(console.dir);


app.get("/", (req, res)=>{
    res.send("Server is running");
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});
