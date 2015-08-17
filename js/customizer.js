/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );
	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					'clip': 'auto',
					'color': to,
					'position': 'relative'
				} );
			}
		} );
	} );
	//Update site accent color in real time...
	wp.customize( 'accent_color', function( value ) {
		value.bind( function( newval ) {
			$('body a').css('color', newval );
			$('.site-title a:hover').css('color', newval );
			$('input[type="submit"]').css('background-color', newval );
			$('.pushy a:hover').css('background-color', newval );
			$('section.page-title h1::after').css('background-color', newval );
			$('button').css('background-color', newval );
			$('.button').css('background-color', newval );
			$('.pushy-active .site-overlay').css('background-color', newval );
		} );
	} );
} )( jQuery );
