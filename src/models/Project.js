const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
	},
	liveUrl: {
		type: String,
	},
	github: {
		type: String,
	},
	tags: {
		type: Array,
		default: [],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Project", projectSchema);
