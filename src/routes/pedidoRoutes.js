const express = require("express");
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");
const upload = require("../config/upload.js"); // importe a upload.js


router.post("/pedidos", upload.single("photo"), pedidoController.createPedido); // Rota para criar um pedido com upload de imagem

router.get("/", pedidoController.getAllPedidos);
router.get("/:id", pedidoController.getPedido);
router.post("/", pedidoController.createPedido);
router.put("/:id", pedidoController.updatePedido);
router.delete("/:id", pedidoController.deletePedido);

module.exports = router;