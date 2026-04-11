<?php
/**
 * Template part: Recipe/Blog card
 *
 * @package FreakinFood
 */
?>

<article class="ff-card">
	<?php if ( has_post_thumbnail() ) : ?>
		<a href="<?php the_permalink(); ?>" class="ff-card__image">
			<?php the_post_thumbnail( 'ff-card-thumb' ); ?>
		</a>
	<?php endif; ?>

	<div class="ff-card__body">
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

		<h3 class="ff-card__title">
			<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
		</h3>

		<p class="ff-card__excerpt"><?php echo esc_html( get_the_excerpt() ); ?></p>

		<div class="ff-card__meta">
			<span><?php echo esc_html( get_the_date() ); ?></span>
			<span><?php esc_html_e( 'by', 'freakinfood' ); ?> <?php the_author(); ?></span>
		</div>
	</div>
</article>
