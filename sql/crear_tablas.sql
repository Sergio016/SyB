-- Crear la tabla de trabajadores
CREATE TABLE IF NOT EXISTS trabajadores (
    id SERIAL PRIMARY KEY,          
    nombre VARCHAR(100) NOT NULL UNIQUE, -- Añadir UNIQUE a nombre para que sea único
    puesto VARCHAR(100) NOT NULL, 
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- Crear la tabla de productos
CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,            
    nombre VARCHAR(100) NOT NULL UNIQUE, -- Agregar la restricción UNIQUE
    descripcion TEXT,                 
    precio DECIMAL(10, 2),            
    stock INT,                        
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- Crear la tabla de promociones
CREATE TABLE IF NOT EXISTS promociones (
    id SERIAL PRIMARY KEY,            
    producto_nombre VARCHAR(100) REFERENCES productos(nombre),  -- Referencia al nombre del producto
    descripcion TEXT,                 
    descuento DECIMAL(5, 2),          
    fecha_inicio TIMESTAMP,           
    fecha_fin TIMESTAMP               
);

-- Crear la tabla de localizacion
CREATE TABLE IF NOT EXISTS localizacion (
    id SERIAL PRIMARY KEY,            
    nombre_sucursal VARCHAR(100) NOT NULL, 
    direccion VARCHAR(255) NOT NULL,     
    ciudad VARCHAR(100),                  
    pais VARCHAR(100),                   
    fecha_apertura TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- Crear la tabla de blog
CREATE TABLE IF NOT EXISTS blog (
    id SERIAL PRIMARY KEY,            
    titulo VARCHAR(255) NOT NULL,     
    contenido TEXT,                   
    autor_nombre VARCHAR(100) REFERENCES trabajadores(nombre), -- Cambiado de autor_id a autor_nombre
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- Crear la tabla de clientes
CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,            
    nombre VARCHAR(100) NOT NULL,     
    email VARCHAR(100) UNIQUE NOT NULL, 
    telefono VARCHAR(15),             
    direccion VARCHAR(255),           
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- Insertar datos en la tabla de trabajadores
INSERT INTO trabajadores (nombre, puesto) VALUES 
('Carlos Pérez', 'Gerente General'),
('María Gómez', 'Cajera'),
('Luis Fernández', 'Almacén'),
('Ana Martínez', 'Encargada de Ventas');

-- Insertar datos en la tabla de productos
INSERT INTO productos (nombre, descripcion, precio, stock) VALUES 
('Manzana Roja', 'Manzanas frescas de alta calidad', 1.50, 100),
('Leche Entera', 'Litro de leche entera pasteurizada', 0.99, 200),
('Pan Integral', 'Pan integral saludable y nutritivo', 2.20, 150),
('Arroz Blanco', 'Arroz blanco de grano largo', 1.80, 300);

-- Insertar datos en la tabla de promociones
INSERT INTO promociones (producto_nombre, descripcion, descuento, fecha_inicio, fecha_fin) VALUES 
('Manzana Roja', 'Descuento del 10% en manzanas rojas', 10.00, '2024-06-01', '2024-06-10'),
('Leche Entera', 'Oferta especial en leche: 15% de descuento', 15.00, '2024-06-05', '2024-06-15');

-- Insertar datos en la tabla de localizacion
INSERT INTO localizacion (nombre_sucursal, direccion, ciudad, pais) VALUES 
('Sucursal Centro', 'Calle Principal 123', 'Ciudad de México', 'México'),
('Sucursal Norte', 'Avenida Reforma 456', 'Monterrey', 'México'),
('Sucursal Sur', 'Carretera Nacional 789', 'Guadalajara', 'México');

-- Insertar datos en la tabla de blog
INSERT INTO blog (titulo, contenido, autor_nombre) VALUES 
('Cómo mantener una dieta saludable', 'Descubre consejos y productos frescos para tu dieta.', 'Carlos Pérez'),
('Beneficios del pan integral', 'El pan integral aporta fibra y mejora la digestión.', 'Ana Martínez');

-- Insertar datos en la tabla de clientes
INSERT INTO clientes (nombre, email, telefono, direccion) VALUES 
('Juan López', 'juan.lopez@example.com', '555-1234', 'Calle Falsa 123'),
('Laura Sánchez', 'laura.sanchez@example.com', '555-5678', 'Avenida Siempre Viva 456'),
('Pedro Ramírez', 'pedro.ramirez@example.com', '555-9876', 'Bulevar Principal 789');
