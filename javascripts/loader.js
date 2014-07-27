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
		var app = app || {};
		app.MessageView = Backbone.View.extend({
			events:{
				'click .grid': 'playRound'
			}, 
			playRound: function(){
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
    		 
			}
		});
});

