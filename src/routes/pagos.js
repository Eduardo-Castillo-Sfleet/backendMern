const { Router } = require('express')
const router = Router()

const { getPagos, getPago, createPago, deletePago, updatePago } = require('../controllers/pagos.controllers')

router.route('/')
    .get(getPagos)
    .post(createPago)
    

router.route('/:id')
    .get(getPago)
    .put(updatePago)
    .delete(deletePago)


module.exports = router;