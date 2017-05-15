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
});
let app10=new Vue({
    el:"#numb1",
    data:{
        number:1,
        "ok":true,
        "url":"http://www.baidu.com"
    }
});

let11=new Vue({
    el:'#kess',
    data:{
        url:'http://cn.bing.com'
    },
    methods:{
        dosth:function () {
            alert("aaaa");

        }
    }
});

let13=new Vue({
    el:"#computed_1",
    data:{
        info:"jsliu is good boy! he will be rich!",
        date1:new Date(),
        date2:new Date()
    },
    computed:{
        reverInfo:function () {
            var str=this.info.split('').reverse().join('');
            return str;
        },
        now1:function () {

            return this.date1;
        }
    },
    methods:{
        now2:function () {
            return this.date2;
        }
    }
});