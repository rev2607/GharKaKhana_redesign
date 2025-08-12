/**
 * Main JavaScript file for Ghar Ka Khana theme
 */

;(($) => {
  // Declare gtag variable
  var gtag

  $(document).ready(() => {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault()

      var target = this.hash
      var $target = $(target)

      if ($target.length) {
        $("html, body").animate(
          {
            scrollTop: $target.offset().top - 80,
          },
          800,
          "swing",
        )
      }
    })

    // Mobile menu toggle
    $(".mobile-menu-toggle").on("click", function () {
      $(this).toggleClass("active")
      $(".main-nav").toggleClass("active")
    })

    // Close mobile menu when clicking on a link
    $(".main-nav a").on("click", () => {
      $(".mobile-menu-toggle").removeClass("active")
      $(".main-nav").removeClass("active")
    })

    // Header scroll effect
    $(window).on("scroll", () => {
      var scroll = $(window).scrollTop()

      if (scroll >= 100) {
        $(".site-header").addClass("scrolled")
      } else {
        $(".site-header").removeClass("scrolled")
      }
    })

    // Animate elements on scroll
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

    // Phone number click tracking (for analytics)
    $('a[href^="tel:"]').on("click", function () {
      var phoneNumber = $(this).attr("href").replace("tel:", "")
      console.log("Phone call initiated:", phoneNumber)

      // You can add Google Analytics tracking here
      if (typeof gtag !== "undefined") {
        gtag("event", "phone_call", {
          phone_number: phoneNumber,
        })
      }
    })

    // Order button click tracking
    $(".btn-primary, .order-btn").on("click", function () {
      var buttonText = $(this).text()
      console.log("Order button clicked:", buttonText)

      // You can add Google Analytics tracking here
      if (typeof gtag !== "undefined") {
        gtag("event", "order_button_click", {
          button_text: buttonText,
        })
      }
    })

    // Add loading animation to buttons
    $(".btn-primary, .btn-secondary").on("click", function () {
      var $btn = $(this)
      var originalText = $btn.text()

      if ($btn.attr("href").startsWith("tel:")) {
        $btn.text("Calling...")
        setTimeout(() => {
          $btn.text(originalText)
        }, 2000)
      }
    })

    // Lazy loading for images
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

    // Add hover effects to cards
    $(".feature-card, .menu-item, .contact-item").hover(
      function () {
        $(this).addClass("hover-effect")
      },
      function () {
        $(this).removeClass("hover-effect")
      },
    )

    // Form validation (if contact form is added later)
    $("form").on("submit", function (e) {
      var isValid = true

      $(this)
        .find("input[required], textarea[required]")
        .each(function () {
          if ($(this).val().trim() === "") {
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

    // Add CSS classes for animations
    $("<style>")
      .prop("type", "text/css")
      .html(`
                .feature-card {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s ease;
                }
                .feature-card.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                .site-header.scrolled {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                }
                .hover-effect {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                }
                .mobile-menu-toggle {
                    display: none;
                    flex-direction: column;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 5px;
                }
                .mobile-menu-toggle span {
                    width: 25px;
                    height: 3px;
                    background: #333;
                    margin: 3px 0;
                    transition: 0.3s;
                }
                .mobile-menu-toggle.active span:nth-child(1) {
                    transform: rotate(-45deg) translate(-5px, 6px);
                }
                .mobile-menu-toggle.active span:nth-child(2) {
                    opacity: 0;
                }
                .mobile-menu-toggle.active span:nth-child(3) {
                    transform: rotate(45deg) translate(-5px, -6px);
                }
                @media (max-width: 768px) {
                    .mobile-menu-toggle {
                        display: flex;
                    }
                    .main-nav {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    }
                    .main-nav.active {
                        display: block;
                    }
                    .main-nav ul {
                        flex-direction: column;
                        padding: 1rem;
                    }
                }
            `)
      .appendTo("head")
  })
})(window.jQuery)
