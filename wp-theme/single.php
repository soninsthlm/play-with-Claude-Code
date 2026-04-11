<?php
/**
 * Single post template (reusable for recipes & blog)
 *
 * @package FreakinFood
 */

get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'ff-post' ); ?>>

	<header class="ff-post__header ff-container">
		<div class="ff-card__tags">
			<?php
			$recipe_tags = get_the_terms( get_the_ID(), 'recipe_tag' );
			if ( $recipe_tags && ! is_wp_error( $recipe_tags ) ) :
				foreach ( $recipe_tags as $tag ) : ?>
					<a href="<?php echo esc_url( get_term_link( $tag ) ); ?>" class="ff-tag">
						<?php echo esc_html( $tag->name ); ?>
					</a>
				<?php endforeach;
			endif;
			?>
		</div>

		<h1 class="ff-post__title"><?php the_title(); ?></h1>

		<div class="ff-post__meta">
			<span class="ff-post__date"><?php echo esc_html( get_the_date() ); ?></span>
			<span class="ff-post__author"><?php esc_html_e( 'by', 'freakinfood' ); ?> <?php the_author(); ?></span>
			<?php if ( comments_open() ) : ?>
				<span class="ff-post__comments">
					<?php comments_number(
						__( '0 comments', 'freakinfood' ),
						__( '1 comment', 'freakinfood' ),
						__( '% comments', 'freakinfood' )
					); ?>
				</span>
			<?php endif; ?>
		</div>
	</header>

	<?php if ( has_post_thumbnail() ) : ?>
		<div class="ff-post__featured-image">
			<?php the_post_thumbnail( 'ff-hero' ); ?>
		</div>
	<?php endif; ?>

	<div class="ff-post__content ff-container">
		<?php the_content(); ?>
	</div>

	<footer class="ff-post__footer ff-container" style="max-width: 720px; margin-inline: auto; padding-top: var(--ff-space-2xl); border-top: 1px solid var(--ff-border); margin-top: var(--ff-space-2xl);">
		<div class="ff-post__tags">
			<?php
			$categories = get_the_category();
			if ( $categories ) :
				foreach ( $categories as $cat ) : ?>
					<a href="<?php echo esc_url( get_category_link( $cat->term_id ) ); ?>" class="ff-tag">
						<?php echo esc_html( $cat->name ); ?>
					</a>
				<?php endforeach;
			endif;
			?>
		</div>

		<!-- Post navigation -->
		<nav class="ff-post-nav" style="display: flex; justify-content: space-between; margin-top: var(--ff-space-xl);">
			<div>
				<?php previous_post_link( '%link', '&larr; %title' ); ?>
			</div>
			<div>
				<?php next_post_link( '%link', '%title &rarr;' ); ?>
			</div>
		</nav>
	</footer>

</article>

<?php endwhile; ?>

<?php get_footer();
