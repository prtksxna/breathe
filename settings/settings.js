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

// Listen to changes, save settings, and update preview
var preview = document.querySelector( '#preview' ),
	settingsInput = document.querySelectorAll( 'input, textarea' );

for ( let input of settingsInput ) {
	input.addEventListener( 'change', function ( e ) {
		e.preventDefault();

		var font = document.querySelector( '#font' ).value,
			messages = document.querySelector( '#messages' ).value.trim(),
			textcontent = messages.split( '\n' )[ 0 ],
			textsize = document.querySelector( '#textsize' ).value,
			textcolor = document.querySelector( '#textcolor' ).value,
			bgcolor = document.querySelector( '#bgcolor' ).value,
			bold = document.querySelector( '#bold' ).checked;

		// Update preview
		if (  font !== '' ) {
			preview.style.fontFamily = font;
		}

		if ( bold === false ) {
			preview.style.fontWeight = 400;
		}

		preview.textContent = textcontent;
		preview.style.fontSize = textsize + 'px' || '30px';
		preview.style.backgroundColor = bgcolor || '#fff';
		preview.style.color = textcolor || '#b3b3b3';


		// Save settings
		browser.storage.local.set( {
			bgcolor: document.querySelector( '#bgcolor' ).value,
			textcolor: document.querySelector( '#textcolor' ).value,
			messages: document.querySelector( '#messages' ).value.trim(),
			textsize: document.querySelector( '#textsize' ).value,
			font: document.querySelector( '#font' ).value,
			bold: document.querySelector( '#bold' ).checked
		} );
	} );
}
