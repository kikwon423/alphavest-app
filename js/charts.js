function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// colors
var blue = '#355DFF';
var gray = '#808191';
var green = '#3DBAA2';
var red = '#FF7A68';
var purple = '#6C5DD3';

// charts
Apex.chart = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 13,
  fontWeight: 500,
  foreColor: gray
};

// sparklines (page circle administration)
(function () {
  var randomizeArray = function randomizeArray(arg) {
    var array = arg.slice();
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // data for the sparklines that appear below header area
  var sparklineData = [3, 5, 5, 7, 9, 9, 12];

  var sparkOptions1 = {
    chart: {
      group: 'sparklines',
      type: 'line',
      height: '100%',
      sparkline: {
        enabled: true
      }
    },
    fill: {
      opacity: 1
    },
    series: [{
      name: 'Sales',
      data: randomizeArray(sparklineData)
    }],
    labels: [].concat(_toConsumableArray(Array(7).keys())).map(function (n) {
      return '2020-09-0' + (n + 1);
    }),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    colors: [green],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    tooltip: {
      enabled: false
    }
  };

  var sparkOptions2 = {
    chart: {
      group: 'sparklines',
      type: 'line',
      height: '100%',
      sparkline: {
        enabled: true
      }
    },
    fill: {
      opacity: 1
    },
    series: [{
      name: 'Sales',
      data: randomizeArray(sparklineData)
    }],
    labels: [].concat(_toConsumableArray(Array(7).keys())).map(function (n) {
      return '2020-09-0' + (n + 1);
    }),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    colors: [green],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    tooltip: {
      enabled: false
    }
  };

  var sparkOptions3 = {
    chart: {
      group: 'sparklines',
      type: 'line',
      height: '100%',
      sparkline: {
        enabled: true
      }
    },
    fill: {
      opacity: 1
    },
    series: [{
      name: 'Sales',
      data: randomizeArray(sparklineData)
    }],
    labels: [].concat(_toConsumableArray(Array(7).keys())).map(function (n) {
      return '2020-09-0' + (n + 1);
    }),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    colors: [green],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    tooltip: {
      enabled: false
    }
  };

  var sparkOptions4 = {
    chart: {
      group: 'sparklines',
      type: 'line',
      height: '100%',
      sparkline: {
        enabled: true
      }
    },
    fill: {
      opacity: 1
    },
    series: [{
      name: 'Sales',
      data: randomizeArray(sparklineData)
    }],
    labels: [].concat(_toConsumableArray(Array(7).keys())).map(function (n) {
      return '2020-09-0' + (n + 1);
    }),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    colors: [green],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    tooltip: {
      enabled: false
    }
  };

  var sparkOptions5 = {
    chart: {
      group: 'sparklines',
      type: 'line',
      height: '100%',
      sparkline: {
        enabled: true
      }
    },
    fill: {
      opacity: 1
    },
    series: [{
      name: 'Sales',
      data: randomizeArray(sparklineData)
    }],
    labels: [].concat(_toConsumableArray(Array(7).keys())).map(function (n) {
      return '2020-09-0' + (n + 1);
    }),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    colors: [red],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    tooltip: {
      enabled: false
    }
  };

  var sparkOptions6 = {
    chart: {
      group: 'sparklines',
      type: 'line',
      height: '100%',
      sparkline: {
        enabled: true
      }
    },
    fill: {
      opacity: 1
    },
    series: [{
      name: 'Sales',
      data: randomizeArray(sparklineData)
    }],
    labels: [].concat(_toConsumableArray(Array(7).keys())).map(function (n) {
      return '2020-09-0' + (n + 1);
    }),
    yaxis: {
      min: 0
    },
    xaxis: {
      type: 'datetime'
    },
    colors: [green],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    tooltip: {
      enabled: false
    }
  };

  var spark1 = document.querySelector('#spark-1');
  var spark2 = document.querySelector('#spark-2');
  var spark3 = document.querySelector('#spark-3');
  var spark4 = document.querySelector('#spark-4');
  var spark5 = document.querySelector('#spark-5');
  var spark6 = document.querySelector('#spark-6');

  if (spark1 != null) {
    new ApexCharts(spark1, sparkOptions1).render();
  }

  if (spark2 != null) {
    new ApexCharts(spark2, sparkOptions2).render();
  }

  if (spark3 != null) {
    new ApexCharts(spark3, sparkOptions3).render();
  }

  if (spark4 != null) {
    new ApexCharts(spark4, sparkOptions4).render();
  }
  if (spark5 != null) {
    new ApexCharts(spark5, sparkOptions5).render();
  }
  if (spark6 != null) {
    new ApexCharts(spark6, sparkOptions6).render();
  }
})();

// chart total balance
(function () {
  var options = {
    series: [87, 75, 62],
    chart: {
      height: '100%',
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '16px'
          },
          value: {
            fontSize: '14px'
          },
          total: {
            show: false
          }
        }
      }
    },
    colors: [purple, green, red],
    labels: ['USD', 'EUR', 'RUB']
  };

  var chart = document.querySelector('#chart-total-balance');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();




