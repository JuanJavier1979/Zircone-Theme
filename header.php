<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Zircone
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<nav class="pushy pushy-right"><?php get_sidebar(); ?></nav>
<div class="site-overlay"></div>
<div id="page" class="hfeed site container">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'zircone' ); ?></a>

    <?php do_action( 'wanna_before_header' ); ?>

    <header id="masthead" class="site-header row" role="banner">
      <div class="site-branding large-4 medium-4 columns">
      
      <?php if ( get_theme_mod( 'zircone_logo' ) ) : ?>

        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
          <img src='<?php echo esc_url( get_theme_mod( 'zircone_logo' ) ); ?>' alt='<?php echo esc_attr( get_bloginfo( 'title' ) ); ?>'>
        </a>
      
      <?php elseif ( get_bloginfo( 'description' ) || get_bloginfo( 'title' ) ) : ?>

        <h1 class="site-title">
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
        </h1>

        <?php if (  get_bloginfo( 'description' ) ) : ?>
          <h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
        <?php endif; ?>

      <?php endif; ?>

      </div>
      <nav id="main-menu" class="menu large-8 medium-8 columns" role="navigation">
      		<span class="genericon genericon-menu menu-btn menu-toggle right"></span>
          <?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu', 'menu_class' => 'hide-for-small-only' ) ); ?>
      </nav>
    </header>

	<div id="content" class="site-content">

    <?php do_action( 'wanna_before_content' ); ?>
