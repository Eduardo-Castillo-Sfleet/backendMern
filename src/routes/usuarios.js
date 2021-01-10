const { Router } = require('express')
const router = Router()

router.route('/')
    .get((req, res) => res.json({message: 'get', status: 'ok'}))
    .post()
    .delete()

router.route('/:id')
    .get()
    .post()


module.exports = router;