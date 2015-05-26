<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Zircone
 */

get_header(); ?>

    <!--<section class="page-title row text-center">
      <article class="large-8 large-centered columns">
        <header>
          <h1>
            This is the Blog Page
          </h1>
        </header>

        <div class="page-tagline">
          <p>Sed finibus purus sit amet ligula ornare, volutpat fringilla dui vulputate. Morbi semper auctor turpis quis facilisis. Donec ullamcorper a arcu elementum lobortis. In malesuada risus sit amet libero blandit, id porttitor ante cursus.</p>
        </div>
      </article>
    </section>-->

	<div id="primary" class="content-area row">
		<main id="main" class="site-main large-8 large-centered columns" role="main">

		<?php if ( have_posts() ) : ?>

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php
					/* Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'content', get_post_format() );
				?>

			<?php endwhile; ?>

			<?php the_posts_navigation(); ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php // get_sidebar(); ?>
<?php get_footer(); ?>
