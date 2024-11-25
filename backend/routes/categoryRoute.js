const express = require('express');
const {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryController');
const authorize = require('../middlewares/authorize');
// const upload = require('../middlewares/multer');
const upload = require('../middlewares/multer');


const router = express.Router();

// Route to create a new category
router.post('/createCategory', authorize.auth, authorize.admin, upload.single('image'), createCategory);

// Route to get all categories
router.get('/getAllCategory', getCategories);

// Route to update a category by ID
router.put('/updateCategory/:id', authorize.auth, authorize.admin, updateCategory);

// Route to delete a category by ID
router.delete('/deleteCategory/:id', authorize.auth, authorize.admin, deleteCategory);


module.exports = router;




// http://localhost:5000/api/categories/createCategory
//http://localhost:5000/api/categories/updateCategory
//http://localhost:5000/api/categories/deleteCategory
//http://localhost:5000/api/categories/getAllCategory
