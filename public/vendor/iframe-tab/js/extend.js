$(function () {
    window.parent.iframeTabParent && 0 < $("a[iframe-extends=true]").length && function () {
        var a = window.parent.iframeTabParent, f = {
            addTab: function (c) {
                var d = 1 >= arguments.length || void 0 === arguments[1] ? "" : arguments[1],
                    e = 2 >= arguments.length || void 0 === arguments[2] ? "icon-circle" : arguments[2], b = "";
                "" !== d && (b += d + "-");
                d = '&nbsp;<i class="fa fa-fw feather ' + e + '"></i><p>' + (b + c.text()) + "</p>";
                e = c.attr("href");
                b = a.iframeTab.generateID(e);
                if (0 < a.elements.iframe_tab.find("#iframe-home-" + b).length) return a.elements.iframe_tab.find("#iframe-home-" +
                    b).click(), !1;
                var g = a.iframeTab.findIframeTabActiveElement();
                a.swiper.appendSlide(a.iframeTabTemplate.tabItem(d, b));
                a.elements.iframe_tabContent.append(a.iframeTabTemplate.tabContentItem(e, b));
                a.swiper.updateSlides();
                a.iframeTab.removeTabBarStyle();
                a.iframeTab.cacheUpdateTabBar(g);
                a.elements.iframe_tab.find("#iframe-home-" + b).click()
            }, init: function () {
                $(document).on("click", "a[iframe-tab=true]", function (c) {
                    f.addTab($(this));
                    c.preventDefault()
                })
            }
        };
        f.init()
    }()
});
