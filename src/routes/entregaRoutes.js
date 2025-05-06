const express = require("express");
const router = express.Router();
const entregaController = require("../controllers/entregaController"); 

router.get("/", entregaController.getAllEntregas); 
router.get("/:id", entregaController.getEntregaById); 
router.post("/", entregaController.createEntrega); 
router.put("/:id", entregaController.updateEntrega); 
router.delete("/:id", entregaController.deleteEntrega); 

module.exports = router;