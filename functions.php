<?php
/**
 * Zircone functions and definitions
 *
 * @package Zircone
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 750; /* pixels */
}

if ( ! function_exists( 'zircone_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function zircone_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Zircone, use a find and replace
	 * to change 'zircone' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'zircone', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'zircone' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'quote', 'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'zircone_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	add_editor_style();
}
endif; // zircone_setup
add_action( 'after_setup_theme', 'zircone_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function zircone_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'zircone' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'zircone_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function zircone_scripts() {
	/* Add Foundation CSS */
	wp_enqueue_style( 'foundation', get_stylesheet_directory_uri() . '/css/foundation.css' );
	wp_enqueue_style( 'zircone-style', get_stylesheet_uri() );
	wp_enqueue_script( 'foundation-js', get_template_directory_uri() . '/js/foundation.min.js', array( 'jquery' ), '5', true );
	wp_enqueue_script( 'modernizr-js', get_template_directory_uri() . '/js/vendor/modernizr.js', array( 'jquery' ), '5', true );
	
	/* Add Pushy Sidebar Ofcanvas */
	wp_enqueue_script( 'pushy-js', get_template_directory_uri() . '/js/pushy.min.js', array( 'jquery' ), '', true );

	/* Add Fonts */
	wp_enqueue_style( 'zircone-genericons', get_stylesheet_directory_uri() . '/css/genericons.css', '', '2' );
	wp_enqueue_style( 'zircone-lato-style', 'http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic', '', '2' );
	wp_enqueue_style( 'zircone-playfair-style', 'http://fonts.googleapis.com/css?family=Playfair+Display:400,700,900,400italic,700italic,900italic', '', '2' );

	/* Add Video Support */
	//wp_enqueue_style( 'zircone-video-style', get_stylesheet_directory_uri() . '/css/video-js.css' );
	//wp_enqueue_script( 'zircone-video-js', get_template_directory_uri() . '/js/video.js', array( 'jquery' ), '5', true );

	wp_enqueue_script( 'zircone-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'zircone_scripts' );

/* Add Foundation footer */
function foundation_footer(){
	?>
	<script type="text/javascript">
		jQuery(document).ready(function($) {
			$(document).foundation();
		});	
	</script>
	<?php
}
add_filter('wp_footer','foundation_footer');

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

class TopBar_walker extends Walker_Nav_Menu {
 
  // add classes to ul sub-menus
  function start_lvl(&$output, $depth = 0, $args = array() ) {
    // depth dependent classes
    $indent = ( $depth > 0 ? str_repeat("\t", $depth) : '' ); // code indent
 
    // build html
    $output .= "\n" . $indent . '<ul class="dropdown">' . "\n";
  }
}
if (!function_exists('TopBar_set_dropdown')) :
function TopBar_set_dropdown($sorted_menu_items, $args) {
  $last_top = 0;
  foreach ($sorted_menu_items as $key => $obj) {
    // it is a top lv item?
    if (0 == $obj->menu_item_parent) {
      // set the key of the parent
      $last_top = $key;
    } else {
      $sorted_menu_items[$last_top]->classes['dropdown'] = 'has-dropdown';
    }
  }
  return $sorted_menu_items;
}
endif;
add_filter('wp_nav_menu_objects', 'TopBar_set_dropdown', 10, 2);

