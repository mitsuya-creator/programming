// MAKE FUNCTION averageExams
class myError{
  constructor(message){
    this.message = message ;
  }
}

function averageExams(valueExams){
  const numValidtaion = valueExams.every(examValue => typeof examValue === 'number');
  if(!numValidtaion) throw new  myError('Please input number only');
  const sumValues = valueExams.reduce((acumulator,currentValue) => acumulator+currentValue);
  const resultAverage = sumValues / valueExams.length;
  return resultAverage;
}

function isStudentPassExam(scores,name){
  const minScoreAverage = 75;
  try{
    const scoreAverage = averageExams(scores);
    if(scoreAverage > minScoreAverage){
      console.log(`${name} pass the exams`);
      return true;
    }else{
      console.log(`${name} is not pass the exams`);
      return false;
    }
  }catch(e){
    return e.message
  }
}

export { averageExams,isStudentPassExam };