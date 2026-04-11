<?php
/**
 * Template Name: About
 * Template Post Type: page
 *
 * Founders' story, collaboration form, contact + socials
 *
 * @package FreakinFood
 */

get_header(); ?>

<!-- Founders' Story Section -->
<section class="ff-section">
	<div class="ff-container">
		<div class="ff-about__story">
			<div class="ff-about__text">
				<span class="ff-hero__label" style="display: block; margin-bottom: var(--ff-space-md);"><?php esc_html_e( 'About the Curator', 'freakinfood' ); ?></span>
				<h1><?php the_title(); ?></h1>
				<div style="margin-top: var(--ff-space-xl); font-family: var(--ff-font-body); font-size: 1.0625rem; line-height: 1.8; color: var(--ff-text-body);">
					<?php the_content(); ?>
				</div>
			</div>
			<div class="ff-about__image">
				<?php if ( has_post_thumbnail() ) : ?>
					<div style="border-radius: var(--ff-radius-lg); overflow: hidden;">
						<?php the_post_thumbnail( 'large' ); ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>

<!-- Collaboration Form Section -->
<section class="ff-section" style="background-color: var(--ff-surface-muted);">
	<div class="ff-container">
		<div class="ff-collab-form">
			<h2><?php esc_html_e( 'Collaborate With Us', 'freakinfood' ); ?></h2>
			<p style="margin-top: var(--ff-space-md); margin-bottom: var(--ff-space-xl); font-family: var(--ff-font-body); color: var(--ff-text-body);">
				<?php esc_html_e( 'Interested in working together? Fill out the form below and we\'ll get back to you.', 'freakinfood' ); ?>
			</p>

			<?php
			if ( function_exists( 'get_field' ) && get_field( 'collab_form_shortcode' ) ) :
				echo do_shortcode( get_field( 'collab_form_shortcode' ) );
			else : ?>
				<form class="ff-collab-form__form" method="post" action="">
					<?php wp_nonce_field( 'ff_collab_form', 'ff_collab_nonce' ); ?>

					<div class="ff-form-group">
						<label for="ff-name"><?php esc_html_e( 'Your Name', 'freakinfood' ); ?></label>
						<input type="text" id="ff-name" name="ff_name" required>
					</div>

					<div class="ff-form-group">
						<label for="ff-email"><?php esc_html_e( 'Email Address', 'freakinfood' ); ?></label>
						<input type="email" id="ff-email" name="ff_email" required>
					</div>

					<div class="ff-form-group">
						<label for="ff-type"><?php esc_html_e( 'Collaboration Type', 'freakinfood' ); ?></label>
						<select id="ff-type" name="ff_type">
							<option value=""><?php esc_html_e( 'Select an option', 'freakinfood' ); ?></option>
							<option value="recipe"><?php esc_html_e( 'Recipe Collaboration', 'freakinfood' ); ?></option>
							<option value="review"><?php esc_html_e( 'Restaurant Review', 'freakinfood' ); ?></option>
							<option value="sponsored"><?php esc_html_e( 'Sponsored Content', 'freakinfood' ); ?></option>
							<option value="other"><?php esc_html_e( 'Other', 'freakinfood' ); ?></option>
						</select>
					</div>

					<div class="ff-form-group">
						<label for="ff-message"><?php esc_html_e( 'Message', 'freakinfood' ); ?></label>
						<textarea id="ff-message" name="ff_message" rows="5" required></textarea>
					</div>

					<button type="submit" class="ff-btn ff-btn--primary">
						<?php esc_html_e( 'Send Message', 'freakinfood' ); ?>
					</button>
				</form>
			<?php endif; ?>
		</div>
	</div>
</section>

<!-- Contact + Socials Section -->
<section class="ff-section">
	<div class="ff-container" style="text-align: center;">
		<h2><?php esc_html_e( 'Get In Touch', 'freakinfood' ); ?></h2>

		<?php $email = get_theme_mod( 'ff_contact_email', '' ); ?>
		<?php if ( $email ) : ?>
			<p style="margin-top: var(--ff-space-md);"><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></p>
		<?php endif; ?>

		<div class="ff-socials" style="justify-content: center; margin-top: var(--ff-space-lg);">
			<?php
			$socials = array(
				'instagram' => array( 'label' => 'Instagram', 'icon' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/></svg>' ),
				'tiktok'    => array( 'label' => 'TikTok', 'icon' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3 6.34 6.34 0 0 0 9.49 21.64a6.34 6.34 0 0 0 6.34-6.34V8.8a8.27 8.27 0 0 0 3.76.9V6.69Z"/></svg>' ),
				'youtube'   => array( 'label' => 'YouTube', 'icon' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43Z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>' ),
				'facebook'  => array( 'label' => 'Facebook', 'icon' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>' ),
			);
			foreach ( $socials as $key => $data ) :
				$url = get_theme_mod( "ff_social_{$key}", '' );
				if ( $url ) : ?>
					<a href="<?php echo esc_url( $url ); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php echo esc_attr( $data['label'] ); ?>">
						<?php echo $data['icon']; ?>
					</a>
				<?php endif;
			endforeach; ?>
		</div>
	</div>
</section>

<?php get_footer();
