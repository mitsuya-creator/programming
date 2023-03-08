const {averageExams, isStudentPassExam} = require('../gradeCalculation.js');
test('it should return exact average', () => {
  const listValueExams = [100,80,80,100];
  expect(averageExams(listValueExams)).toEqual(90);
});