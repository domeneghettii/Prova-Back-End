const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");
const upload = require("../config/upload.js");

router.post("/pedidos", upload.single("photo"), pedidoController.createPedido); 

router.get("/", pedidoController.getAllPedidos);
router.get("/:id", pedidoController.getPedido);
router.post("/", upload.single("photo"), pedidoController.createPedido);
router.put("/:id", pedidoController.updatePedido);
router.delete("/:id", pedidoController.deletePedido);

module.exports = router;