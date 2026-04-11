<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="ff-header">
	<div class="ff-container ff-header__inner">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="ff-logo">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none">
					<circle cx="14" cy="14" r="14" fill="#9c4326"/>
					<path d="M8 20c2-6 4-8 6-12s4-4 6 0" stroke="#fff" stroke-width="2" fill="none"/>
				</svg>
				<span><?php echo esc_html( get_bloginfo( 'name' ) ); ?></span>
			<?php endif; ?>
		</a>

		<button class="ff-menu-toggle" aria-label="<?php esc_attr_e( 'Toggle menu', 'freakinfood' ); ?>" aria-expanded="false">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<line x1="3" y1="6" x2="21" y2="6"></line>
				<line x1="3" y1="12" x2="21" y2="12"></line>
				<line x1="3" y1="18" x2="21" y2="18"></line>
			</svg>
		</button>

		<nav class="ff-nav" aria-label="<?php esc_attr_e( 'Primary navigation', 'freakinfood' ); ?>">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'primary',
				'container'      => false,
				'menu_class'     => 'ff-nav__list',
				'fallback_cb'    => 'freakinfood_fallback_menu',
				'depth'          => 1,
			) );
			?>
		</nav>

		<button class="ff-nav__search" aria-label="<?php esc_attr_e( 'Search', 'freakinfood' ); ?>">
			<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5">
				<circle cx="8" cy="8" r="6.5"></circle>
				<line x1="13" y1="13" x2="17" y2="17"></line>
			</svg>
		</button>
	</div>
</header>

<main id="main-content">

<?php
/**
 * Fallback menu if no menu is assigned
 */
function freakinfood_fallback_menu() {
	?>
	<ul class="ff-nav__list">
		<li><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="ff-nav__link ff-nav__link--active"><?php esc_html_e( 'Home', 'freakinfood' ); ?></a></li>
		<li><a href="<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ); ?>" class="ff-nav__link"><?php esc_html_e( 'Recipes + Blog', 'freakinfood' ); ?></a></li>
		<li><a href="#" class="ff-nav__link"><?php esc_html_e( 'Explore', 'freakinfood' ); ?></a></li>
		<li><a href="#" class="ff-nav__link"><?php esc_html_e( 'About', 'freakinfood' ); ?></a></li>
	</ul>
	<?php
}
