const expres = require('express');
const router = expres.Router();

const blogCategoryController = require('../controllers/blogCategoryController');

router.post('/blogCategories', blogCategoryController.createBlogCategory);
router.get('/blogCategories', blogCategoryController.getAllBlogCategories);
router.get('/blogCategories/:id', blogCategoryController.getBlogCategoryById);
router.put('/blogCategories/:id', blogCategoryController.updateBlogCategoryById);
router.delete('/blogCategories/:id', blogCategoryController.deleteBlogCategoryById);

module.exports = router;