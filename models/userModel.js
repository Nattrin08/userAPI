const mongoose = require("mongoose");

const Uri = "mongodb+srv://nattrincon08:Natali8a2023@firstbd.4w987ju.mongodb.net/"

//conexión a la base de datos
mongoose.connect(Uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

//Creacion del esquema (que es una clase) - los datos solicitados
const UserSchema = new mongoose.Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
});

//model es un metodo -
module.exports = mongoose.model('Users', UserSchema);
