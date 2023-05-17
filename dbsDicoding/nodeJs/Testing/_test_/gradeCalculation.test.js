//GROUPING UNITEST AND INTEGRATED TEST
const {averageExams, isStudentPassExam} = require('../gradeCalculation.js');

describe('UNITEST AND INTEGRATED TEST gradeCalculation', () => {
  test('it should return exact average', () => {
    const listValueExams = [100,80,80,100];
    expect(averageExams(listValueExams)).toEqual(90);
  });
  
  /**
   * INTEGRATED TEST
   * */
  test('it should return pass Exam True',() =>{
    const scoreMitsuya = [100,80,80,95];
    expect(isStudentPassExam(scoreMitsuya,"Mitsuya")).toEqual(true);
  });
  
  test('it should return pass Exam False',() =>{
    const scoreBudi = [8,7,9,78];
    expect(isStudentPassExam(scoreBudi,"Budi")).toEqual(false);
  });
  
})