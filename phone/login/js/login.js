function checkUaP(){
    let userName = document.getElementById('username').value;
    let psWord = document.getElementById('password').value;
    var userArr = JSON.parse(localStorage.getItem("user"));
    console.log(userName);
    console.log(psWord);
    console.log(userArr);
    var flag=false;
    var index=0;
    //遍历数组进行匹配
    for (var i=0; i < userArr.length; i++) {
        //判断是否有相同账号
        if (userName == userArr[i].username) {
            //有这个账号
            flag=true;
            index=i;
            localStorage.setItem('userId',index);
        }
    }
    if (flag) {
        if (psWord == userArr[index].psw){
            appcan.window.open({
                name: "index",
                dataType:0,
                anild: 8,
                data: "index.html",
            })
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        alert("登录成功！")
        }else {
            alert("账号或密码错误！");
        }
    }   
}
function pushToRegister() {
    appcan.window.open({
        name: "register",
        dataType:0,
        anild: 8,
        data: "register.html",
    });
}

function pushToChangePsw() {
    appcan.window.open({
        name: "changePsw",
        dataType:0,
        anild: 8,
        data: "changePsw.html",
    });
}