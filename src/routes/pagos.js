const { Router } = require('express')
const router = Router()

const { getPagos, createPago, deletePago, updatePago } = require('../controllers/pagos.controllers')

router.route('/')
    .get(getPagos)
    .post(createPago)
    .put(updatePago)
    .delete(deletePago)

module.exports = router;