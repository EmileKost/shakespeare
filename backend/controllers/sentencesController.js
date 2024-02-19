// - Get, set, update, delete
// - Future logic can be handled here
// - Can use req.params.id or something else later

export const getSentences = (req, res) => {
	res.status(200).json({ message: "Get sentences for user" });
};

export const setSentence = (req, res) => {
	res.status(200).json({ message: "Create a new sentence" });
};

export const updateSentence = (req, res) => {
	res.status(200).json({ message: "Update sentence" });
};

export const deleteSentence = (req, res) => {
	res.status(200).json({ message: "Delete sentence" });
};
v;
