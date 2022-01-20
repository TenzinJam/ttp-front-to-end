const router = require('express').Router()
const { Teacher } = require('../db')


router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.findAll()
    res.json(teachers)
  } catch (error) {
    res.send(error.message)
  }
})

router.get('/:id', async(req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id)
    res.send(teacher)
  } catch (error) {
    res.send(error.message)
  }
})

router.post('/', async(req, res) => {
  try {
    const newTeacher = await Teacher.create(req.body)
    res.json(newTeacher)
  } catch (error) {
    res.send(error.message)
  }
})

module.exports = router
