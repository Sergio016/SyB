import psycopg2
from psycopg2 import sql

# Definir parámetros de conexión
host = "db"  # Dirección del servidor 
port = "5432"       # Puerto por defecto de PostgreSQL
dbname = "syb"  # Nombre de la base de datos
user = "postgres"   # Usuario de PostgreSQL
password = '1234'


# Crear una conexión a la base de datos
try:
    connection = psycopg2.connect(
        host=host,
        port=port,
        dbname=dbname,
        user=user,
        password=password
    )

    # Crear un cursor para ejecutar comandos SQL
    cursor = connection.cursor()

    # Ejecutar el archivo SQL para crear las tablas
    with open("crear_tablas.sql", "r") as file:
        sql_script = file.read()
        cursor.execute(sql.SQL(sql_script))

    # Confirmar que los cambios fueron realizados
    connection.commit()

    print("¡Tablas creadas correctamente!")

except Exception as e:
    print(f"Error al conectar con PostgreSQL: {e}")

finally:
    # Cerrar cursor y conexión
    if cursor:
        cursor.close()
    if connection:
        connection.close()
