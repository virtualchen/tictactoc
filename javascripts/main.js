define(['jquery'] , function ($) {
    return function () {};
});

var gameinfo = [0,0,0,0,0,0,0,0,0];
var gridCount = 0;
var count = 0;
var gameInit = function(){
	
}

var checkWin = function(){
	var board = [];
		 board[0] = gameinfo[0] + gameinfo[3] + gameinfo[6];
		 board[1] = gameinfo[1] + gameinfo[4] + gameinfo[7];
		 board[2] = gameinfo[2] + gameinfo[5] + gameinfo[8];
		 board[3] = gameinfo[4] + gameinfo[6] + gameinfo[8];
		 board[4] = gameinfo[3] + gameinfo[4] + gameinfo[5];
		 board[5] = gameinfo[0] + gameinfo[1] + gameinfo[2];
		 board[6] = gameinfo[0] + gameinfo[4] + gameinfo[8];
		 board[7] = gameinfo[2] + gameinfo[4] + gameinfo[6];
		 console.log(gameinfo);
	board.forEach(function(o){
		//console.log(o);
		if(o=== 3 || o === -3 || gridCount ===9){
			alert("game over");
			resetGame();
		}
	});

};

var resetGame = function(){
	gameinfo = [0,0,0,0,0,0,0,0,0];
	gridCount = 0;
	$(".grid").empty();
	
}


$().ready(function(){
	gameInit();
	var obj = $(".grid");
	obj.each(function(){
		$(this).click(function(){
			 var grid = $(this);
			 //console.log(this);
    		 var gridIndex = grid.data('grid-no');
    		 //console.log(gridIndex);
    		 if(gridCount === 0 ){
    		 	gameinfo[gridIndex] = 1;
    		 	grid.html('X');
    		 	gridCount ++ ;
    		 }else{
    		 	console.log(gridIndex);
    		 	if(gameinfo[gridIndex] == 0){
    		 		gridCount ++;
    		 		if(gridCount %2 == 0){
    		 			grid.html('O');
    		 			gameinfo[gridIndex] =-1;
    		 		}else{
    		 			grid.html('X');
    		 			gameinfo[gridIndex] = 1;
    		 		}
    		 		
    		 	}
    		 	checkWin();

    		 }
    		 
		});
	});
});