// chart scatter plot

(function () {
  options = {
    series: [{
    name: "A",
    data: [
    [3, 5.4], [3, 2], [3, 3], [3, 2], [3, 1], [3, 3.2], [3, 7.4]]
  },{
    name: "B",
    data: [
    [5, 3], [5, 3.5], [5, 3], [5, 3], [5, 8], [5, 2], [5, 3]]
  },{
    name: "C",
    data: [
    [6, 13.4], [6, 11], [6, 8], [6, 17], [6, 4], [6, 12.2], [6, 14.4]]
  },{
    name: "D",
    data: [
    [7, 3], [7, 3.5], [7, 3], [7, 3], [7, 8], [7, 2], [7, 3]]
  },{
    name: "E",
    data: [
    [9, 3], [9, 3.5], [9, 3], [9, 3], [9, 8], [9, 2], [9, 3]]
  }],
    chart: {
    height: 350,
    type: 'scatter',
    zoom: {
      enabled: false,
      type: 'xy'
    }
  },
  dataLabels: {
    enabled: false
  },

  legend: {
    show: false
  },

  xaxis: {
    categories: [['A1'],['A2'],['A3'],['B1'],['B2'],['B3']],
    tickAmount: 10,
    tickPlacement: 'between',    
  },

  yaxis: {
    tickAmount: 7
  }
  };
  
  var chart = document.querySelector('#chart-scatter-projects');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();



// chart scatter plot2

(function () {
  options = {
    
    series: [{
      name: "A1",
      data: [
      [null]]
    },{
      name: "A2",
      data: [
      [null]]
    },{
      name: "A3",
      data: [
      [null]]
    },{
      name: "B1",
      data: [
      [3, 5.4], [3, 7], [3, 6], [3, 5]]
    },{
      name: "B2",
      data: [
      [4, 6], [4, 8], [4, 7.4], [4, 6.5]]
    },{
      name: "B3",
      data: [
      [5, 7], [5, 9], [5, 10], [5, 7]]
    },{
      name: "C1",
      data: [
      [6, 11.2], [6, 8.4], [6, 10.2], [6, 9.4]]
    },{
      name: "C2",
      data: [
      [7, 12], [7, 11],[7, 12.2], [7, 11.7], [7, 12]]
    },{
      name: "c3",
      data: [
      [9, 13], [9, 12]]
    },{
      name: "D1",
      data: [
      [null]]
    },{
      name: "D2",
      data: [
      [null]]
    },{
      name: "D3",
      data: [
      [null]]
    },{
      name: "E1",
      data: [
      [null]]
    },{
      name: "E2",
      data: [
      [null]]
    },{
      name: "E3",
      data: [
      [null]]
    }],
    chart: {
    toolbar:{show:false},
    height: 350,
    type: 'scatter',
    zoom: {
      enabled: false,
      type: 'xy'
    }
  }, 
  dataLabels: {
    enabled: false
  },

colors: ["#E02020","#6236FF", "#0091FF", "#32C5FF", "#44D7B6",  "#6DD400",  "#F7B500",  "#FA6400"],

  legend: {
    show: false,
    labels: {
      useSeriesColors: true
  },
  },

  xaxis: {
    tickAmount: 5,
    tickPlacement: 'between',
    labels: {show:false},
    min:0,
    max:15
  },

  yaxis: {
    tickAmount: 5,
    labels:{formatter: function (val) {
      return val + '%'
    }
  }
  }
  };
  
  var chart = document.querySelector('#chart-scatter-projects2');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();







// chart scatter plot3

(function () {
  options = {
    
    series: [{
      name: "A1",
      data: [
      [null]]
    },{
      name: "A2",
      data: [
      [null]]
    },{
      name: "A3",
      data: [
      [null]]
    },{
      name: "B1",
      data: [
      [3, 5.4], [3, 7], [3, 6], [3, 5]]
    },{
      name: "B2",
      data: [
      [4, 6], [4, 8], [4, 7.4], [4, 6.5]]
    },{
      name: "B3",
      data: [
      [5, 7], [5, 9], [5, 10], [5, 7]]
    },{
      name: "C1",
      data: [
      [6, 11.2], [6, 8.4], [6, 10.2], [6, 9.4]]
    },{
      name: "C2",
      data: [
      [7, 12], [7, 11],[7, 12.2], [7, 11.7], [7, 12]]
    },{
      name: "C3",
      data: [
        [null]]
    },{
      name: "D1",
      data: [
      [9, 13], [9, 12]]
    },{
      name: "D2",
      data: [
      [null]]
    },{
      name: "D3",
      data: [
      [null]]
    },{
      name: "E1",
      data: [
      [null]]
    },{
      name: "E2",
      data: [
      [null]]
    },{
      name: "E3",
      data: [
      [null]]
    }],
    chart: {
    toolbar:{show:false},
    height: 450,
    type: 'scatter',
    zoom: {
      enabled: false,
      type: 'xy'
    }
  }, 
  dataLabels: {
    enabled: false
  },

  title: {
    text: '투자 자산 등급 분포',
    align: 'left',
    margin: 10,
    offsetX: 25,
    offsetY: 10,
    floating: false,
    style: {
      fontSize:  '18px',
      fontWeight:  'bold',
      fontFamily:  'Poppins',
      color:  '#263238'
    },
},

colors: ["#E02020","#6236FF", "#0091FF", "#32C5FF", "#44D7B6",  "#6DD400",  "#F7B500",  "#FA6400"],

  legend: {
    show: true,
    fontSize: '18px',
    showForZeroSeries: false,
    labels: {
      useSeriesColors: true
  },
  markers: {
    width: 0,
    height: 0,
    strokeWidth: 0,
    strokeColor: '#fff',
    fillColors: undefined,
    radius: 12,
    customHTML: undefined,
    onClick: undefined,
    offsetX: 0,
    offsetY: 0
},
  },

  xaxis: {
    tickAmount: 7,
    tickPlacement: 'between',
    labels: {show:false},
    min:0,
    max:15
  },

  yaxis: {
    tickAmount: 4,
    min:3,
    max:15,
    labels:{formatter: function (val) {
      return val + '%'
    },
  }
  }
  };
  
  var chart = document.querySelector('#chart-scatter-projects3');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();






// chart price4
(function () {
  var options = {
    series: [{
      name: '투자 가치 (만)',
      type: 'area',
      data: [3000, 3000, 5500, 5500, 6500, 6500, 7500, 7500]
    }, {
      name: '',
      type: 'column',
      data: []
    }],
    chart: {
      height: '100%',
      type: 'line',
      toolbar: {
        show: false
      }
    },

    colors: ['#008ffb'],
    stroke: {
      width: [0, 0]
    },
    plotOptions: {
      bar: {
        columnWidth: '60%'
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    labels: ['08/2020', '09/2020', '10/2020', '11/2020', '12/2020', '01/2021', '02/2021', '03/2021'],
    xaxis: {
      tooltip: {
        enabled: false
      },
      labels:{
        show:false
      }
    },

    stroke: {
      show: true,
      curve: 'smooth',
      colors: ['#008ffb'],
      width: 4,
      dashArray: 0,      
  },


    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: .5,
        opacityFrom: 0.7,
        opacityTo: 0.0,
        stops: [0, 100]}
    },

    yaxis: [{
      labels: {
        show: false,
      }
      

    }, {
      opposite: true,
      labels: {
        show: false
      }
    }]
  };

  var chart = document.querySelector('#chart-price4');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();





// chart price2
(function () {
  var options = {
    series: [{
      name: '투자 가치 (만)',
      type: 'line',
      data: [3000, 3000, 5500, 5500, 6500, 6500, 6500, 7500]
    }, {
      name: '',
      type: 'column',
      data: [3000, 3000, 3500, 3500, 3500, 4500, 4500, 5000]
    }],
    chart: {
      height: '100px',
      type: 'line',
      toolbar: {
        show: false
      }
    },
    grid:{
      show: false
    },
    colors: [green, blue],
    stroke: {
      width: [0, 0]
    },
    plotOptions: {
      bar: {
        columnWidth: '20%'
      }
    },
    legend: {
      show: false
    },

    title: {
      text: '',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '14px',
        fontWeight:  'bold',
        fontFamily:  'Poppins',
        color:  '#263238'
      },
    },

    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    labels: ['08/2020', '09/2020', '10/2020', '11/2020', '12/2020', '01/2021', '02/2021', '03/2021'],
    xaxis: {
      tooltip: {
        enabled: false
      }
    },
    yaxis: [{
      labels: {
        show: false
      },
      axisBorder:{
        show: false
      },
      axisTicks:{
        show: false
      }

    }, {
      opposite: true,
      labels: {
        show: false
      }
    }]
  };

  var chart = document.querySelector('#chart-price2');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();


// chart price 3

(function () {
  var options = {
    chart: {
            height: '100%',
      type: 'line',
      toolbar: {
        show: false
      }
    },
    colors: ['#6C5DD3', '#008ffb'],
    stroke: {
      width: [0, 4],
      curve: 'smooth',
      color: '#008ffb'
    },

    
    
    plotOptions: {
      bar: {
        columnWidth: '20%',
      }
    },
    series: [{
      name: '배당금',
      type: 'column',
      data: [150, 150, 200, 200, 250, 250, 300, 350]
    }, {
      name: '가치 평가',
      type: 'area',
      data: [3000, 3000, 5500, 5500, 6500, 6500, 6500, 7500]
    }],
    fill: {
      opacity: [1,0.15],
    },
    labels: ['08/2020', '09/2020', '10/2020', '11/2020', '12/2020', '01/2021', '02/2021', '03/2021'],
    markers: {
      size: 0
    },
    xaxis: {
    },
    yaxis: {
      tickAmount: 4,

      title: {
        show:false
      },
      labels: {
        show: false
      },
      axisBorder:{
        show: false
      },
      axisTicks:{
        show: false
      },
      
        opposite: true,
        labels: {
          show: false
        },
      min: 0
    },
    legend: {
      show: false
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if(typeof y !== "undefined") {
            return  y.toFixed(0) + " 만원";
          }
          return y;
          
        }
      }
    }

  }

  var chart = new ApexCharts(
    document.querySelector("#chart-price3"),
    options
  );

  chart.render();
})();


// chart price
(function () {
  var options = {
    series: [{
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    chart: {
      height: '100%',
      type: 'line',
      toolbar: {
        show: false
      }
    },
    colors: [green, blue],
    stroke: {
      width: [0, 2]
    },
    plotOptions: {
      bar: {
        columnWidth: '60%'
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'],
    xaxis: {
      tooltip: {
        enabled: false
      }
    },
    yaxis: [{
      labels: {
        show: false
      }

    }, {
      opposite: true,
      labels: {
        show: false
      }
    }]
  };

  var chart = document.querySelector('#chart-price');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();

// chart exhcange price
(function () {
  var options = {
    series: [{
      data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      }, {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      }, {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      }, {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      }, {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      }, {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      }, {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      }, {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      }, {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      }, {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      }, {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      }, {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
      }, {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
      }, {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
      }, {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
      }, {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
      }, {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
      }, {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      }, {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
      }, {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      }, {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
      }, {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
      }, {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
      }, {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      }, {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
      }, {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
      }, {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
      }, {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
      }, {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
      }, {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
      }, {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
      }, {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      }, {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
      }, {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
      }, {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      }, {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
      }, {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
      }, {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
      }, {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
      }, {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      }, {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
      }, {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
      }, {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
      }, {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
      }, {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
      }, {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
      }, {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
      }, {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
      }, {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
      }, {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
      }, {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
      }, {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
      }, {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
      }, {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
      }, {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
      }, {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
      }, {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
      }, {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
      }, {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
      }, {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
      }]
    }],
    chart: {
      type: 'candlestick',
      height: '100%',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#3DBAA2',
          downward: '#FF7A68'
        }
      }
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      labels: {
        show: false
      },
      tooltip: {
        enabled: true
      }

    }
  };

  var chart = document.querySelector('#chart-exhcange-price');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();

// chart exhcange deep
(function () {
  var options = {
    series: [{
      name: 'north',
      data: [{
        x: 2012,
        y: 355
      }, {
        x: 2013,
        y: 366
      }, {
        x: 2014,
        y: 337
      }, {
        x: 2015,
        y: 352
      }, {
        x: 2016,
        y: 377
      }, {
        x: 2017,
        y: 383
      }, {
        x: 2018,
        y: 344
      }, {
        x: 2019,
        y: 366
      }, {
        x: 2020,
        y: 389
      }, {
        x: 2021,
        y: 334
      }]
    }, {
      name: 'south',
      data: [{
        x: 2012,
        y: -88
      }, {
        x: 2013,
        y: -66
      }, {
        x: 2014,
        y: -45
      }, {
        x: 2015,
        y: -29
      }, {
        x: 2016,
        y: -45
      }, {
        x: 2017,
        y: -88
      }, {
        x: 2018,
        y: -132
      }, {
        x: 2019,
        y: -146
      }, {
        x: 2020,
        y: -169
      }, {
        x: 2021,
        y: -184
      }]
    }],
    chart: {
      type: 'area',
      height: '100%',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    legend: {
      show: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      tickAmount: 3,
      floating: false,

      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    colors: [green, red],
    tooltip: {
      x: {
        format: "yyyy"
      },
      fixed: {
        enabled: false,
        position: 'topRight'
      }
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30
        }
      },
      padding: {
        left: 20
      }
    }
  };

  var chart = document.querySelector('#chart-exhcange-deep');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();

// projects chart 

(function () {
  var options = {
    series: [0,0,1305, 1204, 1454, 1254, 1631, 652],
    colors: ["#6236FF", "#0091FF", "#32C5FF", "#44D7B6",  "#6DD400",  "#F7B500","#FA6400","#E02020"],
    labels: ['A1 등급','A2 등급','B1 등급', 'B2 등급', 'B3 등급', 'C1 등급', 'C2 등급','C3 등급'],
    chart: {
      width: 250,
      type: "donut"
    },
    dataLabels: {
       enabled: false
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
      
        donut: {
          size:'85%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '20px',
              fontFamily: 'Poppins',
              offsetY: -12
            },
            value: {
            show: true,
            fontSize: '30px',
            fontFamily: 'Poppins',
            color: undefined,
            formatter: function (val) {
              return '₩' + val + '만'
            }
          },
            total: {
            show: true,
            label: '총 프로잭트',
            color: 'black',
            offsetY: '30px',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return '₩7500만'
              }, 0)
            }
          }
        }
      }
    }
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function(val) {
          return (val / 7500 *100).toFixed(2) + '%';
        },
        title: {
          formatter: function (seriesName) {
            return ''
          }
        }
      }
    },
    legend: {
      show: false,
    }
  };

  var chart = document.querySelector('#chart-projects');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();