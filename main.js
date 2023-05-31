const express = require("express");
//traer todos los metodos y clases de express - alamcenada dentro de la constante de la linea 1
const app = express();

//creación del puerto
const port = 3000;

//importar o llamar la clase de userrote
const userRoutes = require("./routes/userRoutes");


//middleware es una funcion que se ejeuta entre el cliente y el servidor en una aplicación
app.use(express.json());
//Creando un ruta para la ejecucion para que la API acceda a la informacion
app.use('/users', userRoutes);

app.listen(port,() => console.log("El servidor se ejecuta http://localhost:" + port));

