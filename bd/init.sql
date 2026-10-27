CREATE DATABASE IF NOT EXISTS loja;

USE loja;

CREATE TABLE
    IF NOT EXISTS Produto (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        preco DECIMAL(10, 2) NOT NULL
    );

INSERT INTO
    Produto (nome, preco)
VALUES
    ('Mouse Gamer', 199.90),
    ('Teclado Mecânico', 349.99);