
const router = require('express').Router()

router.use('/students', require('./students'))
router.use('/teachers', require('./teachers'))
router.use('/subjects', require('./subjects'))

module.exports = router
