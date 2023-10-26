setInterval(function(){
    var currentTime = new Date();
    var n = "0"+currentTime.getFullYear();
    var y = "0"+(currentTime.getMonth()+1);
    var d = "0"+currentTime.getDate();
    var day = currentTime.getDay();
    var h = "0"+currentTime.getHours();
    var m = "0"+currentTime.getMinutes();
    var s = "0"+currentTime.getSeconds();
    var dc = "0"+currentTime.getMilliseconds();
    n = n.substr(n.length-4, 4);
    h = h.substr(h.length-2, 2);
    m = m.substr(m.length-2, 2);
    s = s.substr(s.length-2, 2);
    y = y.substr(y.length-2, 2);
    d = d.substr(d.length-2, 2);
    dc =dc.substr(dc.length-3,2)
    var day_list = ['日', '一', '二', '三', '四', '五', '六'];
    var timeStr = h+":"+m+":"+s+"."+dc;
    var date = "今天是"+n+"年"+y+"月"+d+"日"+"星期"+ day_list[day];
    document.getElementById("clock").innerHTML = timeStr;
    document.getElementById("date").innerHTML = date;
},10);