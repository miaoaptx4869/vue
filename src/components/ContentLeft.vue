<template>
    <div class="left" id="myChart1">
    </div>
</template>

<script>
export default {
    mounted(){
        this.drawLine();
    },
    methods:{
        drawLine(){
            //初始化echarts实例
            let element = document.getElementById('myChart1'); 
            let myChart = this.$echarts.init(element);
            
            //绘制图表
            myChart.setOption({
                title:{text:'折线图'},
                xAxis:{
                    type:'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis:{
                    type:'value'
                },
                series:[{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            });
            
        }
    }
};
</script>

<style scoped>
.left {
    display:inline-block;
    width:109px;
    height:503px;
    background-color:pink;
}
</style>
