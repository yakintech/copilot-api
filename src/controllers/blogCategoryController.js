const BlogCategory = require("../models/BlogCategory");

// Create a new blog category
exports.createBlogCategory = async (req, res) => {
    try {
        const blogCategory = new BlogCategory(req.body);
        await blogCategory.save();
        res.status(201).send(blogCategory);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Read all blog categories
exports.getAllBlogCategories = async (req, res) => {
    try {
        const blogCategories = await BlogCategory.find({});
        res.status(200).send(blogCategories);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Read a single blog category by ID
exports.getBlogCategoryById = async (req, res) => {
    try {
        const blogCategory = await BlogCategory.findById(req.params.id);
        if (!blogCategory) {
            return res.status(404).send();
        }
        res.status(200).send(blogCategory);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a blog category by ID
exports.updateBlogCategoryById = async (req, res) => {
    try {
        const blogCategory = await BlogCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!blogCategory) {
            return res.status(404).send();
        }
        res.status(200).send(blogCategory);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a blog category by ID
exports.deleteBlogCategoryById = async (req, res) => {
    try {
        const blogCategory = await BlogCategory.findByIdAndDelete(req.params.id);
        if (!blogCategory) {
            return res.status(404).send();
        }
        res.status(200).send(blogCategory);
    } catch (error) {
        res.status(500).send(error);
    }
};