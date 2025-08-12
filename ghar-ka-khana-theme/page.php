<?php get_header(); ?>

<main id="main" class="site-main">
    <div class="container" style="padding: 120px 20px 80px;">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header" style="text-align: center; margin-bottom: 3rem;">
                    <h1 class="entry-title" style="font-size: 3rem; color: #2c3e50; margin-bottom: 1rem;"><?php the_title(); ?></h1>
                </header>

                <div class="entry-content" style="max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 1.1rem;">
                    <?php
                    the_content();
                    
                    wp_link_pages(array(
                        'before' => '<div class="page-links">',
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
            </article>

            <div style="text-align: center; margin: 3rem 0; padding: 2rem; background: #f8f9fa; border-radius: 15px;">
                <h3 style="color: #e67e22; margin-bottom: 1rem;">Ready to Order?</h3>
                <p style="margin-bottom: 1.5rem; color: #666;">Experience the taste of authentic homemade food!</p>
                <a href="tel:<?php echo esc_attr(str_replace(' ', '', get_theme_mod('phone_number', '8108325444'))); ?>" class="btn-primary">📞 Call Now - <?php echo esc_html(get_theme_mod('phone_number', '8108 325 444')); ?></a>
            </div>

        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>
