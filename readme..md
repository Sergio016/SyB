1. Desarrollo del sitio web

Requisitos:
Frontend: HTML5, CSS3 y JavaScript.
✓ Servidor Web: Se utilizará Nginx o Apache.
✓ Base de Datos: MySQL o PostgreSQL para almacenar datos relacionados
con la empresa (usuarios (clientes), proveedores, ofertas, productos,
etc.).

Estructura:
Inicio (index.html): Presentación de la empresa.
✓ Productos y Promociones/Ofertas: Información detallada de los
productos y ofertas que ofrece la empresa.
✓ Localización: situación geográfica de las tiendas y sucursales
✓ Equipo: Perfiles de los doctores y especialistas.
✓ Recetas y Blog de consejos: Blog con consejos y artículos de interés
relacionados con la empresa para sus clientes.
✓ Atención al cliente y Clientes registrados: Un formulario para que los
usuarios puedan contactar a la empresa, y registrarse para recibir
ofertas/promociones.

2. Configuracion del servidor web

Se instalará Nginx o Apache como servidor web para servir la página
estática y gestionar las solicitudes de los usuarios.
✓ El servidor web será configurado para comunicarse con el contenedor de
la base de datos.
✓ Se configurarán volúmenes para manejar el contenido estático de la
página y facilitar la actualización sin tener que reconstruir la imagen
completa.

2.2 Base de datos

Se elegirá entre MySQL o PostgreSQL como sistema de gestión de base
de datos.
✓ Se creará una tabla para almacenar los datos de contacto que los
usuarios envíen a través del formulario de la web.

3. Contenerizacion

✓ Creación del Dockerfile para Nginx o Apache.
✓ Creación del Dockerfile para la Base de Datos: MySQL o PostgreSQL.
✓ Realizar pruebas locales de su correcto funcionamiento

4. Despliegue con AWS

Crear una instancia de EC2.
✓ Configurar el Servidor EC2
✓ Subir el proyecto a EC2
✓ Iniciar los contenedores en EC2

5. Monitorizacion del sistema en produccion

Herramientas:
✓ Prometheus y Grafana para monitorizar métricas como el uso de CPU,
memoria y red de los contenedores.
✓ ELK Stack (Elasticsearch, Logstash, Kibana) para capturar y visualizar
logs del servidor web y la base de datos.
▪ Requisitos:
✓ Instalar Prometheus y Grafana en EC2
✓ Configurar Dashboards
✓ Monitoreo de Logs.
✓ Creación del Dockerfile para la Base de Datos: MySQL o PostgreSQL.
✓ Realizar pruebas locales de su correcto funcionamiento
