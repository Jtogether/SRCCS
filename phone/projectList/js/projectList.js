(function($) {
    appcan.button("#nav-left", "btn-act",
    function() {
        appcan.window.close(-1);
    });
    
    appcan.button("#nav-right", "btn-act",
    function() {
        
    });

    $("#projectList").click(function(){
        appcan.window.open({
            name : 'projectList',
            data : 'projectList.html',
            anlid :10
         });
    });
    

	
})($);