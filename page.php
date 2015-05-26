<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package Zircone
 */

get_header(); ?>

    <section class="page-title row text-center">
      <article class="large-8 large-centered columns">
        <header>
          <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
        </header>
      </article>
    </section>
    
	<div id="primary" class="content-area row">
		<main id="main" class="site-main large-8 large-centered columns" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'page' ); ?>

				<?php
					// If comments are open or we have at least one comment, load up the comment template
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
				?>

			<?php endwhile; // end of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php // get_sidebar(); ?>
<?php get_footer(); ?>
