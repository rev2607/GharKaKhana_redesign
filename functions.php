<?php
/**
 * Ghar Ka Khana functions and definitions
 *
 * @package Ghar_Ka_Khana
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function ghar_ka_khana_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('customize-selective-refresh-widgets');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'ghar-ka-khana'),
    ));
}
add_action('after_setup_theme', 'ghar_ka_khana_setup');

/**
 * Enqueue scripts and styles
 */
function ghar_ka_khana_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('ghar-ka-khana-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue custom JavaScript
    wp_enqueue_script('ghar-ka-khana-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
    
    // Add smooth scrolling for anchor links
    wp_add_inline_script('ghar-ka-khana-script', '
        jQuery(document).ready(function($) {
            $("a[href^=\'#\']").on("click", function(e) {
                e.preventDefault();
                var target = this.hash;
                var $target = $(target);
                if ($target.length) {
                    $("html, body").animate({
                        scrollTop: $target.offset().top - 80
                    }, 800);
                }
            });
            
            // Mobile menu toggle
            $(".mobile-menu-toggle").on("click", function() {
                $(".main-nav").toggleClass("active");
            });
        });
    ');
}
add_action('wp_enqueue_scripts', 'ghar_ka_khana_scripts');

/**
 * Add custom CSS for admin bar adjustment
 */
function ghar_ka_khana_admin_bar_css() {
    if (is_admin_bar_showing()) {
        echo '<style>
            .site-header { top: 32px !important; }
            @media screen and (max-width: 782px) {
                .site-header { top: 46px !important; }
            }
        </style>';
    }
}
add_action('wp_head', 'ghar_ka_khana_admin_bar_css');

/**
 * Customizer additions
 */
function ghar_ka_khana_customize_register($wp_customize) {
    // Add theme options section
    $wp_customize->add_section('ghar_ka_khana_options', array(
        'title'    => __('Theme Options', 'ghar-ka-khana'),
        'priority' => 30,
    ));

    // Phone number setting
    $wp_customize->add_setting('phone_number', array(
        'default'           => '8108 325 444',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('phone_number', array(
        'label'    => __('Phone Number', 'ghar-ka-khana'),
        'section'  => 'ghar_ka_khana_options',
        'type'     => 'text',
    ));

    // Special offer price setting
    $wp_customize->add_setting('offer_price', array(
        'default'           => '69',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('offer_price', array(
        'label'    => __('Special Offer Price', 'ghar-ka-khana'),
        'section'  => 'ghar_ka_khana_options',
        'type'     => 'text',
    ));

    // Delivery areas setting
    $wp_customize->add_setting('delivery_areas', array(
        'default'           => 'CBD Belapur Sectors 11-15, 19-23, and 29-31',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('delivery_areas', array(
        'label'    => __('Delivery Areas', 'ghar-ka-khana'),
        'section'  => 'ghar_ka_khana_options',
        'type'     => 'textarea',
    ));
}
add_action('customize_register', 'ghar_ka_khana_customize_register');

/**
 * Get customizer option with fallback
 */
function ghar_ka_khana_get_option($option, $default = '') {
    return get_theme_mod($option, $default);
}

/**
 * Add mobile menu toggle button
 */
function ghar_ka_khana_mobile_menu_button() {
    echo '<button class="mobile-menu-toggle" style="display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer;">☰</button>';
}

/**
 * Custom navigation walker for better mobile support
 */
class Ghar_Ka_Khana_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"sub-menu\">\n";
    }

    function end_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "$indent</ul>\n";
    }
}

/**
 * Add viewport meta tag
 */
function ghar_ka_khana_viewport_meta() {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
}
add_action('wp_head', 'ghar_ka_khana_viewport_meta', 1);

/**
 * Remove WordPress version from head
 */
remove_action('wp_head', 'wp_generator');

/**
 * Optimize WordPress head
 */
function ghar_ka_khana_optimize_head() {
    // Remove unnecessary links
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
}
add_action('init', 'ghar_ka_khana_optimize_head');

/**
 * Add structured data for local business
 */
function ghar_ka_khana_structured_data() {
    $phone = ghar_ka_khana_get_option('phone_number', '8108 325 444');
    $delivery_areas = ghar_ka_khana_get_option('delivery_areas', 'CBD Belapur Sectors 11-15, 19-23, and 29-31');
    
    $structured_data = array(
        '@context' => 'https://schema.org',
        '@type' => 'Restaurant',
        'name' => get_bloginfo('name'),
        'description' => get_bloginfo('description'),
        'telephone' => $phone,
        'servesCuisine' => 'Indian',
        'priceRange' => '₹',
        'address' => array(
            '@type' => 'PostalAddress',
            'addressLocality' => 'Navi Mumbai',
            'addressRegion' => 'Maharashtra',
            'addressCountry' => 'IN'
        )
    );
    
    echo '<script type="application/ld+json">' . json_encode($structured_data) . '</script>';
}
add_action('wp_head', 'ghar_ka_khana_structured_data');
