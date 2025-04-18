const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log("MongoDB Connected");
	} catch (err) {
		console.error(err.message);
	}
};

module.exports = connectDB;
