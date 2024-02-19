const express = require("express");

const port = 5000;
const app = express();

app.get("/", (req, res) => {
	res.send("I am a test server");
});

app.listen(app, () => {
	console.log(`Server is running on port: ${port}`);
});
