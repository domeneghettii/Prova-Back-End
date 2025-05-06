const PDFDocument = require("pdfkit");

const pedidoModel = require("../models/pedidoModel");

const entregaModel = require("../models/entregaModel");

const exportPedidoPDF = async (req, res) => {
    try {
        console.log("Iniciando geração do PDF..."); // Log para início do processo
        const pedidos = await pedidoModel.getPedidos();
        const entregas = await entregaModel.getEntregas();

        console.log("Pedidos recuperados:", pedidos); // Log dos pedidos recuperados
        console.log("Entregas recuperadas:", entregas); // Log das entregas recuperadas

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "attachment; filename=pedidos.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        // Título
        doc.fontSize(30).text("Relatório de Pedidos", { align: "center" });
        doc.moveDown();

        // Cabeçalho
        doc.fontSize(18).text("id | name | endereco | telefone | produto", { underline: true });
        doc.moveDown(0.5);
                `${pedido.id} | ${pedido.name} | ${pedido.endereco} | ${pedido.telefone} | ${pedido.produto}`
            );
        });

        doc.fontSize(18).text("______________________________", { underline: true });
        doc.moveDown(0.5);

        // Título
        doc.fontSize(30).text("Relatório de Entregas", { align: "center" });
        doc.moveDown();

        // Cabeçalho
        doc.fontSize(18).text("id | name | endereco | telefone | produto", { underline: true });
        doc.moveDown(0.5);

        // Adicionar dados das entregas
        entregas.forEach((entrega) => {
            doc.text(
                `${entrega.id} | ${entrega.name} | ${entrega.endereco} | ${entrega.telefone} | ${entrega.produto}`
            );
        });

        doc.end();
    } catch (error) {
        console.error("Erro ao exportar PDF:", error);
        res.status(500).json({ message: "Erro ao exportar PDF." });
    }
};

module.exports = { exportPedidoPDF };