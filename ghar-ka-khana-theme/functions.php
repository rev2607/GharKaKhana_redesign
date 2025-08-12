<?php
/**
 * Ghar Ka Khana Theme Functions
 */

// Theme setup
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
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'ghar-ka-khana'),
    ));
}
add_action('after_setup_theme', 'ghar_ka_khana_setup');

// Enqueue styles and scripts
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

// Customizer settings
function ghar_ka_khana_customize_register($wp_customize) {
    // Add section for theme options
    $wp_customize->add_section('ghar_ka_khana_options', array(
        'title' => __('Ghar Ka Khana Options', 'ghar-ka-khana'),
        'priority' => 30,
    ));
    
    // Phone number setting
    $wp_customize->add_setting('phone_number', array(
        'default' => '8108 325 444',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('phone_number', array(
        'label' => __('Phone Number', 'ghar-ka-khana'),
        'section' => 'ghar_ka_khana_options',
        'type' => 'text',
    ));
    
    // Special offer price
    $wp_customize->add_setting('offer_price', array(
        'default' => '69',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('offer_price', array(
        'label' => __('Special Offer Price', 'ghar-ka-khana'),
        'section' => 'ghar_ka_khana_options',
        'type' => 'text',
    ));
    
    // Delivery areas
    $wp_customize->add_setting('delivery_areas', array(
        'default' => 'CBD Belapur Sectors 11-15, 19-23, and 29-31',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('delivery_areas', array(
        'label' => __('Delivery Areas', 'ghar-ka-khana'),
        'section' => 'ghar_ka_khana_options',
        'type' => 'textarea',
    ));
    
    // Business hours
    $wp_customize->add_setting('business_hours', array(
        'default' => 'Daily: 11:00 AM - 9:00 PM',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('business_hours', array(
        'label' => __('Business Hours', 'ghar-ka-khana'),
        'section' => 'ghar_ka_khana_options',
        'type' => 'text',
    ));
}
add_action('customize_register', 'ghar_ka_khana_customize_register');

// Widget areas
function ghar_ka_khana_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'ghar-ka-khana'),
        'id' => 'footer-widgets',
        'description' => __('Add widgets here to appear in your footer.', 'ghar-ka-khana'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'ghar_ka_khana_widgets_init');

// Custom excerpt length
function ghar_ka_khana_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'ghar_ka_khana_excerpt_length');

// Remove admin bar for non-admins
function ghar_ka_khana_remove_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'ghar_ka_khana_remove_admin_bar');

// Add custom body classes
function ghar_ka_khana_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'front-page';
    }
    return $classes;
}
add_filter('body_class', 'ghar_ka_khana_body_classes');

// Security enhancements
function ghar_ka_khana_security() {
    // Remove WordPress version from head
    remove_action('wp_head', 'wp_generator');
    
    // Remove RSD link
    remove_action('wp_head', 'rsd_link');
    
    // Remove wlwmanifest link
    remove_action('wp_head', 'wlwmanifest_link');
}
add_action('init', 'ghar_ka_khana_security');

// Optimize loading
function ghar_ka_khana_optimize() {
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    
    // Remove block library CSS if not using Gutenberg
    wp_dequeue_style('wp-block-library');
}
add_action('wp_enqueue_scripts', 'ghar_ka_khana_optimize');
?>
