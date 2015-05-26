<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @package Zircone
 */

get_header(); ?>

    <section class="page-title row text-center">
      <article class="large-8 large-centered columns">
        <header>
          <h1 class="page-title"><?php _e( 'Oops! That page can&rsquo;t be found.', 'zircone' ); ?></h1>
        </header>
      </article>
    </section>

	<div id="primary" class="content-area row">
		<main id="main" class="site-main large-8 large-centered columns" role="main">

			<section class="error-404 not-found">

				<div class="page-content text-center">
					<p><?php _e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'zircone' ); ?></p>

					<?php get_search_form(); ?>

				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
