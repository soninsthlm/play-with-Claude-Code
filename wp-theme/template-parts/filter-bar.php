<?php
/**
 * Template part: Tag filter bar
 *
 * @package FreakinFood
 */

$recipe_tags = get_terms( array(
	'taxonomy'   => 'recipe_tag',
	'hide_empty' => true,
) );

if ( empty( $recipe_tags ) || is_wp_error( $recipe_tags ) ) {
	return;
}

$current_tag = is_tax( 'recipe_tag' ) ? get_queried_object_id() : 0;
?>

<nav class="ff-filter-bar" aria-label="<?php esc_attr_e( 'Filter by tag', 'freakinfood' ); ?>">
	<a href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ); ?>"
	   class="ff-tag <?php echo ! $current_tag ? 'ff-tag--active' : ''; ?>">
		<?php esc_html_e( 'All', 'freakinfood' ); ?>
	</a>

	<?php foreach ( $recipe_tags as $tag ) : ?>
		<a href="<?php echo esc_url( get_term_link( $tag ) ); ?>"
		   class="ff-tag <?php echo $current_tag === $tag->term_id ? 'ff-tag--active' : ''; ?>">
			<?php echo esc_html( $tag->name ); ?>
		</a>
	<?php endforeach; ?>
</nav>
