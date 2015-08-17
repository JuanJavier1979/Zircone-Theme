<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Zircone
 */
?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<section class="row">
			<div class="site-info large-12 columns">
				<?php 
				if ( has_nav_menu( 'social' ) ) {
					wp_nav_menu( array( 'theme_location' => 'social', 'menu_id' => 'zircone-social-menu' ) ); 
				} ?>

				<a href="<?php echo esc_url( __( 'http://wordpress.org/', 'zircone' ) ); ?>"><?php printf( __( 'Proudly powered by %s', 'zircone' ), 'WordPress' ); ?></a>
				<span class="sep"> | </span>
				<?php printf( __( 'Theme: %1$s by %2$s.', 'zircone' ), 'Zircone', '<a href="' . esc_url( __( 'http://www.iris-studio.es', 'zircone' ) ) . '" rel="designer">@JuanJavier1979</a>' ); ?>
			</div><!-- .site-info -->
		</section>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
