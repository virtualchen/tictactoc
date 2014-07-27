require.config({
	baseUrl: 'bower_components/',
	paths: {
　　　　　　"jquery": 'jquery/dist/jquery',
		  "underscore" :'underscore/underscore',
		  "backbone": 'backbone/backbone'
　　　　}
});


require([
		'underscore',
		'backbone',
		'jquery',
		'javascripts/main.js'		
	] , function(){
		console.log('loaded');
	});


