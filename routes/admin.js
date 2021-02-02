const express = require("express");
const rootDir = require('../util/path');
const path = require('path')

const router = express.Router();

const products = []

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post("/product", (req, res, next) => {
  products.push({ title: req.body.title })
  res.status(304).redirect("/shop");
});

exports.routes = router
exports.products = products
