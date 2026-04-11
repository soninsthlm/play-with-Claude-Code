<?php
/**
 * Recipe tag taxonomy archive
 *
 * @package FreakinFood
 */

get_header(); ?>

<div class="ff-container ff-section">
	<header class="ff-archive__header">
		<h1><?php single_term_title(); ?></h1>
		<?php the_archive_description( '<p class="ff-archive__desc">', '</p>' ); ?>
	</header>

	<?php get_template_part( 'template-parts/filter-bar' ); ?>

	<?php if ( have_posts() ) : ?>
		<div class="ff-grid ff-grid--3">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'template-parts/content-card' ); ?>
			<?php endwhile; ?>
		</div>

		<div class="ff-pagination">
			<?php the_posts_pagination( array(
				'mid_size'  => 2,
				'prev_text' => '&larr; ' . __( 'Previous', 'freakinfood' ),
				'next_text' => __( 'Next', 'freakinfood' ) . ' &rarr;',
			) ); ?>
		</div>
	<?php else : ?>
		<p><?php esc_html_e( 'No posts found for this tag.', 'freakinfood' ); ?></p>
	<?php endif; ?>
</div>

<?php get_footer();
