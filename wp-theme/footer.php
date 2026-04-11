</main><!-- #main-content -->

<footer class="ff-footer">
	<div class="ff-container">
		<div class="ff-footer__grid">
			<!-- Column 1: Brand -->
			<div class="ff-footer__brand">
				<div class="ff-footer__brand-logo">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
						<circle cx="11" cy="11" r="11" fill="#9c4326"/>
						<path d="M6 16c1.5-5 3-6.5 5-10s3-3 5 0" stroke="#fff" stroke-width="1.5" fill="none"/>
					</svg>
					<span><?php echo esc_html( get_bloginfo( 'name' ) ); ?></span>
				</div>
				<p class="ff-footer__brand-desc">
					<?php echo esc_html( get_bloginfo( 'description' ) ?: 'Dedicated to the meticulous exploration of global food cultures through the lens of modern design and traditional technique.' ); ?>
				</p>
				<div class="ff-footer__socials">
					<?php
					$instagram = get_theme_mod( 'ff_social_instagram', '' );
					$tiktok    = get_theme_mod( 'ff_social_tiktok', '' );
					?>
					<?php if ( $instagram ) : ?>
						<a href="<?php echo esc_url( $instagram ); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
							<svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/></svg>
						</a>
					<?php endif; ?>
					<?php if ( $tiktok ) : ?>
						<a href="<?php echo esc_url( $tiktok ); ?>" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
							<svg width="20" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3 6.34 6.34 0 0 0 9.49 21.64a6.34 6.34 0 0 0 6.34-6.34V8.8a8.27 8.27 0 0 0 3.76.9V6.69Z"/></svg>
						</a>
					<?php endif; ?>
				</div>
			</div>

			<!-- Column 2: Connections -->
			<div>
				<h4 class="ff-footer__col-title"><?php esc_html_e( 'Connections', 'freakinfood' ); ?></h4>
				<?php if ( has_nav_menu( 'footer' ) ) : ?>
					<?php wp_nav_menu( array(
						'theme_location' => 'footer',
						'container'      => false,
						'menu_class'     => 'ff-footer__links',
						'depth'          => 1,
					) ); ?>
				<?php else : ?>
					<ul class="ff-footer__links">
						<?php if ( $instagram ) : ?>
							<li><a href="<?php echo esc_url( $instagram ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Instagram (Main)', 'freakinfood' ); ?></a></li>
						<?php endif; ?>
						<li><a href="#"><?php esc_html_e( 'Newsletter', 'freakinfood' ); ?></a></li>
						<li><a href="#"><?php esc_html_e( 'Flipboard', 'freakinfood' ); ?></a></li>
					</ul>
				<?php endif; ?>
			</div>

			<!-- Column 3: Philosophy -->
			<div>
				<h4 class="ff-footer__col-title"><?php esc_html_e( 'Philosophy', 'freakinfood' ); ?></h4>
				<ul class="ff-footer__links">
					<?php
					$about_page   = get_page_by_path( 'about' );
					$privacy_page = get_privacy_policy_url();
					?>
					<?php if ( $about_page ) : ?>
						<li><a href="<?php echo esc_url( get_permalink( $about_page ) ); ?>"><?php esc_html_e( 'About the Curator', 'freakinfood' ); ?></a></li>
					<?php endif; ?>
					<?php if ( $privacy_page ) : ?>
						<li><a href="<?php echo esc_url( $privacy_page ); ?>"><?php esc_html_e( 'Privacy Policy', 'freakinfood' ); ?></a></li>
					<?php endif; ?>
					<li><a href="#"><?php esc_html_e( 'Cookie Settings', 'freakinfood' ); ?></a></li>
				</ul>
			</div>
		</div>

		<div class="ff-footer__bottom">
			<p>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved. Crafted for the curious palate.', 'freakinfood' ); ?></p>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
