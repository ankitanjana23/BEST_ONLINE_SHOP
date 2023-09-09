const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  getBestsellers,
  adminGetProducts,
  adminDeleteProduct,
  adminCreateProduct,
  adminUpdateProduct,
  adminUpload,
  adminDeleteProductImage,
} = require("../controllers/productController");

const {verifyIsLoggedIn,verifyIsAdmin} = require("../middleware/verifyAuthToken")

router.get("/", getProducts);
router.get("/category/:categoryName/search/:searchQuery", getProducts);
router.get("/category/:categoryName", getProducts);
router.get("/search/:searchQuery", getProducts);
router.get("/bestsellers", getBestsellers);
router.get("/get-one/:id", getProductById);

// admin routes
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.post("/admin", adminCreateProduct);
router.get("/admin", adminGetProducts);
router.put("/admin/:id", adminUpdateProduct);
router.delete("/admin/:id", adminDeleteProduct);
router.post("/admin/upload", adminUpload);
router.delete("/admin/image/:imagePath/:productId", adminDeleteProductImage);

module.exports = router;
