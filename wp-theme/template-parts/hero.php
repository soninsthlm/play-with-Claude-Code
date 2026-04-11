<?php
/**
 * Template part: Hero section — Editorial style from Figma
 *
 * @package FreakinFood
 */

$hero_label    = get_theme_mod( 'ff_hero_label', 'Featured Story' );
$hero_title    = get_theme_mod( 'ff_hero_title', 'Modern Vietnamese Freshness: A Swedish Take.' );
$hero_desc     = get_theme_mod( 'ff_hero_subtitle', 'An exploration of Nordic discipline meeting the aromatic vibrancy of the Saigon streets. Discover the delicate balance of dill, fish sauce, and summer light.' );
$hero_cta_text = get_theme_mod( 'ff_hero_cta_text', 'Read the Story' );
$hero_cta_link = get_theme_mod( 'ff_hero_cta_link', '#' );
$hero_image    = get_theme_mod( 'ff_hero_image', '' );
$hero_quote    = get_theme_mod( 'ff_hero_quote', '"The soul of a kitchen is its heritage."' );
?>

<section class="ff-hero">
	<div class="ff-hero__grid">

		<!-- Left: Content -->
		<div class="ff-hero__content">
			<span class="ff-hero__label"><?php echo esc_html( $hero_label ); ?></span>
			<h1 class="ff-hero__title"><?php echo esc_html( $hero_title ); ?></h1>
			<p class="ff-hero__description"><?php echo esc_html( $hero_desc ); ?></p>
			<div class="ff-hero__actions">
				<a href="<?php echo esc_url( $hero_cta_link ); ?>" class="ff-btn ff-btn--primary">
					<?php echo esc_html( $hero_cta_text ); ?>
				</a>
				<a href="<?php echo esc_url( get_permalink( get_option( 'page_for_posts' ) ) ); ?>" class="ff-link-underline">
					<?php esc_html_e( 'View All Recipes', 'freakinfood' ); ?>
				</a>
			</div>
		</div>

		<!-- Right: Featured Image with offset quote -->
		<div class="ff-hero__image-col">
			<?php if ( $hero_image ) : ?>
				<div class="ff-hero__image-wrapper">
					<img src="<?php echo esc_url( $hero_image ); ?>" alt="<?php echo esc_attr( $hero_title ); ?>">
					<div class="ff-hero__image-overlay"></div>
				</div>
			<?php endif; ?>

			<?php if ( $hero_quote ) : ?>
				<div class="ff-hero__quote">
					<div class="ff-hero__quote-icon">
						<svg width="22.5" height="30" viewBox="0 0 22.5 30" fill="#9d4225">
							<path d="M11.25 0C5.04 0 0 6.72 0 15s5.04 15 11.25 15S22.5 23.28 22.5 15 17.46 0 11.25 0z"/>
						</svg>
					</div>
					<p class="ff-hero__quote-text"><?php echo esc_html( $hero_quote ); ?></p>
				</div>
			<?php endif; ?>
		</div>

	</div>
</section>
