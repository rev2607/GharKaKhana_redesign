<?php
/**
 * The main template file
 *
 * @package Ghar_Ka_Khana
 */

get_header(); ?>

<main id="primary" class="site-main">
    
    <!-- Hero Section -->
    <section class="hero-section" id="home">
        <div class="container">
            <div class="hero-content">
                <div class="hero-left">
                    <!-- Special Offer Card -->
                    <div class="special-offer">
                        <div class="offer-label">SPECIAL LAUNCH OFFER</div>
                        <div class="offer-title">Your First Meal for just</div>
                        <div class="offer-price">₹69!</div>
                        <div class="offer-subtitle">One-time offer for the first week only</div>
                    </div>

                    <!-- Main Headline -->
                    <h1 class="hero-title">
                        Guaranteed Taste, Quality, Authentic & 
                        <span class="highlight">Hygienic Homely Meals</span>
                    </h1>

                    <!-- Delivery Info -->
                    <div class="delivery-info">
                        <div class="delivery-icon">🚚</div>
                        <div class="delivery-text">
                            <h3>FREE Home Delivery</h3>
                            <p>Free delivery available within CBD Belapur Sectors 11-15, 19-23, and 29-31</p>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="hero-buttons">
                        <a href="#contact" class="btn-primary">Order Now - ₹69</a>
                        <a href="#menu" class="btn-secondary">View Full Menu</a>
                    </div>

                    <!-- Trust Indicators -->
                    <div class="trust-indicators">
                        <div class="trust-item">
                            <span class="trust-icon">⭐</span>
                            <span>4.8/5 Rating</span>
                        </div>
                        <div class="trust-item">
                            <span class="trust-icon">🛡️</span>
                            <span>100% Hygienic</span>
                        </div>
                        <div class="trust-item">
                            <span class="trust-icon">📞</span>
                            <span>8108 325 444</span>
                        </div>
                    </div>
                </div>

                <div class="hero-right">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/food.png" 
                         alt="Delicious homely meal" class="food-image">
                    <div class="fresh-badge">Fresh Daily!</div>
                    <div class="delivery-card">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/delivery.png" 
                             alt="Delivery person" class="delivery-avatar">
                        <div class="delivery-info-card">
                            <h4>Friendly Delivery</h4>
                            <p>To your doorstep</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Section -->
    <section class="why-choose-section" id="about">
        <div class="container">
            <h2 class="section-title">Why Choose Neelam's Ghar-Ka-Khana?</h2>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🏠</div>
                    <h3>Homely Taste</h3>
                    <p>Authentic home-cooked meals prepared with love and traditional recipes passed down through generations.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🌿</div>
                    <h3>Fresh Ingredients</h3>
                    <p>We use only the freshest, locally sourced ingredients to ensure the highest quality and nutritional value.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🧼</div>
                    <h3>100% Hygienic</h3>
                    <p>Strict hygiene protocols and clean cooking environment to ensure your safety and health.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🚚</div>
                    <h3>Fast Delivery</h3>
                    <p>Quick and reliable delivery service to bring hot, fresh meals right to your doorstep.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">💰</div>
                    <h3>Affordable Prices</h3>
                    <p>Delicious homely meals at pocket-friendly prices without compromising on quality or taste.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">👨‍🍳</div>
                    <h3>Expert Cooking</h3>
                    <p>Prepared by experienced home cooks who understand the art of creating perfect homely meals.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section class="menu-section" id="menu">
        <div class="container">
            <h2 class="section-title">Our Menu</h2>
            <p style="text-align: center; margin-bottom: 3rem; color: #666;">
                Discover our variety of authentic homely meals prepared fresh daily
            </p>
            
            <?php
            // Display WordPress content if available
            if (have_posts()) :
                while (have_posts()) :
                    the_post();
                    the_content();
                endwhile;
            endif;
            ?>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
        <div class="container">
            <h2 class="section-title">Contact Us</h2>
            <div style="text-align: center; max-width: 600px; margin: 0 auto;">
                <p style="margin-bottom: 2rem; color: #666;">
                    Ready to taste authentic homely meals? Get in touch with us today!
                </p>
                
                <div class="contact-info" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                    <div>
                        <h3 style="color: #e74c3c; margin-bottom: 1rem;">📞 Phone</h3>
                        <p>8108 325 444</p>
                    </div>
                    <div>
                        <h3 style="color: #e74c3c; margin-bottom: 1rem;">📍 Delivery Area</h3>
                        <p>CBD Belapur Sectors<br>11-15, 19-23, and 29-31</p>
                    </div>
                    <div>
                        <h3 style="color: #e74c3c; margin-bottom: 1rem;">⏰ Timing</h3>
                        <p>Daily: 11:00 AM - 9:00 PM</p>
                    </div>
                </div>
                
                <a href="tel:8108325444" class="btn-primary" style="display: inline-block;">Call Now to Order</a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
