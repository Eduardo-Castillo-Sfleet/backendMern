const { Schema, model } = require('mongoose')

const pagoSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: String,
    usuario: {
        type: String,
        required: true
    },
    monto: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = model('Pago', pagoSchema)