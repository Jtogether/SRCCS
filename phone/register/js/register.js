function checkInfo(){
    let userName = document.getElementById('username').value;
    let psw = document.getElementById('psword').value;
    let pswa = document.getElementById('pswordagain').value;
    let info = {};

    if ( userName === "" && psw === "" && pswa === ""){
        alert("必填项请填满!")
    }else if ( psw === pswa){
        info = {
            "username": userName,
            "psw": psw
        };
        localStorage.setItem("user",JSON.stringify(info));
        alert("注册成功!");
        appcan.window.open({
            name: "login",
            dataType:0,
            anild: 8,
            data: "login.html",
        });
    }else {
        alert("两次密码不正确！")
    }
}

function pushToLogin() {
    appcan.window.open({
        name: "login",
        dataType:0,
        anild: 8,
        data: "login.html",
    });
}