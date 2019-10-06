<template>
    <div class="right" id='myChart'>
    </div>
</template>

<script>
// import echartsVue from './EchartsRight';
export default {
    // data(){
    //     return{
    //         echartsNumber:0
    //     }
    // },
    // components:{
    //     echartsVue
    // },
    mounted(){
        //初始化echarts实例
       
        this.addNumber();
    },
    methods:{
        deleteEchart(node){
            console.log("delete");
            // node.parentNode.removeChild(node);
        },
        addNumber(){   
            console.log("this");
            // let flag = 0;      
            this.bus.$on("echartsContent",(option)=>{
                let element = document.getElementById('myChart');
                let node = document.createElement("div");
                node.style.width = "100%";
                node.style.height = "100px";
                console.log(node);
                
                let deleteNode = document.createElement("button");
                
                node.appendChild(deleteNode);
                let echartNode = document.createElement("div");
                console.log(node.offsetWidth);
                echartNode.style.width = "655px";
                echartNode.style.height = "100px";
                let myChart = this.$echarts.init(echartNode);
                myChart.resize();
                myChart.setOption(option);
                node.appendChild(echartNode);
                element.appendChild(node);
                deleteNode.addEventListener('click',this.deleteEchart(node));
                console.log(element);
                // if (message){
                //     console.log(this.echartsNumber);
                //    this.echartsNumber++;
                // }
            });
            // if (flag){
            //     this.echartsNumber++;
            //     console.log(this.echartsNumber);
            // }
        }
    }
};
</script>

<style scoped>
.right {
    display:inline-block;
    width:672px;
    height:503px;
    background-color:red;
    overflow:scroll;
}
.right div{
    height:100px;
    width:672px;
    background-color:blue;
}
button{
    height:10px;
    width:10px;
    float:right;

}
</style>
