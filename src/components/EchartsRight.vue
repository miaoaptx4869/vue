<template>
  <div id="myChart2" @mouseover="drawLine"></div>
</template>

<script>
export default {
  // mounted(){
  //   this.drawLine();
  // },
  methods:{
    drawLine(event){
      //绘制图表
      this.bus.$on('echartsContent',(option)=>{
        let myChart = this.$echarts.init(event.target);
        console.log(event.target);
        console.log(option);
        myChart.setOption(option);
      });
    }
  }
}
</script>

<style scoped>
#myChart2{
  height:100px;
  background-color:blue;
}
</style>