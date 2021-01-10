const { Router } = require('express')
const router = Router()

const { getUsuarios } = require('../controllers/usuarios.controllers')

router.route('/')
    .get(getUsuarios)
    .post()
    .delete()

router.route('/:id')
    .get()
    .post()


module.exports = router;