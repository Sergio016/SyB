from fastapi import FastAPI
import psycopg2
from pydantic import BaseModel

# Crea la instancia de FastAPI
app = FastAPI()

# Conexión a la base de datos PostgreSQL
def get_db_connection():
    conn = psycopg2.connect(
        dbname="syb", 
        user="postgres", 
        password="1234", 
        host="db",   
        port="5432"
    )
    return conn

# Modelo de datos para enviar como respuesta
class Trabajador(BaseModel):
    id: int
    nombre: str
    puesto: str
    fecha_registro: str

# Ruta para obtener todos los trabajadores
@app.get("/api/trabajadores", response_model=list[Trabajador])
def get_trabajadores():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT id, nombre, puesto, fecha_registro FROM trabajadores')
    rows = cursor.fetchall()
    conn.close()

    trabajadores = [Trabajador(id=row[0], nombre=row[1], puesto=row[2], fecha_registro=row[3]) for row in rows]
    return trabajadores


