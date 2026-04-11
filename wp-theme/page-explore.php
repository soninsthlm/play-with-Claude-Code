<?php
/**
 * Template Name: Explore
 * Template Post Type: page
 *
 * Dining + food guides with restaurant cards and embedded Google Maps
 *
 * @package FreakinFood
 */

get_header(); ?>

<div class="ff-container ff-section">
	<header class="ff-archive__header">
		<h1><?php the_title(); ?></h1>
		<?php if ( get_the_content() ) : ?>
			<div class="ff-page-intro">
				<?php the_content(); ?>
			</div>
		<?php endif; ?>
	</header>

	<!-- Restaurant Cards Section -->
	<section class="ff-section">
		<h2><?php esc_html_e( 'Our Recommendations', 'freakinfood' ); ?></h2>

		<div class="ff-grid ff-grid--3">
			<?php
			/**
			 * Restaurant cards can be managed via:
			 * - ACF Repeater fields on this page
			 * - Elementor widgets (if using page builder)
			 * - Custom post type (if registered)
			 *
			 * Below is a placeholder structure.
			 * Replace with ACF or page builder content.
			 */
			if ( function_exists( 'get_field' ) && get_field( 'restaurants' ) ) :
				while ( have_rows( 'restaurants' ) ) : the_row(); ?>
					<div class="ff-restaurant-card">
						<?php $image = get_sub_field( 'image' ); ?>
						<?php if ( $image ) : ?>
							<div class="ff-restaurant-card__image">
								<img src="<?php echo esc_url( $image['sizes']['ff-restaurant'] ?? $image['url'] ); ?>"
								     alt="<?php echo esc_attr( get_sub_field( 'name' ) ); ?>">
							</div>
						<?php endif; ?>
						<div class="ff-restaurant-card__body">
							<h3 class="ff-restaurant-card__name"><?php echo esc_html( get_sub_field( 'name' ) ); ?></h3>
							<p class="ff-restaurant-card__cuisine"><?php echo esc_html( get_sub_field( 'cuisine' ) ); ?></p>
							<p class="ff-restaurant-card__location"><?php echo esc_html( get_sub_field( 'location' ) ); ?></p>
						</div>
					</div>
				<?php endwhile;
			else : ?>
				<p><?php esc_html_e( 'Restaurant recommendations coming soon! Use Elementor or ACF to add content here.', 'freakinfood' ); ?></p>
			<?php endif; ?>
		</div>
	</section>

	<!-- City Food Maps Section — Embedded Google Maps -->
	<section class="ff-section ff-map-section">
		<h2><?php esc_html_e( 'City Food Maps', 'freakinfood' ); ?></h2>
		<p><?php esc_html_e( 'Explore our curated food recommendations across cities.', 'freakinfood' ); ?></p>

		<?php
		/**
		 * Google Maps embeds from saved recommendation lists.
		 * Managed via ACF repeater field "city_maps" with subfields:
		 * - city_name (text)
		 * - map_embed_url (url) — the Google Maps saved list share/embed link
		 *
		 * Example embed URL format:
		 * https://www.google.com/maps/d/embed?mid=YOUR_MAP_ID
		 * or
		 * https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE
		 */
		if ( function_exists( 'get_field' ) && get_field( 'city_maps' ) ) :
			while ( have_rows( 'city_maps' ) ) : the_row(); ?>
				<div class="ff-map-section" style="margin-bottom: var(--ff-space-2xl);">
					<h3><?php echo esc_html( get_sub_field( 'city_name' ) ); ?></h3>
					<div class="ff-map-embed">
						<iframe
							src="<?php echo esc_url( get_sub_field( 'map_embed_url' ) ); ?>"
							allowfullscreen
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title="<?php echo esc_attr( get_sub_field( 'city_name' ) ); ?> Food Map">
						</iframe>
					</div>
				</div>
			<?php endwhile;
		else : ?>
			<p><?php esc_html_e( 'City food maps coming soon! Add Google Maps embed links via ACF or Elementor.', 'freakinfood' ); ?></p>
		<?php endif; ?>
	</section>
</div>

<?php get_footer();
