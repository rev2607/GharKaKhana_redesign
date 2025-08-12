<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Ghar_Ka_Khana
 */

get_header(); ?>

<main id="primary" class="site-main" style="padding: 120px 0 80px;">
    <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto;">
            <h1 style="font-size: 6rem; color: #e74c3c; margin-bottom: 1rem;">404</h1>
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">Oops! Page Not Found</h2>
            <p style="color: #666; margin-bottom: 2rem;">
                The page you're looking for seems to have gone missing, just like the last piece of your favorite meal!
            </p>
            <div style="margin-bottom: 3rem;">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-primary">Back to Home</a>
                <a href="tel:<?php echo esc_attr(str_replace(' ', '', ghar_ka_khana_get_option('phone_number', '8108325444'))); ?>" 
                   class="btn-secondary" style="margin-left: 1rem;">Order Food Instead</a>
            </div>
            <div style="font-size: 4rem; margin-bottom: 2rem;">🍽️</div>
            <p style="color: #999;">
                Why not order some delicious homely food while you're here?
            </p>
        </div>
    </div>
</main>

<?php get_footer(); ?>
