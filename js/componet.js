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

let comp2=new Vue({
    el:"#comp2",
    data:{
        firstName:"liu",
        lastName:"jiansheng"
    },
    computed:{
        fullname:function () {
            return this.firstName+" | "+this.lastName
        },
        mineInfo:{
            get:function () {
                return this.firstName+"&&"+this.lastName;
            },
            set:function (newValue) {
                var array=newValue.split(" ");
                this.firstName=array[0];
                this.lastName=array[1];
            }
        }
    }
});

let style_1=new Vue({
    el:"#style1",
    data:{
        activeColor:'red',
        fsize:22
    }
});