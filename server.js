require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const pedidoRoutes = require("./src/routes/pedidoRoutes");
const entregaRoutes = require("./src/routes/entregaRoutes");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/entregas", entregaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`💕👍 Servidor rodando em http://localhost:${PORT}`);
});

