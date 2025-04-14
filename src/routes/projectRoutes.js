const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const protect = require("../middleware/authMiddleware");

// Get all projects
router.get("/", async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: "Failed to fetch projects" });
	}
});

// Get a single Project
router.get("/:id", async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		if (!project)
			res.status(404).json({ error: "Project with the Given ID not found" });
		res.json(project);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// create a Project
router.post("/", protect, async (req, res) => {
	const { title, description, tags } = req.body;
	try {
		const project = new Project({
			title,
			description,
			tags,
		});
		await project.save();
		res.json(project);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
