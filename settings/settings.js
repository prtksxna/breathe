function saveOptions( e ) {
	e.preventDefault();
	browser.storage.local.set( {
		bgcolor: document.querySelector( '#bgcolor' ).value,
		textcolor: document.querySelector( '#textcolor' ).value,
		messages: document.querySelector( '#messages' ).value
	} );
};

function restoreOptions() {

	function setCurrentChoice( result ) {
		document.querySelector( '#bgcolor' ).value = result.bgcolor || '#ffffff';
		document.querySelector( '#textcolor' ).value = result.textcolor || '#b3b3b3';
		document.querySelector( '#messages' ).value = result.messages || 'Breathe';
	};

	function onError( error ) {
		console.log( `Error: ${error}` );
	};

	var getting = browser.storage.local.get( [ 'bgcolor', 'textcolor', 'messages' ] );
	getting.then( setCurrentChoice, onError );
}

document.addEventListener( 'DOMContentLoaded', restoreOptions );
document.querySelector( 'form' ).addEventListener( 'submit', saveOptions );
