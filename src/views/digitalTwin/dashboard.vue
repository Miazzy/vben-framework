<!--
 * @Description: 首页
 * @Date: 2023-08-15 16:15:44
 * @LastEditTime: 2023-08-17 14:11:29
 * @FilePath: \frontdemo\src\views\dashboard\analysis\index2.vue
-->
<template>
    <div class="home-page">
      <div class="real-time-data-box">
        <div class="real-time-title">
          <span class="title-text">实时数据</span>
          <span class="time-text">更新时间2022-06-15 12:30</span>
        </div>
        <div class="real-time-content">
          <div class="real-time-item" v-for="(item, index) in realTimeData" :key="index">
            <div class="real-time-item-title">{{ item.title }}</div>
            <div class="real-time-value-box">
              <CountTo :startVal="1" :endVal="item.value" class="real-time-value" :decimals="2" />
            </div>
            <div class="trend-box">
              <div class="left">
                <span class="ratio-name-text">{{ item.ratioName }}</span>
                <span class="ratio-text" :class="item.trend">{{ item.ratio }}</span>
              </div>
              <div class="right">
                <div class="img-box">
                  <img :src="item.imgSrc" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chart-row">
        <div class="chart-item chart-layout-1">
          <div class="chart-item-title">
            <div class="left"><span class="title-icon"></span>发电量和功率趋势</div>
            <div class="right">
              <RadioGroup class="radio-group-style" v-model:value="value1" size="small">
                <RadioButton value="year">本年</RadioButton>
                <RadioButton value="month">本月</RadioButton>
                <RadioButton value="day">本日</RadioButton>
              </RadioGroup>
              <div class="more-text">更多 &gt;</div>
            </div>
          </div>
          <div class="chart-item-content">
            <div ref="generationAndPowerChartRef" :style="{ height: '300px', width: '100%' }"></div>
          </div>
        </div>
        <div class="chart-item chart-layout-2"></div>
      </div>
      <div class="chart-row">
        <div class="chart-item chart-layout-1"></div>
        <div class="chart-item chart-layout-2"></div>
      </div>
    </div>
</template>
<script lang="ts" setup>
  import { reactive, onMounted, ref, Ref } from 'vue';
  import { CountTo } from '/@/components/CountTo/index';
  import { useECharts } from '/@/hooks/web/useECharts';
  import LineUp from '/@/assets/images/line-up.png';
  import LineDown from '/@/assets/images/line-down.png';
  import { RadioGroup, RadioButton, Button } from 'ant-design-vue';

  const realTimeData = reactive([
    {
      title: '电站容量(MW)',
      value: 7152.0,
      ratioName: '同比',
      ratio: '+1.6%',
      trend: 'up',
      imgSrc: LineUp,
    },
    {
      title: '实时功率(MW)',
      value: 5960,
      ratioName: '同比昨日',
      ratio: '-0.5%',
      trend: 'down',
      imgSrc: LineDown,
    },
    {
      title: '今日发电量(万kW.h)',
      value: 2112,
      ratioName: '同比昨日',
      ratio: '+1.6%',
      trend: 'up',
      imgSrc: LineUp,
    },
    {
      title: '当月损失发电量(万kW.h)',
      value: 1221,
      ratioName: '同比昨日',
      ratio: '-0.5%',
      trend: 'down',
      imgSrc: LineDown,
    },
    {
      title: '累计发电量(万kW.h)',
      value: 5200,
      ratioName: '同比昨日',
      ratio: '+1.6%',
      trend: 'up',
      imgSrc: LineUp,
    },
    {
      title: '累计上网电量(万kW.h)',
      value: 2235,
      ratioName: '同比昨日',
      ratio: '-0.5%',
      trend: 'down',
      imgSrc: LineDown,
    },
  ]);
  const value1 = ref<string>('year');

  const generationAndPowerChartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(generationAndPowerChartRef as Ref<HTMLDivElement>);

    /**
  onMounted(() => {
    setOptions({
      color: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#5EB7F4', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#409EFF', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#74E7A2', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#58DC8D', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        left: 'center',
        top: 'bottom',
        icon: 'roundRect',
        textStyle: {
          color: 'rgba(255, 255, 255, 0.6)',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.16)',
            },
          },
          axisLabel: {
            color: 'rgba(255,255,255,0.3)',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.16)',
            },
          },
          axisLabel: {
            color: 'rgba(255,255,255,0.3)',
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.04)',
            },
          },
        },
      ],
      series: [
        {
          name: '发电量',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.93,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#5EB7F4',
              },
              {
                offset: 1,
                color: '#409EFF',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [140, 232, 101, 264, 90, 340, 250],
        },
        {
          name: '功率',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.93,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#75FBB9',
              },
              {
                offset: 1,
                color: '#5DC096',
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: [120, 200, 92, 211, 180, 280, 310],
        },
      ],
    });
  });**/

</script>
<style lang="less" scoped>
  .home-page {
    padding: 16px;

    .real-time-data-box {
      margin-bottom: 14px;

      .real-time-title {
        padding: 8px 0 16px;
        line-height: 1;

        .title-text {
          margin-right: 17px;
          font-size: 20px;
          font-weight: 700;
        }

        .time-text {
          font-size: 14px;
        }
      }

      .real-time-content {
        display: flex;

        .real-time-item {
          width: 16.6667%;
          height: 168px;
          margin-right: 14px;
          padding: 0 28px;
          border-radius: 2px;

          &:last-child {
            margin-right: 0;
          }

          .real-time-item-title {
            padding: 26px 0 17px;
            font-size: 16px;
            line-height: 1;
          }

          .real-time-value-box {
            margin-bottom: 26px;

            .real-time-value {
              font-size: 38px;
              line-height: 1;
            }
          }

          .trend-box {
            display: flex;
            justify-content: space-between;

            .ratio-name-text {
              margin-right: 9px;
              font-size: 12px;
            }

            .ratio-text {
              font-size: 16px;

              &.up {
                color: #55d187;
              }

              &.down {
                color: #ff4d4f;
              }
            }

            .img-box {
              width: 98px;
              height: 36px;

              & > img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }

    .chart-row {
      display: flex;
      margin-bottom: 13px;

      &:last-child {
        margin-bottom: 0;
      }

      .chart-item {
        height: 362px;
        border-radius: 2px;

        .chart-item-title {
          display: flex;
          justify-content: space-between;
          height: 48px;
          padding: 0 16px;
          line-height: 48px;

          .left {
            display: flex;
            align-items: center;
            font-size: 16px;

            .title-icon {
              display: inline-block;
              width: 4px;
              height: 16px;
              margin-right: 7px;
              border-radius: 2px;
            }
          }

          .right {
            display: flex;
            align-items: center;

            :deep(.radio-group-style.ant-radio-group-small) {
              margin-right: 16px;

              .ant-radio-button-wrapper {
                background-color: transparent;
                font-size: 12px;
              }

              .ant-radio-button-wrapper-checked:not(
                  .ant-radio-button-wrapper-disabled
                ):focus-within {
                box-shadow: none;
              }
            }

            .more-text {
              font-size: 12px;
              cursor: pointer;
            }
          }
        }
      }

      .chart-layout-1 {
        width: 66.907%;
        margin-right: 13px;
      }

      .chart-layout-2 {
        width: 33.093%;
      }
    }
  }
</style>
