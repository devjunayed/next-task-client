const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    const todoTask = nextTaskDb.collection("todoTask");
    const onGoingTask = nextTaskDb.collection("onGoingTask");
    const completedTask = nextTaskDb.collection("completedTAsk");

    app.post("/create-task", async(req, res) => {
        const data = req.body;
        const result = await todoTask.insertOne(data);
        res.send(result);
    })
    app.post("/todo", async(req, res) => {
        const data = req.body;
        data._id = new ObjectId(data._id);
        const result = await todoTask.insertOne(data);
        res.send(result);
    })

    app.get("/todo/:id", async(req, res) => {
      const userId = req.params.id;
      const result = await todoTask.find({userId}).toArray();
      console.log(result);
      res.send(result);
    })

    app.delete("/todo/:id", async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await todoTask.deleteOne(query);
      res.send(result);
    })

    
  

    app.post("/ongoing", async(req, res) => {
      const data = req.body;
      data._id = new ObjectId(data._id);
      const result = await onGoingTask.insertOne(data);
      res.send(result);

    })

    app.get("/ongoing/:id", async(req, res) => {
      const userId = req.params.id;
      const result = await onGoingTask.find({userId}).toArray();
      res.send(result);
    })

    app.delete("/ongoing/:id", async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await onGoingTask.deleteOne(query);
      res.send(result);
    })

    app.post("/completed", async(req, res) => {
      const data = req.body;
      data._id = new ObjectId(data._id);
      const result = await completedTask.insertOne(data);
      res.send(result);
    })

    app.get("/completed/:id", async(req, res) => {
      const userId = req.params.id;
      const result = await completedTask.find({userId}).toArray();
      res.send(result);
    })

    app.delete("/completed/:id", async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await completedTask.deleteOne(query);
      res.send(result);
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
