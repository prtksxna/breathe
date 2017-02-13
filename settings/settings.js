var browser = browser || chrome;

// Restore the saved options
document.addEventListener( 'DOMContentLoaded', function () {
	browser.storage.local.get( [
		'bgcolor',
		'textcolor',
		'messages',
		'textsize',
		'font',
		'bold'
	], function ( r ) {
		document.querySelector( '#bgcolor' ).value = r.bgcolor || '#ffffff';
		document.querySelector( '#textcolor' ).value = r.textcolor || '#b3b3b3';
		document.querySelector( '#messages' ).value = r.messages || 'Breathe';
		document.querySelector( '#textsize' ).value = r.textsize || '30';
		document.querySelector( '#font' ).value = r.font || '';
		document.querySelector( '#bold' ).checked = ( r.bold === undefined ) ? true : r.bold;
	} );
} );

// Save options
document.querySelector( 'form' ).addEventListener( 'submit', function ( e ) {
	e.preventDefault();
	browser.storage.local.set( {
		bgcolor: document.querySelector( '#bgcolor' ).value,
		textcolor: document.querySelector( '#textcolor' ).value,
		messages: document.querySelector( '#messages' ).value.trim(),
		textsize: document.querySelector( '#textsize' ).value,
		font: document.querySelector( '#font' ).value,
		bold: document.querySelector( '#bold' ).checked
	} );
} );
