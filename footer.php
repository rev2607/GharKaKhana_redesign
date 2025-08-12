<?php
/**
 * The template for displaying the footer
 *
 * @package Ghar_Ka_Khana
 */
?>

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><?php bloginfo('name'); ?></h3>
                    <p>Authentic homely meals delivered fresh to your doorstep. Experience the taste of home-cooked food with guaranteed quality and hygiene.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p>📞 <?php echo esc_html(ghar_ka_khana_get_option('phone_number', '8108 325 444')); ?></p>
                    <p>📍 <?php echo esc_html(ghar_ka_khana_get_option('delivery_areas', 'CBD Belapur Sectors 11-15, 19-23, and 29-31')); ?></p>
                    <p>⏰ Daily: 11:00 AM - 9:00 PM</p>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#menu">Menu</a></p>
                    <p><a href="#about">About Us</a></p>
                    <p><a href="#contact">Contact</a></p>
                </div>
                
                <div class="footer-section">
                    <h3>Why Choose Us?</h3>
                    <p>✅ 100% Hygienic</p>
                    <p>🏠 Homely Taste</p>
                    <p>🚚 Free Delivery</p>
                    <p>⭐ 4.8/5 Rating</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved. | 
                   Designed with ❤️ for homely food lovers</p>
            </div>
        </div>
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
