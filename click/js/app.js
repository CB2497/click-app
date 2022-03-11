// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'RunGran Shop',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/contenido/',
    	url: 'contenido.html',
    	name: 'contenido',
  		},
		{
		path: '/offers/',
    	url: 'offers.html',
    	name: 'offers',
  		}
	],
	dialog: {
		title: 'RunGran Shop',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});