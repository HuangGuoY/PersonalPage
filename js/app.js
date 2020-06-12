// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

let htmlBar = new ProgressBar.Line('#html-container', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e34c26',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#e34c26',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#ffffff'},
  to: {color: '#e34c26'},
  step: (state, htmlBar) => {
    htmlBar.setText(Math.round(htmlBar.value() * 100) + ' %');
    // 颜色变化（上面的from to）
    htmlBar.path.setAttribute('stroke', state.color);
  }
});

htmlBar.animate(0.8);  // Number from 0.0 to 1.0

let cssBar = new ProgressBar.Line('#css-container', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#563d7c',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#563d7c',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#ffffff'},
  to: {color: '#563d7c'},
  step: (state, cssBar) => {
    cssBar.setText(Math.round(cssBar.value() * 100) + ' %');
    cssBar.path.setAttribute('stroke', state.color);
  }
});

cssBar.animate(0.8);  // Number from 0.0 to 1.0

var jsBar = new ProgressBar.Line('#js-container', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#f1e05a',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#f1e05a',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#ffffff'},
  to: {color: '#f1e05a'},
  step: (state, jsBar) => {
    jsBar.setText(Math.round(jsBar.value() * 100) + ' %');
    jsBar.path.setAttribute('stroke', state.color);
  }
});

jsBar.animate(0.7);  // Number from 0.0 to 1.0

var vueBar = new ProgressBar.Line('#vue-container', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#2c3e50',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#2c3e50',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#ffffff'},
  to: {color: '#2c3e50'},
  step: (state, vueBar) => {
    vueBar.setText(Math.round(vueBar.value() * 100) + ' %');
    vueBar.path.setAttribute('stroke', state.color);
  }
});

vueBar.animate(0.7);  // Number from 0.0 to 1.0

// 初始化echarts实例
var dom = document.getElementById("skill-tree");
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();
$.get('data/skill.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',

                data: [data],

                top: '5%',
                left: '10%',
                bottom: '5%',
                right: '30%',

                symbolSize: 9,

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 500,
                animationDurationUpdate: 750
            }
        ]
    });
});;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}