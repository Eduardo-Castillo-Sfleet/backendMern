const pagosController = {}

const Pago = require('../models/Pago')

pagosController.getPagos = async (req, res) => {
    const pagos = await Pago.find()
    res.json(pagos)
}

pagosController.getPago = (req, res) => res.json({
    nombre: 'Pago idividual'
})

pagosController.createPago = async (req, res) => {
    const { titulo, contenido, usuario, monto } = req.body
    console.log(titulo, contenido, usuario, monto)
    console.log(req)
    res.json({message: 'creado'})
}

pagosController.deletePago  = (req, res) => res.json({
    message: 'eliminado'
})

pagosController.updatePago  = (req, res) => res.json({
    message: 'actualizado'
})

module.exports = pagosController