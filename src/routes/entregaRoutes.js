const express = require("express");
const router = express.Router();
const entregaController = require("../controllers/entregaController"); 
const apiKeyMiddleware = require("../config/apiKey"); 

router.use(apiKeyMiddleware);
router.get("/", entregaController.getAllEntregas); 
router.get("/:id", entregaController.getEntregaById); 
router.post("/", entregaController.createEntrega); 
router.put("/:id", entregaController.updateEntrega); 
router.delete("/:id", entregaController.deleteEntrega); 

module.exports = router;