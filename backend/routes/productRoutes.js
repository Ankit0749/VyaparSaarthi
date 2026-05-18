const express = require("express");

const router = express.Router();

const {
  getProducts,
  getSingleProduct,
} = require("../controllers/productController");
const {
applyAIUpdate
}=require(
"../controllers/productController"
);
router.get(
  "/store/:storeId",
  getProducts
);

router.get("/:id", getSingleProduct);

router.put("/:id/ai-update", applyAIUpdate);

module.exports = router;