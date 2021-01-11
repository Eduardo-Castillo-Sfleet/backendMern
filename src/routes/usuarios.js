const { Router } = require('express')
const router = Router()

const { getUsuarios, getUsuario, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuarios.controllers')

router.route('/')
    .get(getUsuarios)
    .post(createUsuario)
   

router.route('/:id')
    .get(getUsuario)
    .put(updateUsuario)
    .delete(deleteUsuario)

module.exports = router;