# FreakinFood — WordPress Theme

A custom classic WordPress theme for the FreakinFood food blog, designed for Elementor compatibility and Strato hosting.

## Theme Structure

```
wp-theme/
├── style.css              # Theme styles + metadata
├── functions.php          # Theme setup, menus, taxonomies
├── header.php / footer.php
├── front-page.php         # Homepage
├── archive.php            # Recipes + Blog feed
├── single.php             # Single post template
├── page-explore.php       # Explore page (restaurants + maps)
├── page-about.php         # About + Collaborate page
├── taxonomy-recipe_tag.php
├── template-parts/        # Reusable components
├── inc/                   # Customizer, CPT registration
└── assets/                # CSS, JS, images, fonts
```

## Installation on Strato

1. Log in to your Strato WordPress admin panel
2. Go to **Appearance > Themes > Add New > Upload Theme**
3. Upload the `wp-theme` folder as a .zip file
4. Activate the theme

### Required Plugins
- **Elementor** (free) — Page builder for visual editing
- **Advanced Custom Fields (ACF)** — For Explore page restaurant cards and map embeds
- **Contact Form 7** or **WPForms** — For the collaboration form

### Recommended Plugins
- **Yoast SEO** — SEO optimization
- **WP Super Cache** — Performance caching
- **Smush** — Image optimization

## Setup After Activation

1. **Menus:** Go to Appearance > Menus, create a "Primary" menu with: Home, Recipes, Explore, About
2. **Static Front Page:** Go to Settings > Reading, set "Homepage" to a static page
3. **Recipe Tags:** Go to Posts > Recipe Tags, verify the default tags exist (Fusion, Italian, Vietnamese, Swedish, Stories, Reviews)
4. **Customizer:** Go to Appearance > Customize to set:
   - Hero section (title, subtitle, background image, CTA)
   - CTA section text
   - Contact email + social media links
5. **Explore Page:** Create a page, assign the "Explore" template, add restaurant data via ACF or Elementor
6. **About Page:** Create a page, assign the "About & Collaborate" template

## Design Tokens

All design tokens (colors, typography, spacing) are defined as CSS custom properties in `style.css` and `design/tokens.css`. Update these values to match the Figma design system.

## Development

The theme uses no build tools — it's pure PHP/HTML/CSS/JS for maximum WordPress compatibility. To develop locally:

1. Set up a local WordPress environment (Local by Flywheel, MAMP, or wp-env)
2. Clone/copy the `wp-theme` folder into `wp-content/themes/freakinfood`
3. Activate the theme in WP Admin
