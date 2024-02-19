const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");
// Fix that URL is encoded so that DB can connect
const uri = `mongodb+srv://EmileKost:test@cluster0.xat7joi.mongodb.net/?retryWrites=true&w=majority`;
const port = 5000;
const app = express();

app.get("/", (req, res) => {
	res.send("I am a test server");
});

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function connectDb() {
	try {
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log("The Database is connected");
	} finally {
		await client.close();
	}
}

app.listen(app, () => {
	console.log(`Server is running on port: ${port}`);
});

connectDb().catch(console.dir);
