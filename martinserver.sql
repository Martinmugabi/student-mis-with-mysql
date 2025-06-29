-- Create database
CREATE DATABASE mulago_hospital;
USE mulago_hospital;

-- Users table for login
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role ENUM('admin', 'staff') NOT NULL
);

-- Patients table
CREATE TABLE patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(100),
    contact VARCHAR(20),
    email VARCHAR(50),
    disease VARCHAR(100),
    doctor_description TEXT,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Staff table
CREATE TABLE staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    address VARCHAR(100),
    specialization VARCHAR(100),
    doctor_description TEXT,
    hire_date DATE
);

-- Accounts table
CREATE TABLE accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    patient_first_name VARCHAR(50),
    patient_last_name VARCHAR(50),
    amount_paid DECIMAL(10,2),
    disease VARCHAR(100),
    payment_date DATE,
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id)
);

-- Insert sample admin user
INSERT INTO users (username, password, role) VALUES ('admin', 'admin123', 'admin'); 