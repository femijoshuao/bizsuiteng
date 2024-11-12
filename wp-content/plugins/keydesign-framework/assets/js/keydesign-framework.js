jQuery(document).ready(function($) {
    $(".zoom-button-effect .elementskit-btn,.zoom-button-effect .keydesign-button").each(function() {
        $(this).wrapInner("<span class='button-wrapper'></span>");
    });
    $(".flip-button-effect .elementskit-btn,.flip-button-effect .keydesign-button,.flip-button-effect .elementskit-single-pricing .elementskit-pricing-btn").each(function() {
        $button_text = $(this).text().trim();
        $(this).attr("data-text", $button_text);
        // $(this).wrapInner("<span class='button-wrapper'></span>");
        $(this).contents().filter(function() {
            return this.nodeType == 3 && $.trim(this.textContent) != '';
        }).wrap('<span class="button-wrapper" />');
    });
    if ($('.with-sidebar.sticky-sidebar').length) {
        $(".with-sidebar.sticky-sidebar .keydesign-sidebar").css('--header-height', $("#site-header").outerHeight() + "px");
    }
});

jQuery(function($) {
    $(".ekit-wid-con .elementskit-menu-hamburger").click(function() {
        $("#site-header").css('--mobile-menu-height', $("#site-header").outerHeight() + "px");
        $(this).toggleClass("active");
        $("#site-header").toggleClass("mobile-menu-active");
    });
    $(".elementskit-navbar-nav li a").click(function() {
        if ($(".elementskit-menu-container").hasClass("ekit-nav-menu-one-page-yes")) {
            $("#site-header").removeClass("mobile-menu-active");
            $(".ekit-wid-con .elementskit-menu-hamburger").removeClass("active");
        }
    });
    if ($('.site-header.show-on-scroll').length) {
        var my_window = $(window);
        var position = my_window.scrollTop();
        if (position > 95) {
            $('.site-header').addClass('scrolled');
        } else {
            $('.site-header').removeClass('scrolled');
        }
        my_window.scroll(function() {
            if (my_window.scrollTop() > 0) {
                if (my_window.scrollTop() > position) {
                    $('.site-header.show-on-scroll').addClass('hide-menu');
                } else {
                    $('.site-header.show-on-scroll').removeClass('hide-menu');
                }
                if (position > 95) {
                    $('.site-header').addClass('scrolled');
                } else {
                    $('.site-header').removeClass('scrolled');
                }
                position = my_window.scrollTop();
            }
        });
    }
    if ($('.transform-3d').length) {
        var my_window = $(window);
        my_window.scroll(function() {
            if (my_window.scrollTop() > 0) {
                var angle = 12 - my_window.scrollTop() / 30;
                if (angle > 0) {
                    $('.transform-3d img').css('transform', 'rotateX(' + angle + 'deg)');
                }
            }
        });
    }
    if ($('.sticky-navigation').length) {
        var navLinks = document.querySelectorAll(".sticky-navigation .ekit-stylish-list a");
        var sections = document.querySelectorAll("#main .e-con.e-flex.sticky-section");
        var menuHeight = document.querySelector('.sticky-navigation').offsetHeight + 5;

        function changeActiveLink() {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

            sections.forEach(function(section) {
                var sectionTop = section.offsetTop - menuHeight;
                var sectionBottom = sectionTop + section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    var targetLink = document.querySelector('a[href="#' + section.id + '"]');
                    navLinks.forEach(function(link) {
                        link.classList.remove("active");
                    });
                    targetLink.classList.add("active");
                }
            });
        }
        document.addEventListener("scroll", changeActiveLink);
    }
});