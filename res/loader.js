var browser = browser || chrome;

browser.storage.local.get( [ 'bgcolor', 'textcolor', 'messages' ], function ( r ) {
	var  m = r.messages || 'Breathe';

	m = m.split( '\n' );
	m = m[ Math.floor( Math.random() * m.length ) ];

	document.querySelector( 'h1' ).textContent = m;
	document.body.style.backgroundColor = r.bgcolor || '#fff';
	document.body.style.color = r.textcolor || '#b3b3b3';
} );
