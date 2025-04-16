const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());

app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// MongoDB connection
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on port ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.error("MongoDB connection error:", error.message);
	});
