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
	modalTitle: 'Click App',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/cursos/',
    	url: 'cursos.html',
    	name: 'cursos',
  		},
		
		{
		path: '/contenido/',
    	url: 'contenido.html',
    	name: 'contenido',
  		},
		
		{
		path: '/guion/',
    	url: 'guion.html',
    	name: 'guion',
  		},
		
		{
		path: '/direccion/',
    	url: 'direccion.html',
    	name: 'direccion',
  		},
		
		{
		path: '/produccion/',
    	url: 'produccion.html',
    	name: 'produccion',
  		},
		
		{
		path: '/sonido/',
    	url: 'sonido.html',
    	name: 'sonido',
  		},
		
		{
		path: '/camaras/',
    	url: 'camaras.html',
    	name: 'camaras',
  		},
		
		
		
		
		
	],
	dialog: {
		title: 'Click App',
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



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('¡ Bienvenidos a Click App !');
    }
	
});



$$('#btnAddCart').on('click', function (e) {
	e.preventDefault();
	console.log('btn');
	
	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Tu orden ha sido enviada.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





