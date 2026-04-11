<?php
/**
 * FreakinFood Theme Functions
 *
 * @package FreakinFood
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'FREAKINFOOD_VERSION', '1.0.0' );
define( 'FREAKINFOOD_DIR', get_template_directory() );
define( 'FREAKINFOOD_URI', get_template_directory_uri() );

/**
 * Theme setup
 */
function freakinfood_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array(
		'height'      => 60,
		'width'       => 200,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'style',
		'script',
	) );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'responsive-embeds' );

	// Image sizes for recipe cards
	add_image_size( 'ff-card-thumb', 640, 400, true );
	add_image_size( 'ff-hero', 1920, 800, true );
	add_image_size( 'ff-restaurant', 480, 320, true );

	// Navigation menus
	register_nav_menus( array(
		'primary' => __( 'Primary Navigation', 'freakinfood' ),
		'footer'  => __( 'Footer Navigation', 'freakinfood' ),
	) );
}
add_action( 'after_setup_theme', 'freakinfood_setup' );

/**
 * Enqueue styles and scripts
 */
function freakinfood_scripts() {
	// Google Fonts — Newsreader (editorial), Be Vietnam Pro (body), Inter (UI)
	wp_enqueue_style(
		'freakinfood-fonts',
		'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap',
		array(),
		null
	);

	// Theme stylesheet
	wp_enqueue_style(
		'freakinfood-style',
		get_stylesheet_uri(),
		array( 'freakinfood-fonts' ),
		FREAKINFOOD_VERSION
	);

	// Custom JS
	wp_enqueue_script(
		'freakinfood-main',
		FREAKINFOOD_URI . '/assets/js/main.js',
		array(),
		FREAKINFOOD_VERSION,
		true
	);

	// Pass data to JS
	wp_localize_script( 'freakinfood-main', 'freakinfoodData', array(
		'ajaxUrl' => admin_url( 'admin-ajax.php' ),
		'nonce'   => wp_create_nonce( 'freakinfood_nonce' ),
	) );
}
add_action( 'wp_enqueue_scripts', 'freakinfood_scripts' );

/**
 * Register widget areas
 */
function freakinfood_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Footer Column 1', 'freakinfood' ),
		'id'            => 'footer-1',
		'before_widget' => '<div class="ff-footer-widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h4>',
		'after_title'   => '</h4>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer Column 2', 'freakinfood' ),
		'id'            => 'footer-2',
		'before_widget' => '<div class="ff-footer-widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h4>',
		'after_title'   => '</h4>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer Column 3', 'freakinfood' ),
		'id'            => 'footer-3',
		'before_widget' => '<div class="ff-footer-widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h4>',
		'after_title'   => '</h4>',
	) );
}
add_action( 'widgets_init', 'freakinfood_widgets_init' );

/**
 * Register custom taxonomy for recipe tags
 */
function freakinfood_register_taxonomies() {
	register_taxonomy( 'recipe_tag', 'post', array(
		'labels' => array(
			'name'          => __( 'Recipe Tags', 'freakinfood' ),
			'singular_name' => __( 'Recipe Tag', 'freakinfood' ),
			'search_items'  => __( 'Search Recipe Tags', 'freakinfood' ),
			'all_items'     => __( 'All Recipe Tags', 'freakinfood' ),
			'edit_item'     => __( 'Edit Recipe Tag', 'freakinfood' ),
			'add_new_item'  => __( 'Add New Recipe Tag', 'freakinfood' ),
		),
		'hierarchical' => false,
		'public'       => true,
		'show_in_rest' => true,
		'rewrite'      => array( 'slug' => 'recipe-tag' ),
	) );

	// Pre-populate default recipe tags
	$default_tags = array( 'Fusion', 'Italian', 'Vietnamese', 'Swedish', 'Stories', 'Reviews' );
	foreach ( $default_tags as $tag ) {
		if ( ! term_exists( $tag, 'recipe_tag' ) ) {
			wp_insert_term( $tag, 'recipe_tag' );
		}
	}
}
add_action( 'init', 'freakinfood_register_taxonomies' );

/**
 * Include additional theme files
 */
require_once FREAKINFOOD_DIR . '/inc/customizer.php';

/**
 * Custom excerpt length
 */
function freakinfood_excerpt_length( $length ) {
	return 25;
}
add_filter( 'excerpt_length', 'freakinfood_excerpt_length' );

/**
 * Custom excerpt more text
 */
function freakinfood_excerpt_more( $more ) {
	return '&hellip;';
}
add_filter( 'excerpt_more', 'freakinfood_excerpt_more' );

/**
 * Add body classes
 */
function freakinfood_body_classes( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'ff-front-page';
	}
	if ( is_singular( 'post' ) ) {
		$classes[] = 'ff-single-post';
	}
	return $classes;
}
add_filter( 'body_class', 'freakinfood_body_classes' );
