//
const { request } = require("express");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.getAllUsers = (req, res) => {
    userModel.find()
        .then(users => res.json(users))
        //arroja el error de la infraestructura
        .catch(err => res.status(500).json({ error: err.message }))
};

exports.createUser = (req, res) => {
    //estrucuturacion de objetos permite extraer valores de un objeto y asignarlo a las variables en una linea de codigo
    const { username, email, password } = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            return res.status(500).json({ error: err.message });
        } else {
            const newUser = new userModel({ username, email, password: hash });
            newUser.save()
                .then(() => res.status(201).json({ success: 'created' }))
                .catch(err => res.status(500).json({ message: 'An error has ocurred', err }));
        }
    });
};

exports.updateUser = (request, response) => {
    const { id } = request.params;
    const { username, email, password } = request.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            return res.status(500).json({ error: err.message });
        } else {
            userModel.findByIdAndUpdate(id, { username, email, password }, { new: true })
                .then(updatedUser => {
                    if (!updaitbashtedUser) throw new Error(`User with id ${id} not found`);
                    response.status(200).json(updatedUser);
                })
                .catch(err => response.status(500).json({ message: 'An error has ocurred', err }));
        }
    });
}

exports.deleteUser = (request, response) => {
    const { id } = request.params;

    userModel.findByIdAndDelete(id)
        .then(updatedUser => {
            if (!updatedUser) throw new Error(`User with id ${id} not found`);
            response.status(200).json({ message: 'user deleted' });
        })
        .catch(err => response.status(500).json({ message: 'An error has ocurred', err }));
};