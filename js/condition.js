let test1=new Vue({
    el:"#test1",
    data:{
        status:1
    }
});

let test2=new Vue({
    el:"#test2",
    data:{
        loginType:'username',
        login_name:""
    },
    methods:{
        toggleType:function () {
            var str=this.loginType;
            if(str=='username')
                this.loginType="email";
            else if(str=='email')
                this.loginType="username";
            return this.loginType;
        }
    }
});

let test3=new Vue({
    el:"#test3",
    data:{
        loginType:"username",
        l_name:''
    },
    methods:{
        toggleType:function () {
            var str=this.loginType;
            if(str=='username')
                this.loginType="";
            else
                this.loginType='username';
            return this.loginType;
        }
    }
});

let test4=new Vue({
    el:"#test4",
    data:{
        area:'台湾',
        fruit:[{
            name:'apple'
        },{
            name:'banana'
        },
            {
                name:'orange'
            },{
            name:'coockie'
            }]
    }
});

let test5=new Vue({
    el:"#test5",
    data:{
        objinfo:{
            firstname:"liu",
            lastname:"jian",
            age:'27',
            email:"liujiansheneg@123.com"
        }
    }
});