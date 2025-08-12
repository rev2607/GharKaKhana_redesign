<?php
/**
 * The header for our theme
 *
 * @package Ghar_Ka_Khana
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'ghar-ka-khana'); ?></a>

    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-content">
                <div class="site-branding">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="logo" rel="home">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="<?php bloginfo('name'); ?>">
                            <?php bloginfo('name'); ?>
                        </a>
                        <?php
                    }
                    ?>
                </div>

                <nav id="site-navigation" class="main-nav">
                    <?php ghar_ka_khana_mobile_menu_button(); ?>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'container'      => false,
                        'fallback_cb'    => 'ghar_ka_khana_fallback_menu',
                        'walker'         => new Ghar_Ka_Khana_Walker_Nav_Menu(),
                    ));
                    ?>
                    <a href="#contact" class="cta-button">Order Now</a>
                </nav>
            </div>
        </div>
    </header>
</div>

<?php
/**
 * Fallback menu if no menu is assigned
 */
function ghar_ka_khana_fallback_menu() {
    echo '<ul id="primary-menu">';
    echo '<li><a href="#home">Home</a></li>';
    echo '<li><a href="#menu">Menu</a></li>';
    echo '<li><a href="#about">How It Works</a></li>';
    echo '<li><a href="#about">About</a></li>';
    echo '<li><a href="#contact">Contact</a></li>';
    echo '</ul>';
}
?>
