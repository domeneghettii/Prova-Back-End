CREATE DATABASE pedidos_entregas;

\c pedidos_entregas;

CREATE TABLE entregas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    produto VARCHAR(100) NOT NULL

);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    quantidade INTEGER NOT NULL,
    valor NUMERIC(10, 2) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    entrega_id INTEGER REFERENCES entregas(id) ON DELETE SET NULL
);

INSERT INTO entregas (name, endereco, telefone, produto) VALUES 
    ('Entregador 1', 'Rua AD, 016', '1234567890', 'Notebook Dell'),
    ('Entregador 2', 'Rua BD, 383', '0987654321', 'Smartphone Samsung'),
    ('Entregador 3', 'Rua CA, 921', '1122334455', 'Fone de Ouvido Bluetooth');

INSERT INTO pedidos (name, quantidade, valor, endereco, entrega_id) VALUES 
    ('Pedido 1', 2, 25.99, 'Rua Jardim Nova Europa, 101', 1),
    ('Pedido 2', 1, 47.50, 'Rua Mercidio Pazelli, 02', 2),
    ('Pedido 3', 3, 50.90, 'Rua Santos, 190', 3);
