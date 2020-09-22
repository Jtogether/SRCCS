function checkInfo(){
    //先获取所有用户的对象
    //变成数组
    if(localStorage.getItem("user")){
    //判断是否存在        
        var info = JSON.parse(localStorage.getItem("user"));    
    }else{        
        info = [];//创建一个新数组    
    }
    
    let userName = document.getElementById('username').value;
    let psw = document.getElementById('psword').value;
    let pswa = document.getElementById('pswordagain').value;
    
    for (var i=0; i < info.length; i++) {
      //判断是否有相同账号
      if (userName==info[i].username) {
          alert("该账号已存在");
          return ;
      };
    };
    
    if ( userName === "" && psw === "" && pswa === ""){
        alert("必填项请填满!")
    }else if ( psw === pswa){
        user = {
            "username": userName,
            "psw": psw
        };
        info.push(user);
        localStorage.setItem("user",JSON.stringify(info));
        console.log(info);
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