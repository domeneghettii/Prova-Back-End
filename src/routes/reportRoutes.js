const express = require("express");
const router = express.Router();
const { exportPedidoPDF } = require("../controllers/reportController");

router.get("/export-pedidos", exportPedidoPDF);

module.exports = router;