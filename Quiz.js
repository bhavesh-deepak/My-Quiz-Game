class Quiz {
  constructor(){

    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
  hide(){
    this.question.hide();
     this.contestant.hide();
   }
  play(){
    var display_Answers = 230;
    //write code here to hide question elements
   
    
    //write code to change the background color here
    changeBackground()
      this.background("yellow");
     this.background.change("result of quiz")
    
  
    //write code to show a heading for showing the result of Quiz
    text("Resut of quiz",200,200);
    textSize(30);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo(); 

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){debugger
      var display_Answers = 230;
      fill("blue");
    textSize(20);
   text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
   }
  
    //write code to add a note here
    text(" right ans with green and wrong with red.",130,260 )
    //write code to highlight contest who answered correctly
   for(var plr in allContestant){
   var correctAns = "2";
   if(correctAns === allContestants[plr].answer)
    fill("green");
    else
   fill("red");
   display_Answers+=30;
    textSize(20); 
   text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers) 
  }
   
 
 
  }

}
