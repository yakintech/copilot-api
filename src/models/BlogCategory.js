const mongoose = require('mongoose');

const blogCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }
});

const BlogCategory = mongoose.model('BlogCategory', blogCategorySchema);

module.exports = BlogCategory;