const router = require('express').Router()
const { Subject } = require('../db')


router.get('/', async (req, res) => {
  try {
    const subjects = await Subject.findAll()
    res.json(subjects)
  } catch (error) {
    res.send(error.message)
  }
})

router.get('/:id', async(req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id)
    res.send(subject)
  } catch (error) {
    res.send(error.message)
  }
})

router.post('/', async(req, res) => {
  try {
    const newSubject = await Subject.create(req.body)
    res.json(newSubject)
  } catch (error) {
    res.send(error.message)
  }
})

module.exports = router
