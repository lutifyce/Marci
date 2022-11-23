var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("marci");
database.dropDatabase()
database = client.db("marci");
const ulti = database.collection("ulti");
const result = await ulti.insertOne({name:"Unleash"});
console.log(`ulti ${result} documents were inserted`);
} finally {
await client.close();
}
}
run()