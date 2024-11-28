const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cambiar si tienes un usuario diferente
    password: '', // Cambiar si tienes contraseña
    database: 'bd_tienda_vecino'
});

// Verificar conexión
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos.');
});

// Endpoint para obtener productos
app.get('/api/productos', (req, res) => {
    const query = `SELECT codigoproducto AS id, descripcion AS nombre, foto AS imagen, precio, puntos FROM producto`;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener productos:', err);
            res.status(500).send('Error al obtener productos');
        } else {
            res.json(results);
        }
    });
});

// Iniciar servidor
const PORT = 3306;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.listen(3306, () => {
    console.log("Servidor corriendo en el puerto 3306");
});

app.listen(5000, () => {
    console.log("Servidor corriendo en el puerto 5000");
});
