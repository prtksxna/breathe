var browser = browser || chrome; // eslint-disable-line no-undef

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

		// Trigger a change to load preview
		document.querySelector( '#bgcolor' ).dispatchEvent( new Event( 'change' ) );
	} );
} );

// Listen to changes, save settings, and update preview
var preview = document.querySelector( '#preview' ),
	h1 = preview.querySelector( 'h1' ),
	settingsInput = document.querySelectorAll( 'input, textarea' );

/* jshint loopfunc: true */
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
		if (  font !== undefined && font !== '' ) {
			h1.style.fontFamily = font;
		} else {
			h1.style.fontFamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif';
		}

		if ( bold === undefined || bold === false ) {
			h1.style.fontWeight = 400;
		} else {
			h1.style.fontWeight = 600;
		}

		h1.textContent = textcontent;
		h1.style.fontSize = textsize + 'px' || '30px';
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
/* jshint loopfunc: false */
