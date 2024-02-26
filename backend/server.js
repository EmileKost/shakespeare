import express from "express";
import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import bodyParser from "body-parser";

import User from "./model/User.js";

import { FRONTEND_ENDPOINTS } from "./constants/frontendEndpoints.js";

// Fix that URL is encoded so that DB can connect
const uri = `mongodb+srv://EmileKost:test@cluster0.xat7joi.mongodb.net/?retryWrites=true&w=majority`;
const port = 5200;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(express.urlencoded({ extended: true }));
server.use(cors());

// Server TEST
server.get("/", (req, res) => {
	res.send("I am a test server");
});

// Get user
server.get("/getUser", (req, res) => {
	res.status(200).send("USER BABBYYYY");
});

// Create user
server.post("/createUser", (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hash = bcrypt.hashSync(password, salt);

	// ** Handle check if existing email or user ** //
	async function saveUser() {
		const user = new User({
			firstName,
			lastName,
			email,
			password: hash,
		});

		console.log(`A new user has been added: ${user}`);
		await user.save();
	}

	saveUser();

	res.status(200).sendStatus(200);
});

// Connection to server
server.listen(port, () => {
	// Connecting to DB is Async so promise
	mongoose
		.connect(uri)
		.then(() => {
			console.log("DB is succesfully connected");
		})
		.catch((err) => console.log(err));

	console.log(`Server connected on port:${port}`);
});
