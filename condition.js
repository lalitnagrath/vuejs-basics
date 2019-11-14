var condition=new Vue({
    el:'#app',
    data:{
        stock:'8',
        image:'71-ShN45tRL._UX522_.jpg',
        onSale:'false',
        details:['80%cotton',"20% Polyseter","Unisex"],
      
        variants:[
            {variantid:1,
            variantcolor:'White',variantimage:'71-ShN45tRL._UX522_.jpg'},
            {variantid:2,
            variantcolor:'Black',variantimage:"black.jpg"}
        ],
        size:['S','M','L','XL'],
        cart:0
    },
        methods:{
            addtocart:function(){
                this.cart+=1;
            },
            updateproduct:function(variantimage){
                this.image=variantimage;
            },
            removefromcart:function(){
                this.cart-=1;
            }
        }
    
});0