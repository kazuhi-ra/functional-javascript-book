import _ from 'lodash'

let enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
]

let totalGraders = 0
let totalStudentsFound = 0

for (let i = 0; i < enrollment.length; i++) {
  let student = enrollment[i]
  if (student !== null) {
    if (student.enrolled > 1) {
      totalGraders += student.grade
      totalStudentsFound++
    }
  }
}


const avarage = totalGraders / totalStudentsFound
console.log(avarage)

const result = _.chain(enrollment)
  .filter(student => student.enrolled > 1)
  .map('grade')
  .mean()
  .value()

  console.log(result)
