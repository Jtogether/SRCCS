(function($) {
   appcan.button("#nav-left", "btn-act",
    function run() {
          appcan.window.close({
              aniId: 17,
              animDuration: 1000
          })
            })
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
var a = [{
    number:"0000001",
    title : "项目一",
    begintime:"2019-09-04",  
    endtime:"2019-12-04",
    worktime:"92天",
    partment:"施工队",
    part:"建筑",
    suggest:"无",
    id:"1"
}, {
    number:"0000002",
    title : "项目二",
    begintime:"2019-12-04",  
    endtime:"2019-1-04",
    worktime:"30天",
    partment:"财务部",
    part:"财务",
    suggest:"统计工资发放",
    id:"2"
},
{
    number:"0000003",
    title : "项目三",
    begintime:"2020-01-05",  
    endtime:"2020-02-05",
    worktime:"30天",
    partment:"设计部",
    part:"设计",
    suggest:"设计建筑样式",
    id:"3"
},
{
     number:"0000004",
    title : "项目四",
    begintime:"2020-02-06",  
    endtime:"2020-3-06",
    worktime:"28天",
    partment:"购置部",
    part:"购置",
    suggest:"购置材料",
    id:"4"
}]