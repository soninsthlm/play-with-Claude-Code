<?php
/**
 * Theme Customizer settings — Editorial FreakinFood theme
 *
 * @package FreakinFood
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function freakinfood_customize_register( $wp_customize ) {

	// === Hero Section ===
	$wp_customize->add_section( 'ff_hero_section', array(
		'title'    => __( 'Hero Section', 'freakinfood' ),
		'priority' => 30,
	) );

	$wp_customize->add_setting( 'ff_hero_label', array(
		'default'           => 'Featured Story',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'ff_hero_label', array(
		'label'   => __( 'Hero Label (small text above title)', 'freakinfood' ),
		'section' => 'ff_hero_section',
		'type'    => 'text',
	) );

	$wp_customize->add_setting( 'ff_hero_title', array(
		'default'           => 'Modern Vietnamese Freshness: A Swedish Take.',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'ff_hero_title', array(
		'label'   => __( 'Hero Title', 'freakinfood' ),
		'section' => 'ff_hero_section',
		'type'    => 'textarea',
	) );

	$wp_customize->add_setting( 'ff_hero_subtitle', array(
		'default'           => 'An exploration of Nordic discipline meeting the aromatic vibrancy of the Saigon streets. Discover the delicate balance of dill, fish sauce, and summer light.',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'ff_hero_subtitle', array(
		'label'   => __( 'Hero Description', 'freakinfood' ),
		'section' => 'ff_hero_section',
		'type'    => 'textarea',
	) );

	$wp_customize->add_setting( 'ff_hero_cta_text', array(
		'default'           => 'Read the Story',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'ff_hero_cta_text', array(
		'label'   => __( 'CTA Button Text', 'freakinfood' ),
		'section' => 'ff_hero_section',
		'type'    => 'text',
	) );

	$wp_customize->add_setting( 'ff_hero_cta_link', array(
		'default'           => '#',
		'sanitize_callback' => 'esc_url_raw',
	) );
	$wp_customize->add_control( 'ff_hero_cta_link', array(
		'label'   => __( 'CTA Button Link', 'freakinfood' ),
		'section' => 'ff_hero_section',
		'type'    => 'url',
	) );

	$wp_customize->add_setting( 'ff_hero_image', array(
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	) );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'ff_hero_image', array(
		'label'   => __( 'Hero Featured Image', 'freakinfood' ),
		'section' => 'ff_hero_section',
	) ) );

	$wp_customize->add_setting( 'ff_hero_quote', array(
		'default'           => '"The soul of a kitchen is its heritage."',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'ff_hero_quote', array(
		'label'   => __( 'Hero Offset Quote', 'freakinfood' ),
		'section' => 'ff_hero_section',
		'type'    => 'textarea',
	) );

	// === Editorial Note (Sidebar) ===
	$wp_customize->add_section( 'ff_editorial_section', array(
		'title'    => __( 'Editorial Note', 'freakinfood' ),
		'priority' => 32,
	) );

	$wp_customize->add_setting( 'ff_editorial_note', array(
		'default'           => '"Food is never just food. It is a dialogue between where we come from and where we are standing right now."',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'ff_editorial_note', array(
		'label'   => __( 'Kitchen Note Quote', 'freakinfood' ),
		'section' => 'ff_editorial_section',
		'type'    => 'textarea',
	) );

	// === Newsletter Section ===
	$wp_customize->add_section( 'ff_newsletter_section', array(
		'title'    => __( 'Newsletter CTA', 'freakinfood' ),
		'priority' => 34,
	) );

	$wp_customize->add_setting( 'ff_newsletter_title', array(
		'default'           => 'The Weekly Curator',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'ff_newsletter_title', array(
		'label'   => __( 'Newsletter Title', 'freakinfood' ),
		'section' => 'ff_newsletter_section',
		'type'    => 'text',
	) );

	$wp_customize->add_setting( 'ff_newsletter_desc', array(
		'default'           => 'Receive a hand-picked collection of seasonal recipes, editorial essays, and culinary inspirations directly to your inbox.',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'ff_newsletter_desc', array(
		'label'   => __( 'Newsletter Description', 'freakinfood' ),
		'section' => 'ff_newsletter_section',
		'type'    => 'textarea',
	) );

	// === Contact & Social Links ===
	$wp_customize->add_section( 'ff_social_section', array(
		'title'    => __( 'Contact & Social Links', 'freakinfood' ),
		'priority' => 40,
	) );

	$wp_customize->add_setting( 'ff_contact_email', array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_email',
	) );
	$wp_customize->add_control( 'ff_contact_email', array(
		'label'   => __( 'Contact Email', 'freakinfood' ),
		'section' => 'ff_social_section',
		'type'    => 'email',
	) );

	$wp_customize->add_setting( 'ff_social_instagram_handle', array(
		'default'           => '@thetransnationalcurator',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'ff_social_instagram_handle', array(
		'label'   => __( 'Instagram Handle (for display)', 'freakinfood' ),
		'section' => 'ff_social_section',
		'type'    => 'text',
	) );

	$socials = array(
		'instagram' => 'Instagram URL',
		'tiktok'    => 'TikTok URL',
		'youtube'   => 'YouTube URL',
		'facebook'  => 'Facebook URL',
	);

	foreach ( $socials as $key => $label ) {
		$wp_customize->add_setting( "ff_social_{$key}", array(
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
		) );
		$wp_customize->add_control( "ff_social_{$key}", array(
			'label'   => __( $label, 'freakinfood' ),
			'section' => 'ff_social_section',
			'type'    => 'url',
		) );
	}
}
add_action( 'customize_register', 'freakinfood_customize_register' );
