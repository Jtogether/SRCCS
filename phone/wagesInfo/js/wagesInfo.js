(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.close(-1);
    });
    appcan.button("#nav-right", "btn-act",
    function() {});

    // appcan.ready(function() {
        // $.scrollbox($("body")).on("releaseToReload",
        // function() { //After Release or call reload function,we reset the bounce
            // $("#ScrollContent").trigger("reload", this);
        // }).on("onReloading",
        // function(a) { //if onreloading status, drag will trigger this event
        // }).on("dragToReload",
        // function() { //drag over 30% of bounce height,will trigger this event
        // }).on("draging",
        // function(status) { //on draging, this event will be triggered.
        // }).on("release",
        // function() { //on draging, this event will be triggered.
        // }).on("scrollbottom",
        // function() { //on scroll bottom,this event will be triggered.you should get data from server
            // $("#ScrollContent").trigger("more", this);
        // }).hide();
    // })

	
})($);

var w = [
    {
        "name":"小明",
        "February":"2",
        "March":"31",
        "April":"30",
        "May":"26",
        "June":"30",
        "July":"29",
        "August":"31",
        "September":"26",
        "October":"31",
        "work":"7.86667",
        "money":"￥8000",
        "pay":"￥62933.33" 
    },
    {
        "name":"小蓝",
        "February":"2",
        "March":"31",
        "April":"30",
        "May":"31",
        "June":"30",
        "July":"14",
        "August":"29",
        "September":"28",
        "October":"4",
        "work":"6.63333",
        "money":"￥3500",
        "pay":"￥23216.67" 
    },
    {
        "name":"小红",
        "February":"0",
        "March":"21",
        "April":"30",
        "May":"31",
        "June":"30",
        "July":"31",
        "August":"30",
        "September":"28",
        "October":"4",
        "work":"6.83333",
        "money":"￥2600",
        "pay":"￥17766.67" 
    }
]
