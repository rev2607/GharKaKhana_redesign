<?php get_header(); ?>

<main id="main" class="site-main error-404">
    <div class="container">
        <div class="error-content" style="text-align: center; padding: 100px 0;">
            <h1 style="font-size: 6rem; color: #e67e22; margin-bottom: 1rem;">404</h1>
            <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #2c3e50;">Oops! Page Not Found</h2>
            <p style="font-size: 1.2rem; color: #666; margin-bottom: 2rem;">
                The page you're looking for seems to have gone missing, just like the last piece of our delicious thali!
            </p>
            <div style="margin: 2rem 0;">
                <a href="<?php echo home_url(); ?>" class="btn-primary">🏠 Go Back Home</a>
                <a href="tel:<?php echo esc_attr(str_replace(' ', '', get_theme_mod('phone_number', '8108325444'))); ?>" class="btn-secondary">📞 Call to Order</a>
            </div>
            <div style="margin-top: 3rem;">
                <img src="<?php echo get_template_directory_uri(); ?>/images/food.png" alt="Delicious Food" style="width: 200px; height: 200px; border-radius: 50%; opacity: 0.5;">
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
