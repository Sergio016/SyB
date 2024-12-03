# Usa una imagen base con Python
FROM python:3.10

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo requirements.txt para instalar dependencias
COPY requirements.txt /app/requirements.txt

# Instalar las dependencias de la aplicación
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente de la aplicación
COPY src/ /app/

# Exponer el puerto 8000 para FastAPI
EXPOSE 8000

# Comando para ejecutar la app de FastAPI
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8000"]
