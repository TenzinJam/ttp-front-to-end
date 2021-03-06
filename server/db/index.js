const db = require('./database')
const Student = require('./students')
const Teacher = require('./teachers')
const Subject = require('./subjects')

// associations


Teacher.belongsToMany(Student, {through: 'Teacher_Student'})
Student.belongsToMany(Teacher, {through: 'Teacher_Student'})

Subject.hasMany(Teacher)
Teacher.belongsTo(Subject)


// User.belongsToMany(Challenge, {through: FriendChallenge})
// Challenge.belongsToMany(User, {through: FriendChallenge})

module.exports = {
  db,
  Student,
  Teacher,
  Subject
}
