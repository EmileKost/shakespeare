import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	results: [
		{
			type: String,
			required: false,
		},
	],
});

const User = model("Blog", userSchema);
export default User;
