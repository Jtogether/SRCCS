function form_list(obj) {
    // let obj = {
    //     ele: "#forList",
    //     data: ["用户名","密密麻麻","邮箱"]
    // }
    // let el = document.querySelector(obj.ele);
    // let data = obj.data;
    // el.innerHTML = "";
    // for (let i = 0; i < data.length; i++){
    //     let html = "<li><div class=\"form-item\"><div class=\"form-item-c\"><div ></div><p id=\"form-item-text\" class=\"form-item-text\">"+ obj.data[i] +"</p><input type=\"text\" id=\"form-item-content\" class=\"form-item-content\"/></div></div></li>"
    //     el.innerHTML = html;
    // }
    let title = document.getElementById('header_title')
    title.innerText = obj.title

    let el = $(obj.ele);
    let data = obj.data
    for (let i = 0; i < data.length; i++){
        let elem = $('<li><div class="form-item"><div class="form-item-c"><div ></div><p id="form-item-text" class="form-item-text">'+ data[i] +'</p><input type="text" id="form-item-content" class="form-item-content"/></div></div></li>')
        el.append(elem)
    }
}

let nav_left_button = document.getElementById('nav-left');
nav_left_button.onclick = function () {
    appcan.window.close({
        anild: 17,
        animDuration: 1000
    })
}
