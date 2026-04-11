<?php
/**
 * Template part: CTA block
 *
 * @package FreakinFood
 */

$cta_title = get_theme_mod( 'ff_cta_title', 'Want to collaborate?' );
$cta_text  = get_theme_mod( 'ff_cta_text', 'We\'re always looking for food lovers to share recipes, review restaurants, and create amazing content together.' );
$cta_btn   = get_theme_mod( 'ff_cta_button_text', 'Get In Touch' );
$cta_link  = get_theme_mod( 'ff_cta_button_link', '/about' );
?>

<section class="ff-section">
	<div class="ff-container">
		<div class="ff-cta">
			<h2><?php echo esc_html( $cta_title ); ?></h2>
			<p><?php echo esc_html( $cta_text ); ?></p>
			<a href="<?php echo esc_url( $cta_link ); ?>" class="ff-btn ff-btn--white">
				<?php echo esc_html( $cta_btn ); ?>
			</a>
		</div>
	</div>
</section>
