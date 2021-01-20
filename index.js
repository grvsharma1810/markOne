var readlineSync = require('readline-sync');
const chalk = require('chalk');

var name = readlineSync.question("What's you name? ")
console.log("Welcome %s to Gaurav's quiz. Let's see how much you know me.",name)

var score = 0;
var wrongAnswers = 0;

function play(question, answer){
  var flag = true;
  while(flag){
    console.log();
    var usersAns = readlineSync.question(question);
    if(usersAns.toLowerCase() == answer.toLowerCase()){
      score++;
      console.log(chalk.green("YAY Right Answer"));    
      console.log("Your Current Score is :",score);
      flag = false;
    }
    else{
      wrongAnswers++;
      console.log(chalk.red("OOOPs! Wrong Answer"));
      var ans = readlineSync.question("Wanna Try Again ? Y/N   ");
      if(ans.toLowerCase() != 'y'){
        flag = false;
      }
    }
  }  
}

var questions = [
  {
    question: "Which is my favourite movie ?  ",
    answer: "Iron Man"
  },
  {
    question : "Where do I live ?  ",
    answer : "Singrauli"
  },
  {
    question : "Which type of music I mostly listen to ?  ",
    answer : "Hip-Hop music"
  }
]

for(var i=0;i<questions.length;i++){
  play(questions[i].question, questions[i].answer);
}

console.log("Total Wrong Answers : ",wrongAnswers);
console.log("Final Score is : ",score);  