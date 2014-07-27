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

			playRound: function(){
				console.log('click');
			 
    		}
    	});
    	app.gameView = new app.GameView();
	});

