# Usamos una imagen base de Node.js
FROM node:16

# Crear un directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto donde tu aplicación va a correr
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
