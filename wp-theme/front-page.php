<?php
/**
 * Homepage template — Editorial layout from Figma design
 *
 * @package FreakinFood
 */

get_header(); ?>

<!-- ======================================
     HERO SECTION
     ====================================== -->
<?php get_template_part( 'template-parts/hero' ); ?>

<!-- ======================================
     MAIN CONTENT + SIDEBAR
     ====================================== -->
<section class="ff-section">
	<div class="ff-container">
		<div class="ff-layout-with-sidebar">

			<!-- Latest Posts Feed -->
			<div class="ff-main-feed">
				<div class="ff-section-header">
					<h2><?php esc_html_e( 'Latest from the Kitchen', 'freakinfood' ); ?></h2>
				</div>

				<div style="display: flex; flex-direction: column; gap: 80px;">

					<?php
					// First post: Asymmetric card layout
					$latest = new WP_Query( array( 'posts_per_page' => 4 ) );
					$post_count = 0;

					if ( $latest->have_posts() ) :
						while ( $latest->have_posts() ) : $latest->the_post();
							$post_count++;

							if ( $post_count === 1 ) :
								// Asymmetric recipe card
								?>
								<article class="ff-card-asymmetric">
									<?php if ( has_post_thumbnail() ) : ?>
										<div class="ff-card-asymmetric__image">
											<a href="<?php the_permalink(); ?>">
												<?php the_post_thumbnail( 'ff-card-thumb' ); ?>
											</a>
										</div>
									<?php endif; ?>
									<div class="ff-card-asymmetric__body">
										<div class="ff-card__category">
											<?php
											$recipe_tags = get_the_terms( get_the_ID(), 'recipe_tag' );
											if ( $recipe_tags && ! is_wp_error( $recipe_tags ) ) :
												$tag_names = array();
												foreach ( $recipe_tags as $tag ) {
													$tag_names[] = '<a href="' . esc_url( get_term_link( $tag ) ) . '">' . esc_html( $tag->name ) . '</a>';
												}
												echo implode( ' <span class="ff-card__category-divider">/</span> ', $tag_names );
											endif;
											?>
										</div>
										<h3 class="ff-card__title" style="font-size: 1.875rem;">
											<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
										</h3>
										<p class="ff-card__excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>
										<div class="ff-card__meta">
											<span class="ff-card__meta-item">
												<svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor"><circle cx="6.5" cy="6.5" r="6" stroke="currentColor" stroke-width="1" fill="none"/><path d="M6.5 3v4l2.5 1.5" stroke="currentColor" stroke-width="1" fill="none"/></svg>
												<?php
												$read_time = ceil( str_word_count( get_the_content() ) / 200 );
												echo esc_html( $read_time . ' Min' );
												?>
											</span>
										</div>
									</div>
								</article>
								<?php

							elseif ( $post_count === 2 ) :
								// Story card with tonal layering
								?>
								<article class="ff-card-story">
									<div class="ff-card-story__content">
										<span class="ff-card-story__label"><?php esc_html_e( "The Curator's Journal", 'freakinfood' ); ?></span>
										<h3 class="ff-card-story__title">
											<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
										</h3>
										<p class="ff-card-story__excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>
										<div class="ff-card-story__meta">
											<span class="ff-card__meta-item">
												<svg width="14" height="13" viewBox="0 0 14 13" fill="currentColor"><path d="M1 1h10v9H5L1 13V1z" stroke="currentColor" stroke-width="1" fill="none"/></svg>
												<?php
												$read_time = ceil( str_word_count( get_the_content() ) / 200 );
												echo esc_html( $read_time . ' min read' );
												?>
											</span>
											<a href="<?php the_permalink(); ?>" class="ff-card-story__link" style="margin-left: auto;">
												<?php esc_html_e( 'Full Story →', 'freakinfood' ); ?>
											</a>
										</div>
									</div>
									<?php if ( has_post_thumbnail() ) : ?>
										<div class="ff-card-story__image">
											<?php the_post_thumbnail( 'ff-card-thumb' ); ?>
										</div>
									<?php endif; ?>
								</article>
								<?php

							elseif ( $post_count === 3 ) :
								// Start bento grid
								?>
								<div class="ff-bento-grid">
									<article>
										<?php if ( has_post_thumbnail() ) : ?>
											<div class="ff-card-bento__image">
												<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'ff-card-thumb' ); ?></a>
											</div>
										<?php endif; ?>
										<h3 class="ff-card-bento__title">
											<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
										</h3>
										<p class="ff-card-bento__excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>
										<div class="ff-card-bento__meta">
											<?php
											$recipe_tags = get_the_terms( get_the_ID(), 'recipe_tag' );
											if ( $recipe_tags && ! is_wp_error( $recipe_tags ) ) {
												echo esc_html( $recipe_tags[0]->name );
											}
											?>
											<span class="ff-card-bento__meta-dot">•</span>
											<span><?php echo esc_html( get_the_date( 'F Y' ) ); ?></span>
										</div>
									</article>
								<?php

							elseif ( $post_count === 4 ) :
								// Second bento card
								?>
									<article>
										<?php if ( has_post_thumbnail() ) : ?>
											<div class="ff-card-bento__image">
												<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'ff-card-thumb' ); ?></a>
											</div>
										<?php endif; ?>
										<h3 class="ff-card-bento__title">
											<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
										</h3>
										<p class="ff-card-bento__excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>
										<div class="ff-card-bento__meta">
											<?php
											$recipe_tags = get_the_terms( get_the_ID(), 'recipe_tag' );
											if ( $recipe_tags && ! is_wp_error( $recipe_tags ) ) {
												echo esc_html( $recipe_tags[0]->name );
											}
											?>
											<span class="ff-card-bento__meta-dot">•</span>
											<span><?php echo esc_html( get_the_date( 'F Y' ) ); ?></span>
										</div>
									</article>
								</div><!-- .ff-bento-grid -->
								<?php
							endif;

						endwhile;
						wp_reset_postdata();
					endif;
					?>

				</div>
			</div>

			<!-- Sidebar -->
			<aside class="ff-sidebar">
				<!-- Search -->
				<div class="ff-sidebar__search">
					<h4><?php esc_html_e( 'Search the Archives', 'freakinfood' ); ?></h4>
					<form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
						<input class="ff-sidebar__search-input" type="search" name="s"
						       placeholder="<?php esc_attr_e( 'Explore recipes...', 'freakinfood' ); ?>"
						       value="<?php echo get_search_query(); ?>">
					</form>
				</div>

				<!-- Curated Themes (Recipe Tags) -->
				<div class="ff-sidebar__tags">
					<h4><?php esc_html_e( 'Curated Themes', 'freakinfood' ); ?></h4>
					<div class="ff-sidebar__tag-list">
						<?php
						$recipe_tags = get_terms( array(
							'taxonomy'   => 'recipe_tag',
							'hide_empty' => false,
						) );
						if ( ! empty( $recipe_tags ) && ! is_wp_error( $recipe_tags ) ) :
							foreach ( $recipe_tags as $tag ) : ?>
								<a href="<?php echo esc_url( get_term_link( $tag ) ); ?>" class="ff-tag">
									<?php echo esc_html( $tag->name ); ?>
								</a>
							<?php endforeach;
						endif;
						?>
					</div>
				</div>

				<!-- Editorial Note -->
				<div class="ff-sidebar__note">
					<p class="ff-sidebar__note-label"><?php esc_html_e( 'A Note From the Kitchen', 'freakinfood' ); ?></p>
					<p class="ff-sidebar__note-text">
						<?php echo esc_html( get_theme_mod( 'ff_editorial_note', '"Food is never just food. It is a dialogue between where we come from and where we are standing right now."' ) ); ?>
					</p>
				</div>
			</aside>

		</div>
	</div>
