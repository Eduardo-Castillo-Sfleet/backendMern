const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = model('Usuario', usuarioSchema)