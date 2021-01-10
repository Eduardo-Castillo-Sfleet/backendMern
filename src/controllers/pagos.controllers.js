const pagosController = {}

pagosController.getPagos = (req, res) => res.json({
    nombre: 'Armando'
})

pagosController.getPago = (req, res) => res.json({
    nombre: 'Pago idividual'
})

pagosController.createPago = (req, res) => res.json({
    message: 'creado'
})

pagosController.deletePago  = (req, res) => res.json({
    message: 'eliminado'
})

pagosController.updatePago  = (req, res) => res.json({
    message: 'actualizado'
})

module.exports = pagosController