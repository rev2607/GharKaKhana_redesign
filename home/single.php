<?php get_header(); ?>

<main id="main" class="site-main">
    <div class="container" style="padding: 120px 20px 80px;">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header" style="text-align: center; margin-bottom: 2rem;">
                    <h1 class="entry-title" style="font-size: 2.5rem; color: #2c3e50; margin-bottom: 1rem;"><?php the_title(); ?></h1>
                    <div class="entry-meta" style="color: #666; margin-bottom: 2rem;">
                        <span>Published on <?php echo get_the_date(); ?></span>
                        <?php if (get_the_author()) : ?>
                            <span> by <?php the_author(); ?></span>
                        <?php endif; ?>
                    </div>
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

                <footer class="entry-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #eee; text-align: center;">
                    <?php
                    $categories_list = get_the_category_list(', ');
                    if ($categories_list) {
                        printf('<span class="cat-links">Categories: %1$s</span>', $categories_list);
                    }

                    $tags_list = get_the_tag_list('', ', ');
                    if ($tags_list) {
                        printf('<span class="tags-links" style="margin-left: 1rem;">Tags: %1$s</span>', $tags_list);
                    }
                    ?>
                </footer>
            </article>

            <div style="text-align: center; margin: 3rem 0;">
                <a href="<?php echo home_url(); ?>" class="btn-primary">← Back to Home</a>
                <a href="tel:<?php echo esc_attr(str_replace(' ', '', get_theme_mod('phone_number', '8108325444'))); ?>" class="btn-secondary">📞 Order Now</a>
            </div>

        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>
