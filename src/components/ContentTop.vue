<template>
    <div class="top">
        <ul>
            <li v-for="item in createList"
                v-dragging="{item:item,list:createList,group:'echarts'}"
                :key="item.key"
                @dragend="createEcharts"
                >
                {{item.content}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // data(){
    //     return {
    //         positionX:0,
    //         positionY:0
    //     }
        
    // },
    mounted(){
        
    },
    computed:{
        //创建图标按钮的内容
        createList:function(){
            let array = [
                {'content':'折线图'},
                {'content':'柱形图'},
                {'content':'饼图'},
                {'content':'散点图'}];
            let i;
            for (i in array){
                array[i].key = i;
                
            }
            return array;
        },
        echartsList:function(){
            let array = [{
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
                        },
                        {
                            title:{text:'柱形图'},
                            xAxis: {
                                type: 'category',
                                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: [120, 200, 150, 80, 70, 110, 130],
                                type: 'bar'
                            }]
                        },
                        {
                            title : {text: '饼图'},
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                            },
                            series : [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius : '55%',
                                    center: ['50%', '60%'],
                                    data:[
                                        {value:335, name:'直接访问'},
                                        {value:310, name:'邮件营销'},
                                        {value:234, name:'联盟广告'},
                                        {value:135, name:'视频广告'},
                                        {value:1548, name:'搜索引擎'}
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            title : {text: '散点图'},
                            xAxis: {},
                            yAxis: {},
                            series: [{
                                symbolSize: 20,
                                data: [
                                    [10.0, 8.04],
                                    [8.0, 6.95],
                                    [13.0, 7.58],
                                    [9.0, 8.81],
                                    [11.0, 8.33],
                                    [14.0, 9.96],
                                    [6.0, 7.24],
                                    [4.0, 4.26],
                                    [12.0, 10.84],
                                    [7.0, 4.82],
                                    [5.0, 5.68]
                                ],
                                type: 'scatter'
                            }]
                        }];
            return array;
        }
    },
    methods:{
        // 传递图表数据
         createEcharts(event){
             console.log(event.target);
            this.bus.$emit('echartsContent',this.echartsList[event.target.getAttribute('drag_key')]);
            // this.bus.$emit('echartsNumber',"true");
        },
        move(e){
            let odiv = e.target;        //获取目标元素
            
            //算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = (e)=>{       //鼠标按下并移动的事件
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;    
                let top = e.clientY - disY;
                console.log(left);
                //绑定元素位置到positionX和positionY上面
                // this.positionX = top;
                // this.positionY = left;
                
                //移动当前元素
                odiv.style.left = left + 'px';
                odiv.style.top = top + 'px';
            };
            document.onmouseup = (e) => {
                document.onmousemove = null;
                document.onmouseup = null;
                this.createEcharts();
            };
        } 
    }
}
</script>

<style scoped>
.top{
    
    width:100%;
    height:100px;
    background-color:rgb(242,242,242);
}
ul{
    list-style:none;
    position:relative;
}
ul li{
    position: relative;
    margin:10px;
    float:left;
    background-color:white;
    cursor:pointer;
}
</style>
