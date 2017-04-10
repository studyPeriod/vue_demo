/**
 * Created by jsliu on 2017/4/10.
 */
let app=new Vue({
    el:'#app',
    data:{
        message:'hello vue!'
    }
});

let app2=new Vue({
    el:"#app2",
    data:{
        message:'页面加载于'+new Date()
    }
});

let app3=new Vue({
    el:"#app_3",
    data:{
        seen:true
    }
});

let app4=new Vue({
    el:'#app_4',
    data:{
        info:[{
            text:"我要赚钱！"
        },{
            text:"所以要好好工作！"
        },{
            text:"好好的写代码。"
        }]
    }
})