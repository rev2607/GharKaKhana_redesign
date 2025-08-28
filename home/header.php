<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Ghar Ka Khana - Neelam's authentic homemade food delivery service in CBD Belapur. Fresh, hygienic, and delicious meals delivered to your doorstep.">
    <meta name="keywords" content="homemade food, food delivery, CBD Belapur, authentic meals, hygienic food, Neelam's kitchen">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container">
        <div class="header-content">
            <div class="logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="<?php bloginfo('name'); ?>">
                <?php endif; ?>
            </div>
            
            <nav class="main-nav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu',
                    'container' => false,
                    'fallback_cb' => 'ghar_ka_khana_fallback_menu',
                ));
                ?>
            </nav>
            
            <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</header>

<?php
// Fallback menu if no menu is assigned
function ghar_ka_khana_fallback_menu() {
    echo '<ul class="nav-menu">';
    echo '<li><a href="#home">Home</a></li>';
    echo '<li><a href="#menu">Menu</a></li>';
    echo '<li><a href="#about">How It Works</a></li>';
    echo '<li><a href="#about">About</a></li>';
    echo '<li><a href="#contact">Contact</a></li>';
    echo '<li><a href="#contact" class="order-btn">Order Now</a></li>';
    echo '</ul>';
}
?>
