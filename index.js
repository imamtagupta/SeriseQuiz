readline = require('readline-sync');
const log = console.log;
score = 0

function setup(){
  ip = readline.question('Have you watched Money heist(y/n)? ')
  if(ip.toLowerCase() == 'y'){
    log('Wohoo! Lets see how much you know about it.')
  }
  else if(ip.toLowerCase() == 'n'){
    log('Ok:< lets just guess what it will be like?')
  }
  else{
    setup()
  }
}


object = [
  {
    'question':'The Professor’s first name is eventually revealed. What is it(Andres/Sergio)? ' ,
    'answer':'sergio'
  },
  {
    'question':'The show is actually called La Casa de Papel, which literally translates to what?(The Paper House/The House of Outcasts)? ',
    'answer':'the paper house'
  },
  {
    'question':'Whose glasses contained a bug(Raquel/Angel)? ',
    'answer':'angel'
  }
]

function quiz(score, question, answer){
  ip = readline.question(question)
  if(ip.toLowerCase() == answer){
    log('right!')
    score++;
    log('score : ',score)
  }else{
    log('wrong!')
    log('score : ',score)
  }
  return score
}

log('---------- Money Heist Quiz -----------')
input = readline.question("What's your name? ")
log('Hi '+input+', Welcome!')
setup()
for(var i=0; i<object.length; i++){
  score = quiz(score, object[i].question, object[i].answer)
}
log("your're final score is "+score+'/3')
