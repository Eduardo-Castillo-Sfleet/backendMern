const { Router } = require('express')
const router = Router()

const { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuarios.controllers')

router.route('/')
    .get(getUsuarios)
    .post(createUsuario)
    .put(updateUsuario)
    .delete(deleteUsuario)

router.route('/:id')
    .get(getUsuario)


module.exports = router;