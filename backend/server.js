import express from "express";
import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";

import User from "./model/User.js";

// Fix that URL is encoded so that DB can connect
const uri = `mongodb+srv://EmileKost:test@cluster0.xat7joi.mongodb.net/?retryWrites=true&w=majority`;
const port = 5200;
const app = express();

app.get("/", (req, res) => {
	res.send("I am a test server");

	const saltRounds = 10;
	const testPassword = "ilajflksdn";

	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(testPassword, salt);

	async function saveUser() {
		const user = new User({
			firstName: "Emilo",
			lastName: "Tranquilo",
			email: "emilekost00@gmail.com",
			password: hash,
		});

		console.log(`A new user has been added: ${user}`);
		await user.save();
	}

	saveUser();
});

// Connection to server
app.listen(port, () => {
	// Connecting to DB is Async so promise
	mongoose
		.connect(uri)
		.then(() => {
			console.log("DB is succesfully connected");
		})
		.catch((err) => console.log(err));

	console.log(`Server connected on port:${port}`);
});
