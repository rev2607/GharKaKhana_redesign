/**
 * Main JavaScript file for Ghar Ka Khana theme
 */

;(($) => {
  $(document).ready(() => {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault()

      var target = this.hash
      var $target = $(target)

      if ($target.length) {
        var headerHeight = $(".site-header").outerHeight() || 80

        $("html, body").animate(
          {
            scrollTop: $target.offset().top - headerHeight,
          },
          800,
          "swing",
        )
      }
    })

    // Mobile menu toggle
    $(".mobile-menu-toggle").on("click", function () {
      $(".main-nav ul").slideToggle()
      $(this).toggleClass("active")
    })

    // Header scroll effect
    $(window).scroll(() => {
      var scroll = $(window).scrollTop()

      if (scroll >= 100) {
        $(".site-header").addClass("scrolled")
      } else {
        $(".site-header").removeClass("scrolled")
      }
    })

    // Add animation on scroll
    function animateOnScroll() {
      $(".feature-card").each(function () {
        var elementTop = $(this).offset().top
        var elementBottom = elementTop + $(this).outerHeight()
        var viewportTop = $(window).scrollTop()
        var viewportBottom = viewportTop + $(window).height()

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          $(this).addClass("animate-in")
        }
      })
    }

    // Run animation on scroll
    $(window).on("scroll", animateOnScroll)
    animateOnScroll() // Run once on load

    // Phone number click tracking (if analytics is needed)
    $('a[href^="tel:"]').on("click", () => {
      // Add analytics tracking here if needed
      console.log("Phone number clicked")
    })

    // Form validation (if contact form is added later)
    $(".contact-form").on("submit", function (e) {
      var isValid = true

      $(this)
        .find("input[required], textarea[required]")
        .each(function () {
          if (!$(this).val().trim()) {
            isValid = false
            $(this).addClass("error")
          } else {
            $(this).removeClass("error")
          }
        })

      if (!isValid) {
        e.preventDefault()
        alert("Please fill in all required fields.")
      }
    })

    // Lazy loading for images (basic implementation)
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove("lazy")
            imageObserver.unobserve(img)
          }
        })
      })

      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img)
      })
    }

    // Add loading state to buttons
    $(".btn-primary, .btn-secondary").on("click", function () {
      if ($(this).attr("href").startsWith("tel:")) {
        $(this).addClass("loading")
        setTimeout(() => {
          $(this).removeClass("loading")
        }, 2000)
      }
    })
  })

  // Window resize handler
  $(window).resize(() => {
    // Hide mobile menu on resize
    if ($(window).width() > 768) {
      $(".main-nav ul").removeAttr("style")
      $(".mobile-menu-toggle").removeClass("active")
    }
  })
})(window.jQuery)

// Add CSS for animations and mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style")
  style.textContent = `
        .site-header.scrolled {
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        
        .feature-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .feature-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .btn-primary.loading,
        .btn-secondary.loading {
            opacity: 0.7;
            pointer-events: none;
        }
        
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block !important;
                color: #333;
                padding: 10px;
            }
            
            .main-nav ul {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                flex-direction: column;
                padding: 1rem;
            }
            
            .main-nav ul li {
                margin: 0.5rem 0;
            }
            
            .cta-button {
                margin-top: 1rem;
            }
        }
        
        .error {
            border-color: #e74c3c !important;
            background-color: #fdf2f2 !important;
        }
    `
  document.head.appendChild(style)
})
