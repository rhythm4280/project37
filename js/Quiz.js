class Quiz {
  constructor(){}

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

  play(){
    input.hide();
    title.hide();
    button.hide();
    
    background("yelow");
    //Write code to hide question

   //Write code to change background color

    //Write code to display the heading of Quiz.For exmple display the heading as "Result of the Quiz"
    
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("blue");
      textSize(20);
      text("*NOTE:Contestant who answered correct are highlited in green colour!",130,230)
      //Write code to make contestants understand the result of quiz by displaying the heading 

      for(var plr in allContestants){
        debugger;
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    }
  }
}
