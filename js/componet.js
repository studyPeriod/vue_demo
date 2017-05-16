/**
 * Created by jsliu on 2017/5/15.
 */
Vue.component("todo-item",{
    props:["todo"],
    template:"<li>{{todo.text}}</li>"

});

let componet1=new Vue({
    el:"#componet_1",
    data:{
        list:[{
            text:"我要赚钱！"
        },{
            text:"所以要好好工作！"
        },{
            text:"好好的写代码。"
        }]
    }
});

let com2=new Vue({
    el:"#com2",
    data:{
        flag:false,
        number:1
    },
    methods:{
        outputSth:function () {
            console.log(this.flag,"%%%%%%%%%%")
        }
    }
});