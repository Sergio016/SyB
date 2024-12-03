-- Crear la tabla de trabajadores
CREATE TABLE IF NOT EXISTS trabajadores (
    id SERIAL PRIMARY KEY,          -- ID único generado automáticamente
    nombre VARCHAR(100) NOT NULL,   -- Nombre del usuario, obligatorio
    puesto VARCHAR(100) NOT NULL, -- Puesto del trabajador, obligatorio
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de registro automática
);

CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,            -- ID único para cada producto
    nombre VARCHAR(100) NOT NULL,     -- Nombre del producto
    descripcion TEXT,                 -- Descripción detallada del producto
    precio DECIMAL(10, 2),            -- Precio del producto
    stock INT,                        -- Cantidad de producto disponible
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de registro automática
);

CREATE TABLE IF NOT EXISTS promociones (
    id SERIAL PRIMARY KEY,            -- ID único para cada promoción
    producto_id INT REFERENCES productos(id), -- Relacionado con el producto
    descripcion TEXT,                 -- Descripción de la promoción
    descuento DECIMAL(5, 2),          -- Descuento en porcentaje
    fecha_inicio TIMESTAMP,           -- Fecha de inicio de la promoción
    fecha_fin TIMESTAMP               -- Fecha de fin de la promoción
);

CREATE TABLE IF NOT EXISTS localizacion (
    id SERIAL PRIMARY KEY,            -- ID único para cada localización
    nombre_sucursal VARCHAR(100) NOT NULL, -- Nombre de la sucursal
    direccion VARCHAR(255) NOT NULL,     -- Dirección de la sucursal
    ciudad VARCHAR(100),                  -- Ciudad donde se encuentra la sucursal
    pais VARCHAR(100),                   -- País de la sucursal            
    fecha_apertura TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de apertura
);

CREATE TABLE IF NOT EXISTS recetas (
    id SERIAL PRIMARY KEY,            -- ID único para cada receta
    titulo VARCHAR(255) NOT NULL,     -- Título de la receta
    descripcion TEXT,                 -- Descripción o contenido de la receta
    autor_id INT REFERENCES trabajadores(id), -- Referencia al miembro del equipo que escribió la receta
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de publicación
);

CREATE TABLE IF NOT EXISTS blog (
    id SERIAL PRIMARY KEY,            -- ID único para cada artículo
    titulo VARCHAR(255) NOT NULL,     -- Título del artículo
    contenido TEXT,                   -- Contenido del artículo
    autor_id INT REFERENCES trabajadores(id), -- Autor del artículo (referencia a la tabla equipo)
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de publicación
);

CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,            -- ID único para cada cliente
    nombre VARCHAR(100) NOT NULL,     -- Nombre del cliente
    email VARCHAR(100) UNIQUE NOT NULL, -- Email único
    telefono VARCHAR(15),             -- Teléfono del cliente
    direccion VARCHAR(255),           -- Dirección del cliente
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de registro
);

CREATE TABLE IF NOT EXISTS contacto (
    id SERIAL PRIMARY KEY,            -- ID único para cada mensaje de contacto
    cliente_id INT REFERENCES clientes(id), -- Cliente que envió el mensaje
    mensaje TEXT,                     -- Mensaje enviado por el cliente
    fecha_contacto TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de contacto
);

