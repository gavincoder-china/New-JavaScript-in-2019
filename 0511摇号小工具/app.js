var vm = new Vue({
    el: "#app",
    data() {
        return {
            num: "",
            numResult: "",
            nameArr:[],
            nameInput:"",
            nameResult:"",
            show:true,
            timer:null,
            start:true,
            stop:false,
            
            
           
        
        }
    },
    methods: {
        useNum:function(){
            this.show=true;
        }
        ,
        useName:function(){
            this.show=false;
        },
        chooseNum: function () {
            clearInterval(this.timer)  //清除计时器
            this.timer=setInterval(()=>{ this.numResult = Math.floor(Math.random() * (this.num) + 1)},100)
          
           // this.numResult = Math.floor(Math.random() * (this.num) + 1)
            console.log(this.numResult);
            this.start=false;
            this.stop=true;
        },
        chooseNumStop:function(){
            clearInterval(this.timer)
           this.timer=setInterval(()=>{ this.numResult = Math.floor(Math.random() * (this.num) + 1)},300)

           setTimeout(()=>{
            clearInterval(this.timer);
            this.start=true;
            this.stop=false;
           },3000)
        },
        addName:function(){
          
          this.nameArr.push(this.$refs.nameValue.value)
          this.nameInput=""

        },
        chooseName:function(){
            clearInterval(this.timer)
           let number=this.nameArr.length;
           this.timer=setInterval(()=>{ this.nameResult=this.nameArr[Math.floor(Math.random() * number + 1)-1]},100)
        //    this.nameResult=this.nameArr[Math.floor(Math.random() * number + 1)-1]
           console.log(this.nameResult)
           this.start=false;
            this.stop=true;
        },
        chooseNameStop:function(){

            clearInterval(this.timer);
            let number=this.nameArr.length;
            this.timer=setInterval(()=>{ this.nameResult=this.nameArr[Math.floor(Math.random() * number + 1)-1]},300)
           setTimeout(()=>{
            clearInterval(this.timer);
            this.start=true;
            this.stop=false;
           },3000)
            
        },
        deleteName:function(index){
           this.nameArr.splice(index,1)
           console.log(this.nameArr)
        }
    }
})