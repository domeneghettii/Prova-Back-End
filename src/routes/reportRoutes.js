const express = require('express');
const router = express.Router();
const reportController = require("../controllers/reportController");
const apiKeyMiddleware = require("../config/apiKey"); // 🔐
router.use(apiKeyMiddleware); // 🔒 Protege todas as rotas

router.get("/", reportController.exportPedidoPDF); // Exporta o PDF com os pedidos e entregas

module.exports = router;