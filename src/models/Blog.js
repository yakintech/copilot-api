const mongoose = require('mongoose');

//schema fields: title, content, category, tags

const blogSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    category: { type: String },
    tags: { type: Array, default: [] }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
