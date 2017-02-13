var browser = browser || chrome;

function saveOptions( e ) {
	e.preventDefault();
	browser.storage.local.set( {
		bgcolor: document.querySelector( '#bgcolor' ).value,
		textcolor: document.querySelector( '#textcolor' ).value,
		messages: document.querySelector( '#messages' ).value,
		textsize: document.querySelector( '#textsize' ).value,
		font: document.querySelector( '#font' ).value
	} );
};

function restoreOptions() {

	function setCurrentChoice( result ) {
		document.querySelector( '#bgcolor' ).value = result.bgcolor || '#ffffff';
		document.querySelector( '#textcolor' ).value = result.textcolor || '#b3b3b3';
		document.querySelector( '#messages' ).value = result.messages || 'Breathe';
		document.querySelector( '#textsize' ).value = result.textsize || '30';
		document.querySelector( '#font' ).value = result.font || '';
	};

	function onError( error ) {
		// Do something
	};

	var getting = browser.storage.local.get( [
		'bgcolor',
		'textcolor',
		'messages',
		'textsize',
		'font'
	] );
	getting.then( setCurrentChoice, onError );
}

document.addEventListener( 'DOMContentLoaded', restoreOptions );
document.querySelector( 'form' ).addEventListener( 'submit', saveOptions );
