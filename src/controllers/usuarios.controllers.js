const usuariosController = {}

usuariosController.getUsuarios = (req, res) => res.json({
    message: 'usuarios'
})

usuariosController.getUsuario = (req, res) => res.json({
    message: 'usuario'
})

usuariosController.createUsuario = (req, res) => res.json({
    message: 'crear'
})

usuariosController.updateUsuario = (req, res) => res.json({
    message: 'actualizado'
})

usuariosController.deleteUsuario = (req, res) => res.json({
    message: 'eliminado'
})

module.exports = usuariosController