new Vue({
el:'#newapp',
data:{
    name:'',
    email:''
},
methods:{
new:function(){
    return this.name
}
},
computed:{
 fullname:function(){
     return this.name+" "+this.email
 }
}

});