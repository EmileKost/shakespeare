const express = require("express");

const port = 5000;
const app = express();

app.listen(app, () => {
	console.log(`Server is running on port: ${port}`);
});
