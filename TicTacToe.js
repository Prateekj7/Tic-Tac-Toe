var p1score= [];
var p2score = [];
var count_click = 0;

function checkWinP1(){

  var player1rows = [];
  var player1cols = [];


  for(i=0;i<p1score.length; i++){
    var rowsColumns1 = [];
    rowsColumns1 = p1score[i].toString().split('.');
    player1rows.push(rowsColumns1[0]);
    player1cols.push(rowsColumns1[1]);
  }


  var player1Winner = checkForRowColumn(player1rows);
  if(!player1Winner)
    player1Winner = checkForRowColumn(player1cols);
  if(!player1Winner)
    player1Winner = checkForDiagonal(p1score);

  if(player1Winner){
    var play1 = document.getElementById("txtPlayer1Name").value;
    alert(play1+ ' wins click play again to resume');
    document.getElementById("divResult").style.display = "block";
    document.getElementById("divwinner").innerHTML = play1;
    return true;
  }
  return false;
}

function checkWinP2()
{
  var player2rows = [];
  var player2cols = [];
  for(i=0;i<p2score.length; i++)
  {
    var rowsColumns2 = [];
    rowsColumns2 = p2score[i].toString().split('.');
    player2rows.push(rowsColumns2[0]);
    player2cols.push(rowsColumns2[1]);
  }

  var player2Winner = checkForRowColumn(player2rows);
  if(!player2Winner)
    player2Winner = checkForRowColumn(player2cols);
  if(!player2Winner)
    player2Winner = checkForDiagonal(p2score);

  if(player2Winner)
  {
    var play2 = document.getElementById("txtPlayer2Name").value;
    alert(play2 +'wins click play again to resume');
    document.getElementById("divResult").style.display = "block";
    document.getElementById("divwinner").innerHTML = play2;
    return true;
  }
  return false;
}

function checkForRowColumn(list)
{
  if(list.length>2)
  {
    var one = 0;
    var two = 0;
    var three = 0;
    for(i=0;i<list.length;i++)
    {
      if(list[i]=='1')
        one++;
      if(list[i]=='2')
        two++;
      if(list[i]=='3')
        three++;
    }
    if(one==3 || two==3 || three==3)
      return true;
  return false;
  }

return false;
}

function checkForDiagonal(playerScore){
  if(playerScore.length >2)
  {
    if(playerScore.indexOf('1.1')>-1 && playerScore.indexOf('2.2')>-1 && playerScore.indexOf('3.3')>-1)
      return true;
    if(playerScore.indexOf('1.3')>-1 && playerScore.indexOf('2.2')>-1 &&     playerScore.indexOf('3.1')>-1)
      return true;
  return false;

  }
}

var arr = document.getElementsByClassName("col");
var counter = 0;
for(var i=0; i<arr.length; i++)
{
   arr[i].onclick = function()
   {
     if(this.getAttribute("checked")!="true"){
       this.setAttribute("checked","true");
       if(counter%2==0)
       {
          this.innerHTML="X";
          p1score.push(this.id);
         count_click++;
         if(checkWinP1())
          count_click = 10;
       }
       else
       {
         this.innerHTML = "O";
        p2score.push(this.id);
        count_click++;
        if(checkWinP2())
          count_click = 10;
        }

        counter++;
    }
  console.log(this.id);
  }
}
