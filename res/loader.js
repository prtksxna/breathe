browser.storage.local.get( [ 'bgcolor', 'textcolor', 'messages' ] ).then( function ( r ) {
	var  m = r.messages.split( '\n' );
	m = m[ Math.floor( Math.random() * m.length ) ];

	document.querySelector( 'h1' ).textContent = m;
	document.body.style.backgroundColor = r.bgcolor;
	document.body.style.color = r.textcolor;
	console.log( r );
} );
