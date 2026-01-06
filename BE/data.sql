CREATE DATABASE cyber_security;
USE cyber_security;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (email, password) VALUES
('user01@gmail.com', '$2b$10$hashuser01'),
('user02@gmail.com', '$2b$10$hashuser02'),
('user03@gmail.com', '$2b$10$hashuser03'),
('user04@gmail.com', '$2b$10$hashuser04'),
('user05@gmail.com', '$2b$10$hashuser05'),
('user06@gmail.com', '$2b$10$hashuser06'),
('user07@gmail.com', '$2b$10$hashuser07'),
('user08@gmail.com', '$2b$10$hashuser08'),
('user09@gmail.com', '$2b$10$hashuser09'),
('user10@gmail.com', '$2b$10$hashuser10'),

('user11@gmail.com', '$2b$10$hashuser11'),
('user12@gmail.com', '$2b$10$hashuser12'),
('user13@gmail.com', '$2b$10$hashuser13'),
('user14@gmail.com', '$2b$10$hashuser14'),
('user15@gmail.com', '$2b$10$hashuser15'),
('user16@gmail.com', '$2b$10$hashuser16'),
('user17@gmail.com', '$2b$10$hashuser17'),
('user18@gmail.com', '$2b$10$hashuser18'),
('user19@gmail.com', '$2b$10$hashuser19'),
('user20@gmail.com', '$2b$10$hashuser20'),

('user21@gmail.com', '$2b$10$hashuser21'),
('user22@gmail.com', '$2b$10$hashuser22'),
('user23@gmail.com', '$2b$10$hashuser23'),
('user24@gmail.com', '$2b$10$hashuser24'),
('user25@gmail.com', '$2b$10$hashuser25'),
('user26@gmail.com', '$2b$10$hashuser26'),
('user27@gmail.com', '$2b$10$hashuser27'),
('user28@gmail.com', '$2b$10$hashuser28'),
('user29@gmail.com', '$2b$10$hashuser29'),
('user30@gmail.com', '$2b$10$hashuser30'),

('user31@gmail.com', '$2b$10$hashuser31'),
('user32@gmail.com', '$2b$10$hashuser32'),
('user33@gmail.com', '$2b$10$hashuser33'),
('user34@gmail.com', '$2b$10$hashuser34'),
('user35@gmail.com', '$2b$10$hashuser35'),
('user36@gmail.com', '$2b$10$hashuser36'),
('user37@gmail.com', '$2b$10$hashuser37'),
('user38@gmail.com', '$2b$10$hashuser38'),
('user39@gmail.com', '$2b$10$hashuser39'),
('user40@gmail.com', '$2b$10$hashuser40'),

('user41@gmail.com', '$2b$10$hashuser41'),
('user42@gmail.com', '$2b$10$hashuser42'),
('user43@gmail.com', '$2b$10$hashuser43'),
('user44@gmail.com', '$2b$10$hashuser44'),
('user45@gmail.com', '$2b$10$hashuser45'),
('user46@gmail.com', '$2b$10$hashuser46'),
('user47@gmail.com', '$2b$10$hashuser47'),
('user48@gmail.com', '$2b$10$hashuser48'),
('user49@gmail.com', '$2b$10$hashuser49'),
('user50@gmail.com', '$2b$10$hashuser50');
