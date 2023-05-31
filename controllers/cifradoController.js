const bcrypt = require(bcrypt);

//cifrado de contraseña
const saltRounds = 10;
const plainPassword = "password123";
bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
    if (err) {
        throw err
    } else {
        console.log("Se creo el hash de la constraseña", hash);
    }
})

//autenticacion con el hash
const hashedPassword = '$2b$10$';
const loginPassword = 'password123';
bcrypt.compare(loginPassword, hashedPassword, function (err, result) {
    if (err) {
        throw err;
    } else if (result) {
        console.log("la contraseña es valida")
    } else {
        console.log("la contraseña es invalida")
    }

})