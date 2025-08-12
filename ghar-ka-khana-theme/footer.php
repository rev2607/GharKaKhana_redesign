<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Ghar Ka Khana</h3>
                <p>Authentic homemade meals delivered fresh to your doorstep. Experience the taste of home-cooked food with the convenience of delivery.</p>
            </div>
            
            <div class="footer-section">
                <h3>Contact Info</h3>
                <p>📞 Phone: <a href="tel:<?php echo esc_attr(get_theme_mod('phone_number', '8108325444')); ?>"><?php echo esc_html(get_theme_mod('phone_number', '8108 325 444')); ?></a></p>
                <p>📍 Delivery: <?php echo esc_html(get_theme_mod('delivery_areas', 'CBD Belapur Sectors 11-15, 19-23, and 29-31')); ?></p>
                <p>⏰ Hours: <?php echo esc_html(get_theme_mod('business_hours', 'Daily: 11:00 AM - 9:00 PM')); ?></p>
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
                <p>🏠 Homemade Quality</p>
                <p>🚚 Free Delivery</p>
                <p>⭐ 4.8/5 Rating</p>
            </div>
        </div>
        
        <?php if (is_active_sidebar('footer-widgets')) : ?>
            <div class="footer-widgets">
                <?php dynamic_sidebar('footer-widgets'); ?>
            </div>
        <?php endif; ?>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved. | Made with ❤️ for homemade food lovers</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
