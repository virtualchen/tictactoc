require.config({
	baseUrl: 'bower_components/',
	paths: {
		　　　　　　"jquery": 'jquery/dist/jquery',
		"underscore" :'underscore/underscore',
		"backbone": 'backbone/backbone'
	　　　　},
	shim:{
		'backbone' :{
			deps:['jquery','underscore']
		}
	}

});


require([
	'jquery',
	'backbone',
	'javascripts/main.js'		
	] , function(){
		console.log('load');
		var app = app || {};
		app.GameView = Backbone.View.extend({

			el: '#gameBoard',
			events:{
				'click .grid': 'playRound'
			}, 

			playRound: function(e){
				 //console.log('click');
				 var grid = $(e.currentTarget);
				 //console.log(this);
				 //console.log(grid);
				 var gridIndex = grid.data('grid-no');
	    		 console.log(gridIndex);

	    		 if(gameModule.gridCount === 0 ){
	    		 	gameModule.gameinfo[gridIndex] = 1;
	    		 	grid.html('X');
	    		 	gameModule.gridCount ++ ;
	    		 }else{
	    		 	//console.log(gridIndex);
	    		 	if(gameModule.gameinfo[gridIndex] == 0){
	    		 		gameModule.gridCount ++;
	    		 		if(gameModule.gridCount %2 == 0){
	    		 			grid.html('O');
	    		 			gameModule.gameinfo[gridIndex] =-1;
	    		 		}else{
	    		 			grid.html('X');
	    		 			gameModule.gameinfo[gridIndex] = 1;
	    		 		}
	    		 		
	    		 	}
	    		 	gameModule.checkWin();

	    		 }
			 
    		}
    	});
    	app.gameView = new app.GameView();
	});

