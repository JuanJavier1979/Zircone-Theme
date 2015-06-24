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
      ?>
      
	      <!-- Customizer CSS --> 
	      
	      <style type="text/css">
	      	<?php zircone_custom_style('body a', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('.site-title a:hover', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('#main-menu a:hover, .menu-btn:hover', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('#main-menu li.has-dropdown:hover > a, #main-menu ul ul li.menu-item-has-children:hover > a', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('.entry-title a:hover', 'color', 'accent_color'); ?>
	      	<?php zircone_custom_style('input[type="submit"]', 'background-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('.pushy a:hover', 'background-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('section.page-title h1::after', 'background-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('button', 'background-color', 'accent_color'); ?>
	      	<?php zircone_custom_style('.button', 'background-color', 'accent_color'); ?>
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