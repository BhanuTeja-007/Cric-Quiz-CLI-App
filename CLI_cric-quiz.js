var rs = require('readline-sync');

const chalk = require('chalk');
const log = console.log;

var username = rs.question(chalk.yellow('Please Enter your name : '));

log(chalk.blueBright.bold.italic('\nHey '+chalk.red(username)+(' Welcome to CRIC-QUIZ\n')));

var batscore =0;
var bowlscore =0;
var highestscore = 8;

var batquestions = [{question :"How many triple centuries did Sehwag score in Test Cricket ?"},
{question :"Whats the common highest score of Indian captains in ODI's ?"},
{question :"Which player remained 1st for long in ICC Rankings across all 3 formats?"},
{question :"Who was the New Zealand cricketer who played a crucial knock agianst SA in the CWC 2015 ?"}
];

var bowlquestions = [{question:"Which Indian Player wore Jersey Number 64 ?"},
{question :"Who won the most number of World Cup titles ?"},
{question :"Who was the West Indian bastmen that got 3 lives in the 2016 WT20 SemiFinal against India ?"},
{question:"Which Australian Player wore Jersey Number 58 ?"}];

var batoptions = [{a:'1',b:'2',c:'3',d:'4',ans:'b'},
{a:'194',b:'186',c:'183',d:'178',ans:'c'},
{a:'AB de Villiers',b:'Steve Smith',c:'Virat Kohli',d:'Michael Hussey',ans:'c'},
{a:'Kane Williamson',b:'Tom Latham',c:'Ross Taylor',d:'Grant Elliot',ans:'d'},
];

var bowloptions = [{a:'Irfan Phatan',b:'Ashish Nehra',c:'Sreeshanth',d:'Shardul Thakur',ans:'b'},
{a:'England',b:'Australia',c:'India',d:'West Indies',ans:'b'},
{a:'Lendl Simmons',b:'Marlon Samuels',c:'Andre Russell',d:'Kieron Pollard',ans:'a'},
{a:'Ricky Ponting',b:'Shane Watson',c:'Mitchell Starc',d:'Bret Lee',ans:'d'}];

function batting(question,answer,options)
{
  log(chalk.rgb(255,215,0)('\n'+question));
  log(chalk.rgb(50,205,50)('(a)'+options.a));
  log(chalk.rgb(50,205,50)('(b)'+options.b));
  log(chalk.rgb(50,205,50)('(c)'+options.c));
  log(chalk.rgb(50,205,50)('(d)'+options.d));

  var user_answer = rs.question(chalk.rgb(218,165,32)('\nSelect an option : '));
  if(user_answer.toLowerCase() === answer.toLowerCase())
  {
      batscore = batscore+4;
      log(chalk.rgb(240,230,140)('\nWent like a tracer bullet!...'));
      log(chalk.blue('Score :'+chalk.red(batscore)));
  }

  else
  {
      log(chalk.redBright('\nRight Up in the blockhole!...'));
      log(chalk.blue('Score :'+chalk.red(batscore)));
  }
}

function bowling(question,answer,options)
{
  log(chalk.rgb(255,215,0)('\n'+question));
   log(chalk.rgb(50,205,50)('(a)'+options.a));
  log(chalk.rgb(50,205,50)('(b)'+options.b));
  log(chalk.rgb(50,205,50)('(c)'+options.c));
  log(chalk.rgb(50,205,50)('(d)'+options.d));

   var user_answer = rs.question(chalk.rgb(218,165,32)('\nSelect an option : '));
  if(user_answer.toLowerCase() === answer.toLowerCase())
  {
      bowlscore = bowlscore+1;
      log(chalk.rgb(240,230,140)('\nWell executed yorker, gem of a deilvery!...'));
      log(chalk.blue('Score :'+chalk.red(bowlscore)));
  }

  else
  {
      log(chalk.redBright('\nJust missing the stumps!...'));
      log(chalk.blue('Score :'+chalk.red(bowlscore)));
  }
}


