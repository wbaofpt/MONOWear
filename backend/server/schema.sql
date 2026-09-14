CREATE DATABASE IF NOT EXISTS mono_wear CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE mono_wear;
CREATE TABLE IF NOT EXISTS products (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(180) NOT NULL, category VARCHAR(100) NOT NULL, price INT UNSIGNED NOT NULL, image VARCHAR(500) NOT NULL, badge VARCHAR(40) NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS orders (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, customer_name VARCHAR(120) NOT NULL, phone VARCHAR(30) NOT NULL, address VARCHAR(255) NOT NULL, total INT UNSIGNED NOT NULL, status VARCHAR(30) DEFAULT 'pending', created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS messages (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(120) NOT NULL, email VARCHAR(180) NOT NULL, message TEXT NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS subscribers (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, email VARCHAR(180) UNIQUE NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS users (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(120) NOT NULL, email VARCHAR(180) UNIQUE NOT NULL, password_hash VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE IF NOT EXISTS reviews (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, product_id INT UNSIGNED NOT NULL, customer_name VARCHAR(120) NOT NULL, rating TINYINT UNSIGNED NOT NULL, title VARCHAR(180) NOT NULL, body TEXT NOT NULL, verified BOOLEAN DEFAULT FALSE, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, CONSTRAINT fk_reviews_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE, CONSTRAINT chk_reviews_rating CHECK (rating BETWEEN 1 AND 5)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT IGNORE INTO products (id,name,category,price,image,badge) VALUES
(1,'Áo khoác Linen Form Boxy','Nữ / Áo khoác',890000,'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85','New'),
(2,'Quần suông Essential','Nam / Quần',690000,'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85','Bestseller'),
(3,'Sơ mi Cotton Signature','Unisex / Sơ mi',590000,'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=85',NULL),
(4,'Chân váy Midi Pleated','Nữ / Chân váy',760000,'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=85',NULL),
(5,'Blazer Wool Blend','Nam / Áo khoác',1290000,'https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=900&q=85',NULL),
(6,'Túi Mini Shoulder','Phụ kiện',450000,'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',NULL);
