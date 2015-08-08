$script.ready(["jquery", "mui"], function() {
    "use strict";
    jQuery(function(e) {
        function a() {
            var a = e(mui.overlay("on"));
            n.appendTo(a).show().animate({left: "0px"}, 150);
        } {
            var n = e("#sidenav").detach();
            n.css("left"), e(document)
        }! function() {
            var a = e("strong", n);
            a.filter(":not(.active)").next().hide(), a.on("click", function() {
                e(this).next().slideToggle(200)
            })
        }(), e("#appbar-sidenav-toggle").on("click", a);
        var o = e(window),
            t = e(".mui-appbar").parents("header");
        o.scrollTop() &gt; 0 ? t.addClass("header-shadow") : o.one("scroll", function() {
            t.addClass("header-shadow")
        })
    })
});