log(chalk.rgb(255,99,71)('What would you like to do first? : \n(a) Bat \n(b) Bowl '));
var choice = rs.question(chalk.green('Your choice : '));

if(choice === 'a' || choice === 'A')
{
log(chalk.rgb(240,230,140)('\nTeam '+username+' has chose to Bat first\n' ));

log(chalk.rgb(34,139,34)('-------------------RULES (for batting) ---------------------'));
log(chalk.rgb(30,144,255)('* For every Perfect Crikcet shot(correct answer) ,you get 4 points'));
log(chalk.rgb(30,144,255)('* For every miss hit(wrong answer) ,you loose no points')); 
log(chalk.rgb(34,139,34)('-------------------------------------------------------------'));

var i =0;

for(i=0;i<batquestions.length;i++)
{
    batting(batquestions[i].question,batoptions[i].ans,batoptions[i]);
    log(chalk.rgb(255,228,225)('-------------------------------------------------------------'));
}
    log(chalk.rgb(112,128,144)('\nScore after 1st Innings : '+batscore));
    log(chalk.rgb(255,228,225)('-------------------------------------------------------------'));

log(chalk.rgb(34,139,34)('\n-------------------RULES (for bowling) ---------------------'));
log(chalk.rgb(30,144,255)('* For every wicket (correct answer) ,you get 1 point'));
log(chalk.rgb(30,144,255)('* For every ball that missed the wicket(wrong answer) ,you loose no points')); 
log(chalk.rgb(34,139,34)('-------------------------------------------------------------'));


for(i=0;i<bowlquestions.length;i++)
{
    bowling(bowlquestions[i].question,bowloptions[i].ans,bowloptions[i]);
     log(chalk.rgb(255,228,225)('-------------------------------------------------------------'));
}
    log(chalk.rgb(112,128,144)('Score after 2nd Innings : '+bowlscore));
    log(chalk.rgb(255,228,225)('-------------------------------------------------------------'));
}

else if(choice === 'b' || choice === 'B')
{
  log(chalk.rgb(240,230,140)('\nTeam '+username+' has chose to Bowl first\n'));

log(chalk.rgb(34,139,34)('-------------------RULES (for bowling) ---------------------'));
log(chalk.rgb(30,144,255)('* For every wicket (correct answer) ,you get 1 point'));
log(chalk.rgb(30,144,255)('* For every ball that missed the wicket(wrong answer) ,you loose no points')); 
log(chalk.rgb(34,139,34)('-------------------------------------------------------------'));

var i =0;

for(i=0;i<bowlquestions.length;i++)
{
    bowling(bowlquestions[i].question,bowloptions[i].ans,bowloptions[i]);
     log(chalk.rgb(255,228,225)('-------------------------------------------------------------'));
}
log(chalk.rgb(112,128,144)('Score after 1st Innings : '+bowlscore));
log(chalk.rgb(255,228,225)('-------------------------------------------------------------'));

log(chalk.rgb(34,139,34)('\n-------------------RULES (for batting) ---------------------'));
log(chalk.rgb(30,144,255)('* For every Perfect Crikcet shot(correct answer) ,you get 4 points'));
log(chalk.rgb(30,144,255)('* For every miss hit(wrong answer) ,you loose no points')); 
log(chalk.rgb(34,139,34)('-------------------------------------------------------------'));

for(i=0;i<batquestions.length;i++)
{
    batting(batquestions[i].question,batoptions[i].ans,batoptions[i]);
     log(chalk.rgb(255,228,225)('-------------------------------------------------------------'));
}
log(chalk.rgb(112,128,144)('Score after 2nd Innings : '+batscore));
log(chalk.rgb(255,228,225)('-------------------------------------------------------------'));


}

const score = batscore+bowlscore;
log(chalk.rgb(255,105,180)('Final Score: '+score));
log(chalk.rgb(255,228,225)('-------------------------------------------------------------'));

if(score>highestscore)
{
log(chalk.rgb(210,105,30)('\nYou have beaten the highest score!'));
log(chalk.rgb(210,105,30)('New highest score is :'+score));
}


