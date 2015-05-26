<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package Zircone
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area" role="complementary">
	<aside id="mobile-menu" class="widget show-for-small-only">
		<h3 class="widget-title"><?php _e( 'Primary Menu', 'zircone' ); ?></h3>
		<?php wp_nav_menu( array( 
		'theme_location' => 'primary',
		'menu_id' => 'sidebar-primary-menu', 
		'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>', 
		) ); ?>
	</aside>
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</div><!-- #secondary -->
