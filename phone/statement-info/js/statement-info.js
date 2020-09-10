(function($) {
    appcan.button("#nav-left", "btn-act",
    function run() {
        var win = appcan.require('window');
        win.close({
            aniId: 17,
            animDuration: 1000
        });
    })
//         appcan.window.close({
//             aniId: 17,
//             animDuration: 1000
//         });
//     })
    appcan.button("#nav-right", "btn-act",
    function() {});

    appcan.ready(function() {
        $.scrollbox($("body")).on("releaseToReload",
        function() { //After Release or call reload function,we reset the bounce
            $("#ScrollContent").trigger("reload", this);
        }).on("onReloading",
        function(a) { //if onreloading status, drag will trigger this event
        }).on("dragToReload",
        function() { //drag over 30% of bounce height,will trigger this event
        }).on("draging",
        function(status) { //on draging, this event will be triggered.
        }).on("release",
        function() { //on draging, this event will be triggered.
        }).on("scrollbottom",
        function() { //on scroll bottom,this event will be triggered.you should get data from server
            $("#ScrollContent").trigger("more", this);
        }).hide();
    })

})($);

// function goBack() {
//     appcan.window.close({
//              aniId: 17,
//              animDuration: 1000
//          });
// }
