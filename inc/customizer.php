<?php
/**
 * Zircone Theme Customizer
 *
 * @package Zircone
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function zircone_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	$wp_customize->add_section( 'zircone_logo_section' , array(
	    'title'       => __( 'Logo', 'zircone' ),
	    'priority'    => 40,
	    'description' => __('Upload a logo to replace the default site name and description in the header', 'zircone'),
	) );
	$wp_customize->add_section( 'zircone_typography_section' , array(
	    'title'       => __( 'Typography', 'zircone' ),
	    'priority'    => 45,
	    'description' => __('Change default typography settings', 'zircone'),
	) );

	// Accent Setting
	$wp_customize->add_setting( 'accent_color', 
		array( 
			'default' => '#3498db',
			'sanitize_callback' => 'zircone_sanitize_text',
			'type' => 'theme_mod',
            'transport' => 'postMessage',
		)
	);
	$wp_customize->add_control( new WP_Customize_Color_Control( 
		$wp_customize, 
		'accent_color', 
		array(
	    	'label' => __( 'Accent Color', 'zircone' ),
	    	'section' => 'colors',
	    	'settings' => 'accent_color',
		) 
	) );

	//Logo Setting
	$wp_customize->add_setting( 
		'zircone_logo',
		array ( 
		  'default' => '',
    	  'sanitize_callback' => 'esc_url_raw'
    	)
	);
	$wp_customize->add_control( new WP_Customize_Image_Control( 
		$wp_customize, 
		'zircone_logo', 
		array(
	    	'label'    => __( 'Logo', 'zircone' ),
	    	'section'  => 'zircone_logo_section',
	    	'settings' => 'zircone_logo',
		) 
	) );

	//Typography Options
    $font_choices = 
        array(
			'Playfair Display:400,700,400italic&subset=latin,cyrillic,latin-ext' => 'Playfair Display',
			'Lato:400,100,300,300italic,100italic,700,400italic,900,700italic,900italic&subset=latin,latin-ext' => 'Lato',
			'Alegreya:400,400italic,700,700italic,900,900italic&subset=latin,latin-ext' => 'Alegreya',
			'Arvo:400,400italic,700,700italic' => 'Arvo',
			'Dancing Script:400,700' => 'Dancing Script',
			'Abril Fatface:400&subset=latin,latin-ext' => 'Abril Fatface',
			'Alice:400' => 'Alice',
			'Allerta:400' => 'Allerta',
			'Amatic SC:400,700&subset=latin,latin-ext' => 'Amatic SC',
			'Fauna One:400&subset=latin,latin-ext' => 'Fauna One',
			'Unica One:400&subset=latin,latin-ext' => 'Unica One',
			'Bitter:400,400italic,700&subset=latin,latin-ext' => 'Bitter',
			'Vollkorn:400,400italic,700,700italic' => 'Vollkorn',
			'Rokkitt:400,700' => 'Rokkitt',
			'Megrim:400' => 'Megrim',
			'Grand Hotel:400&subset=latin,latin-ext' => 'Grand Hotel',
			'Medula One:400' => 'Medula One',
			'Abel:400' => 'Abel',
			'Cantarell:400,400italic,700,700italic' => 'Cantarell',
			'Cedarville Cursive:400' => 'Cedarville Cursive', 
			'Coustard:400,900' => 'Coustard',
			'Leckerli One:400' => 'Leckerli One',
			'Josefin Sans:400,400italic,600,300italic,300,100italic,100,700italic,600italic,700&subset=latin,latin-ext' => 'Josefin Sans',
			'Dosis:400,800,700,600,500,300,200&subset=latin,latin-ext' => 'Dosis',
			'Droid Sans:400,700' => 'Droid Sans',
            'Droid Serif:400,400italic,700,700italic' => 'Droid Serif',
			'Roboto:400,100,100italic,300italic,300,400italic,500,500italic,700,700italic,900,900italic&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Roboto',
			'Roboto Condensed:400,300,300italic,400italic,700,700italic&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Roboto Condensed',
			'Roboto Slab:400,100,300,700&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Roboto Slab',
			'Open Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Open Sans',
			'Gentium Basic:400,400italic,700,700italic&subset=latin,latin-ext' => 'Gentium Basic',
			'Ovo:400' => 'Ovo',
			'Gloria Hallelujah:400' => 'Gloria Hallelujah',
			'EB Garamond:400&subset=latin,vietnamese,cyrillic-ext,latin-ext,cyrillic' => 'EB Garamond',
			'Muli:400,300,300italic,400italic' => 'Muli',
			'Neuton:400,200,300,400italic,700,800&subset=latin,latin-ext' => 'Neuton',
			'Vast Shadow:400' => 'Vast Shadow',
			'Oswald:400,300,700&subset=latin,latin-ext' => 'Oswald',
			'Quattrocento:400,700&subset=latin,latin-ext' => 'Quattrocento',
			'Fanwood Text:400,400italic' => 'Fanwood Text',
			'Quando:400&subset=latin,latin-ext' => 'Quando',
            'Judson:400,400italic,700&subset=latin,latin-ext,vietnamese' => 'Judson',
			'Monserrat:400,700' => 'Monserrat',
			'Exo:400,100,100italic,200,200italic,300,300italic,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&subset=latin,latin-ext' => 'Exo',
            'Open Sans Condensed:300,300italic,700&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Open Sans Condensed',
            'Alfa Slab One:400' => 'Alfa Slab One',
            'Domine:400,700&subset=latin,latin-ext' => 'Domine',
            'Lobster:400&subset=latin,latin-ext,vietnamese,cyrillic' => 'Lobster',
            'Lobster Two:400,400italic,700,700italic' => 'Lobster Two',
            'PT Sans:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic,cyrillic-ext' => 'PT Sans',
            'PT Serif:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic,cyrillic-ext' => 'PT Serif',
            'Noto Sans:400,400italic,700,700italic&subset=latin,greek-ext,devanagari,latin-ext,cyrillic-ext,cyrillic,vietnamese,greek' => 'Noto Sans',
            'Noto Serif:400,400italic,700,700italic&subset=latin,greek-ext,latin-ext,cyrillic-ext,cyrillic,vietnamese,greek' => 'Noto Serif',
            'Lora:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic' => 'Lora',
			'Nixie One:400' => 'Nixie One',
			'Libre Baskerville:400,400italic,700&subset=latin,latin-ext' => 'Libre Baskerville',
			'Julius Sans One:400&subset=latin,latin-ext' => 'Julius Sans One', 
            'Crimson Text:400,400italic,600,600italic,700,700italic' => 'Crimson Text',
            'Almendra Display:400&subset=latin,latin-ext' => 'Almendra Display',
			'Cardo:400,400italic,700&subset=latin,latin-ext,greek-ext,greek' => 'Cardo',
			'Philosopher:400,400italic,700,700italic&subset=latin,cyrillic' => 'Philosopher',
			'Cinzel Decorative:400,700,900' => 'Cinzel Decorative',
			'Amiri:400,400italic,700,700italic&subset=latin,arabic' => 'Amiri',
			'Yeseva One:400&subset=latin,latin-ext,cyrillic' => 'Yeseva One',
			'Gravitas One:400' => 'Gravitas One',
            'Merriweather Sans:400,300,300italic,400italic,700,700italic,800,800italic&subset=latin,latin-ext' => 'Merriweather Sans',
            'Merriweather:400,300,300italic,400italic,700,700italic,900,900italic&subset=latin,latin-ext,cyrillic' => 'Merriweather',
            'Raleway:400,100,200,500,600,300,700,800,900' => 'Raleway',
            'Fjalla One:400&subset=latin,latin-ext' => 'Fjalla One',
			'Karla:400,400italic,700,700italic&subset=latin,latin-ext' => 'Karla',
			'Old Standard TT:400,400italic,700' => 'Old Standard TT',
			'Ubuntu:400,300italic,300,400italic,500,700italic,700,500italic&subset=latin,latin-ext,cyrillic,cyrillic-ext,greek,greek-ext' => 'Ubuntu',
			'Yanone Kaffeesatz:400,200,300,700&subset=latin,latin-ext' => 'Yanone Kaffeesatz',
    	);

	$wp_customize->add_setting( 
		'zircone_headings_font',
		array ( 
		  'default' => 'Playfair Display:400,700,400italic&subset=latin,cyrillic,latin-ext',
    	  'sanitize_callback' => 'zircone_sanitize_fonts'
    	)
	);
	$wp_customize->add_setting( 
		'zircone_body_font',
		array ( 
		  'default' => 'Lato:400,100,300,300italic,100italic,700,400italic,900,700italic,900italic&subset=latin,latin-ext',
    	  'sanitize_callback' => 'zircone_sanitize_fonts'
    	)
	);
	$wp_customize->add_control(
		'zircone_headings_font',
		array(
			'settings'		=> 'zircone_headings_font',
			'section'		=> 'zircone_typography_section',
			'type'			=> 'select',
			'label'			=> __( 'Headings Font', 'zircone' ),
			'description'	=> __( 'Select the font to be used in the headings for your site.', 'zircone' ),
			'choices'		=> $font_choices
		)
	);
	$wp_customize->add_control(
		'zircone_body_font',
		array(
			'settings'		=> 'zircone_body_font',
			'section'		=> 'zircone_typography_section',
			'type'			=> 'select',
			'label'			=> __( 'Body Font', 'zircone' ),
			'description'	=> __( 'Select the font to be used in the body for your site.', 'zircone' ),
			'choices'		=> $font_choices
		)
	);
}
add_action( 'customize_register', 'zircone_customize_register' );

if (!function_exists('zircone_custom_style')) :
function zircone_custom_style( $selector, $style, $mod_name, $prefix='', $postfix='', $echo=true ) {
  $return = '';
  $mod = get_theme_mod($mod_name);
  if ( ! empty( $mod ) ) {
     $return = sprintf('%s { %s:%s; }',
        $selector,
        $style,
        $prefix.$mod.$postfix
     );
     if ( $echo ) {
        echo $return;
     }
  }
  return $return;
}
endif;

if (!function_exists('zircone_custom_style_output')) :
function zircone_custom_style_output() {
	$zircone_headings_font = esc_html(get_theme_mod('zircone_headings_font')); 	
	$zircone_body_font = esc_html(get_theme_mod('zircone_body_font'));	 
	$zircone_fonts = "";

	if ( $zircone_headings_font ) {
		$font_pieces = explode(":", $zircone_headings_font);
		$zircone_fonts .= "h1, h2, h3, h4, h5, h6, blockquote, q, .post-navigation .nav-previous span, .post-navigation .nav-next span, p.intro, h3.entry-title { font-family: {$font_pieces[0]}; }"."\n"; 
	}

	if ( $zircone_body_font ) {
		$font_pieces = explode(":", $zircone_body_font);
		$zircone_fonts .= "body, button, input, select, textarea, .site-title, .site-description { font-family: {$font_pieces[0]}; }"."\n";
	}

      ?>
      
	      <!-- Customizer CSS --> 
	      
	      <style type="text/css">
	      	<?php echo $zircone_fonts; ?>
	      	<?php zircone_custom_style('body a', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('.site-title a:hover', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('#main-menu a:hover, .menu-btn:hover', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('#main-menu li.has-dropdown:hover > a, #main-menu ul ul li.menu-item-has-children:hover > a', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('#main-menu ul ul li:hover', 'border-bottom-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('.entry-title a:hover', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('input[type="submit"]', 'background-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('.pushy a:hover', 'background-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('section.page-title h1::after', 'background-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('button', 'background-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('.button', 'background-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('.pushy-active .site-overlay', 'background-color', 'accent_color'); ?>
	      </style> 

	  <?php
}
endif;
add_action( 'wp_head' , 'zircone_custom_style_output' );

function zircone_live_preview() {
      wp_enqueue_script( 'zircone-themecustomizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '', true );
}
add_action( 'customize_preview_init' , 'zircone_live_preview' );

function zircone_sanitize_text( $str ) {
	return sanitize_text_field( $str );
} 

function zircone_sanitize_fonts( $str ) {
	$choices = 
        array(
			'Playfair Display:400,700,400italic&subset=latin,cyrillic,latin-ext' => 'Playfair Display',
			'Lato:400,100,300,300italic,100italic,700,400italic,900,700italic,900italic&subset=latin,latin-ext' => 'Lato',
			'Alegreya:400,400italic,700,700italic,900,900italic&subset=latin,latin-ext' => 'Alegreya',
			'Arvo:400,400italic,700,700italic' => 'Arvo',
			'Dancing Script:400,700' => 'Dancing Script',
			'Abril Fatface:400&subset=latin,latin-ext' => 'Abril Fatface',
			'Alice:400' => 'Alice',
			'Allerta:400' => 'Allerta',
			'Amatic SC:400,700&subset=latin,latin-ext' => 'Amatic SC',
			'Fauna One:400&subset=latin,latin-ext' => 'Fauna One',
			'Unica One:400&subset=latin,latin-ext' => 'Unica One',
			'Bitter:400,400italic,700&subset=latin,latin-ext' => 'Bitter',
			'Vollkorn:400,400italic,700,700italic' => 'Vollkorn',
			'Rokkitt:400,700' => 'Rokkitt',
			'Megrim:400' => 'Megrim',
			'Grand Hotel:400&subset=latin,latin-ext' => 'Grand Hotel',
			'Medula One:400' => 'Medula One',
			'Abel:400' => 'Abel',
			'Cantarell:400,400italic,700,700italic' => 'Cantarell',
			'Cedarville Cursive:400' => 'Cedarville Cursive', 
			'Coustard:400,900' => 'Coustard',
			'Leckerli One:400' => 'Leckerli One',
			'Josefin Sans:400,400italic,600,300italic,300,100italic,100,700italic,600italic,700&subset=latin,latin-ext' => 'Josefin Sans',
			'Dosis:400,800,700,600,500,300,200&subset=latin,latin-ext' => 'Dosis',
			'Droid Sans:400,700' => 'Droid Sans',
            'Droid Serif:400,400italic,700,700italic' => 'Droid Serif',
			'Roboto:400,100,100italic,300italic,300,400italic,500,500italic,700,700italic,900,900italic&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Roboto',
			'Roboto Condensed:400,300,300italic,400italic,700,700italic&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Roboto Condensed',
			'Roboto Slab:400,100,300,700&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Roboto Slab',
			'Open Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Open Sans',
			'Gentium Basic:400,400italic,700,700italic&subset=latin,latin-ext' => 'Gentium Basic',
			'Ovo:400' => 'Ovo',
			'Gloria Hallelujah:400' => 'Gloria Hallelujah',
			'EB Garamond:400&subset=latin,vietnamese,cyrillic-ext,latin-ext,cyrillic' => 'EB Garamond',
			'Muli:400,300,300italic,400italic' => 'Muli',
			'Neuton:400,200,300,400italic,700,800&subset=latin,latin-ext' => 'Neuton',
			'Vast Shadow:400' => 'Vast Shadow',
			'Oswald:400,300,700&subset=latin,latin-ext' => 'Oswald',
			'Quattrocento:400,700&subset=latin,latin-ext' => 'Quattrocento',
			'Fanwood Text:400,400italic' => 'Fanwood Text',
			'Quando:400&subset=latin,latin-ext' => 'Quando',
            'Judson:400,400italic,700&subset=latin,latin-ext,vietnamese' => 'Judson',
			'Monserrat:400,700' => 'Monserrat',
			'Exo:400,100,100italic,200,200italic,300,300italic,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&subset=latin,latin-ext' => 'Exo',
            'Open Sans Condensed:300,300italic,700&subset=latin,latin-ext,cyrillic,greek,greek-ext,vietnamese,cyrillic-ext' => 'Open Sans Condensed',
            'Alfa Slab One:400' => 'Alfa Slab One',
            'Domine:400,700&subset=latin,latin-ext' => 'Domine',
            'Lobster:400&subset=latin,latin-ext,vietnamese,cyrillic' => 'Lobster',
            'Lobster Two:400,400italic,700,700italic' => 'Lobster Two',
            'PT Sans:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic,cyrillic-ext' => 'PT Sans',
            'PT Serif:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic,cyrillic-ext' => 'PT Serif',
            'Noto Sans:400,400italic,700,700italic&subset=latin,greek-ext,devanagari,latin-ext,cyrillic-ext,cyrillic,vietnamese,greek' => 'Noto Sans',
            'Noto Serif:400,400italic,700,700italic&subset=latin,greek-ext,latin-ext,cyrillic-ext,cyrillic,vietnamese,greek' => 'Noto Serif',
            'Lora:400,400italic,700,700italic&subset=latin,latin-ext,cyrillic' => 'Lora',
			'Nixie One:400' => 'Nixie One',
			'Libre Baskerville:400,400italic,700&subset=latin,latin-ext' => 'Libre Baskerville',
			'Julius Sans One:400&subset=latin,latin-ext' => 'Julius Sans One', 
            'Crimson Text:400,400italic,600,600italic,700,700italic' => 'Crimson Text',
            'Almendra Display:400&subset=latin,latin-ext' => 'Almendra Display',
			'Cardo:400,400italic,700&subset=latin,latin-ext,greek-ext,greek' => 'Cardo',
			'Philosopher:400,400italic,700,700italic&subset=latin,cyrillic' => 'Philosopher',
			'Cinzel Decorative:400,700,900' => 'Cinzel Decorative',
			'Amiri:400,400italic,700,700italic&subset=latin,arabic' => 'Amiri',
			'Yeseva One:400&subset=latin,latin-ext,cyrillic' => 'Yeseva One',
			'Gravitas One:400' => 'Gravitas One',
            'Merriweather Sans:400,300,300italic,400italic,700,700italic,800,800italic&subset=latin,latin-ext' => 'Merriweather Sans',
            'Merriweather:400,300,300italic,400italic,700,700italic,900,900italic&subset=latin,latin-ext,cyrillic' => 'Merriweather',
            'Raleway:400,100,200,500,600,300,700,800,900' => 'Raleway',
            'Fjalla One:400&subset=latin,latin-ext' => 'Fjalla One',
			'Karla:400,400italic,700,700italic&subset=latin,latin-ext' => 'Karla',
			'Old Standard TT:400,400italic,700' => 'Old Standard TT',
			'Ubuntu:400,300italic,300,400italic,500,700italic,700,500italic&subset=latin,latin-ext,cyrillic,cyrillic-ext,greek,greek-ext' => 'Ubuntu',
			'Yanone Kaffeesatz:400,200,300,700&subset=latin,latin-ext' => 'Yanone Kaffeesatz',
    	);

    if ( array_key_exists( $str, $choices ) ) {
        return $str;
    } else {
        return '';
    }
}