</section>

<!-- ======================================
     NEWSLETTER CTA: "The Weekly Curator"
     ====================================== -->
<section class="ff-newsletter">
	<div class="ff-newsletter__decor"></div>
	<div class="ff-container" style="position: relative; z-index: 1;">
		<div class="ff-newsletter__icon">
			<svg width="40" height="32" viewBox="0 0 40 32" fill="none">
				<path d="M2 6l18 12L38 6" stroke="#9c4326" stroke-width="2" fill="none"/>
				<rect x="1" y="1" width="38" height="30" rx="4" stroke="#9c4326" stroke-width="2" fill="none"/>
			</svg>
		</div>
		<h2 class="ff-newsletter__title"><?php echo esc_html( get_theme_mod( 'ff_newsletter_title', 'The Weekly Curator' ) ); ?></h2>
		<p class="ff-newsletter__description">
			<?php echo esc_html( get_theme_mod( 'ff_newsletter_desc', 'Receive a hand-picked collection of seasonal recipes, editorial essays, and culinary inspirations directly to your inbox.' ) ); ?>
		</p>
		<form class="ff-newsletter__form" method="post" action="#">
			<input class="ff-newsletter__input" type="email" name="email"
			       placeholder="<?php esc_attr_e( 'Your email address', 'freakinfood' ); ?>" required>
			<button type="submit" class="ff-btn ff-btn--newsletter">
				<?php esc_html_e( 'Join the Kitchen', 'freakinfood' ); ?>
			</button>
		</form>
	</div>
</section>

<!-- ======================================
     INSTAGRAM GRID: "Living the Narrative"
     ====================================== -->
<?php
$ig_handle = get_theme_mod( 'ff_social_instagram_handle', '@thetransnationalcurator' );
?>
<section class="ff-instagram">
	<div class="ff-container">
		<div class="ff-instagram__header">
			<h2 class="ff-instagram__title"><?php esc_html_e( 'Living the Narrative', 'freakinfood' ); ?></h2>
			<span class="ff-instagram__handle"><?php echo esc_html( $ig_handle ); ?></span>
		</div>
		<div class="ff-instagram__grid">
			<?php
			/**
			 * Instagram images — managed via Customizer or plugin.
			 * For now, show recent post thumbnails as placeholders.
			 */
			$ig_posts = new WP_Query( array(
				'posts_per_page'   => 4,
				'meta_key'         => '_thumbnail_id',
				'orderby'          => 'date',
				'order'            => 'DESC',
			) );

			if ( $ig_posts->have_posts() ) :
				while ( $ig_posts->have_posts() ) : $ig_posts->the_post();
					if ( has_post_thumbnail() ) : ?>
						<a href="<?php the_permalink(); ?>" class="ff-instagram__item">
							<?php the_post_thumbnail( 'medium_large' ); ?>
						</a>
					<?php endif;
				endwhile;
				wp_reset_postdata();
			endif;
			?>
		</div>
	</div>
</section>

<?php
// Allow Elementor or page builder content
if ( have_posts() ) :
	while ( have_posts() ) : the_post();
		$content = get_the_content();
		if ( ! empty( trim( $content ) ) ) {
			echo '<div class="ff-container ff-section">';
			the_content();
			echo '</div>';
		}
	endwhile;
endif;
?>

<?php get_footer();
