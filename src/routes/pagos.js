const { Router } = require('express')
const router = Router()

const { getPagos } = require('../controllers/pagos.controllers')

router.route('/').get(getPagos)

module.exports = router;