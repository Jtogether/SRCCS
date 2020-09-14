// // init
// var rotogram_Json = [
//     {
//         "name":'今日公告：请吊机上的人员不要乱扔垃圾',
//         "text":'PRTM最近的跨行bai业研究表明，研发费用与业务增长、获利性、市场覆盖率或者股东价值之间只有很少或者几乎没有关联。'
//     },
//     {
//         "name":'关于：研发费用与业务增长不关联问题'
//     }
// ]


var xmlHR;
var li_content = document.querySelectorAll("li");
var ul_f = document.querySelector(".rotogram");

if(window.XMLHttpRequest){
    xmlHR = new XMLHttpRequest();
}else {
    xmlHR = new ActiveXObject('Microsoft.XMLHTTP');
};

xmlHR.open("GET","main/json/rotogram.json");
xmlHR.send();

xmlHR.onreadystatechange = function () {
    if (xmlHR.readyState == 4 && xmlHR.status == 200){
        var rotogram_Json = xmlHR.responseText;
        rotogram_Json = JSON.parse(rotogram_Json);
        // console.log(rotogram_Json);
        for (let i = 0;i < rotogram_Json.length;i++){

            li_content[i].innerHTML = '<div style="height: 100%;width: 7em;background: rgba(43,43,43,.4);display: flex;float: right"><p style="margin: auto;width: 6em;">'+ rotogram_Json[i].name+'</p></div>'
        }
    }
}


// (function () {
//     for (let i = 0;i < rotogram_Json.length;i++){
//
//         li_content[i].innerHTML = '<div style="height: 100%;width: 7em;background: rgba(43,43,43,.4);display: flex;float: right"><p style="margin: auto;width: 6em;">'+ rotogram_Json[i].name+'</p></div>'
//     }
// })()


// 自动轮播
var timer = null;
function autoplay() {
    var num = 0;
    timer = setInterval(function () {
        if (num < 2){
            ul_f.style.left = - num * 100 + '%';
            num++;
        }else {
            num = 0;
        }
    },4000)
}
setTimeout(autoplay,1000);


// 操作列表init
{
    let list_Json = [
        {
            "id": 1,
            "classname": 'icon-kucun',
            "text":'项目列表'
        },
        {
            "id": 2,
            "classname": 'icon-xiaoshou',
            "text": '任务列表'
        },
        {
            "id": 3,
            "classname": 'icon-pandian',
            "text": '项目审核'
        },
        {
            "id": 4,
            "classname": 'icon-qudao',
            "text": '任务审核'
        },
        {
            "id": 5,
            "classname": 'icon-baoming',
            "text": '项目添加'
        },
        {
            "id": 6,
            "classname": 'icon-gongdan',
            "text": '任务添加'
        },
        {
            "id": 7,
            "classname": 'icon-baoxiao',
            "text": '供应商月结'
        },
        {
            "id": 8,
            "classname": 'icon-sunyi ',
            "text": '进项合同表'
        },
    ]

    // let itemlist = document.querySelector('.main-content-itemlist')
    // for (let i = 0; i < list_Json.length;i++){
    //     if ( i != 3){
    //         itemlist.innerHTML = '<div class="item"><div class="item-icon '+ list_Json[i].classname +'"></div><p class="item-text">'+ list_Json[i].text +'</p></div>'
    //     }else {
    //         itemlist.innerHTML = '<div class="item"><div class="item-icon '+ list_Json[i].classname +'"></div><p class="item-text">'+ list_Json[i].text +'</p></div><br/>'
    //     }
    // }
    let itemlist = document.querySelectorAll('.item')
    for (let i = 0; i < list_Json.length;i++){

        itemlist[i].innerHTML = '<div class="item" id="item_'+ list_Json[i].id +'" onclick="openPage('+ list_Json[i].id +')"><div class="item-icon '+ list_Json[i].classname +'"></div><p class="item-text">'+ list_Json[i].text +'</p></div>'
    }

    function openPage(pid){
        switch (pid) {
            case 5:{
                localStorage.setItem("list_id","1")
                appcan.window.open({
                    name: "application_form",
                    dataType:0,
                    anild: 8,
                    data: "application_form.html",
                })
            }
            break;
            case 6:{
                localStorage.setItem("list_id","2")
                appcan.window.open({
                    name: "application_form",
                    dataType:0,
                    anild: 8,
                    data: "application_form.html",
                })
            }
                break;
            case 7:{
                localStorage.setItem("list_id","0")
                appcan.window.open({
                    name: "application_form",
                    dataType:0,
                    anild: 8,
                    data: "application_form.html",
                })
            }
            break;
        }
    }
}

