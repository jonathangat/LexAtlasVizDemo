



var colors = Highcharts.getOptions().colors,
  categories = [
    'No',
    'Yes'
  ],
  data = [
    {
      y: 16,
      color: '#DB3A34',
      drilldown: {
        name: 'No',
        categories: [
          'None'
        ],
        data: [
          16
        ]
      }
    },
    {
      y: 44,
      color: '#177E89',
      drilldown: {
        name: 'Yes',
        categories: [
          'Local elections',
          'State/province elections',
          'National/federal elections',
          'Referendum'
        ],
        data: [
          20,
          13,
          7,
          4
        ]
      }
    }
  ],
  browserData = [],
  versionsData = [],
  i,
  j,
  dataLen = data.length,
  drillDataLen,
  brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

  // add browser data
  browserData.push({
    name: categories[i],
    y: data[i].y,
    color: data[i].color
  });

  // add version data
  drillDataLen = data[i].drilldown.data.length;
  for (j = 0; j < drillDataLen; j += 1) {
    brightness = 0.2 - (j / drillDataLen) / 5;
    versionsData.push({
      name: data[i].drilldown.categories[j],
      y: data[i].drilldown.data[j],
      color: Highcharts.color(data[i].color).brighten(brightness).get()
    });
  }
}

// Create the chart
Highcharts.chart('container', {
  chart: {
    type: 'pie',
    renderTo:'container',
    events : {
      load: function () {
        this.renderer.image('img/lex_logo.svg', 600, 50, 50, 56).add();
      }

    }

  },
  title: {
    text: 'Suspension of Elections across 44 countries in the full LAC19 dataset',
    align: 'left'



  },
  subtitle: {
    text: 'Source: Lex-Atlas-19, available at: <a href="https://lexatlas-c19.org">lexatlas-c19.org</a>',
    align: 'left'
  },
  plotOptions: {
    pie: {
      shadow: false,
      center: ['50%', '50%']
    }
  },
  tooltip: {
    // valueSuffix: '%'
  },
  series: [{
    name: 'Count',
    data: browserData,
    size: '60%',
    dataLabels: {
      formatter: function () {
        return this.y > 5 ? this.point.name : null;
      },
      color: '#ffffff',
      distance: -30
    }
  }, {
    name: 'Count',
    data: versionsData,
    size: '80%',
    innerSize: '60%',
    dataLabels: {
      formatter: function () {
        // display only if larger than 1
        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
          this.y : null;
      }
    },
    id: 'versions'
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 400
      },
      chartOptions: {
        series: [{
        }, {
          id: 'versions',
          dataLabels: {
            enabled: false
          }
        }]
      }
    }]
  }




});


Highcharts.chart('container_1', {
  chart: {
      type: 'column',
      renderTo:'container',
    events : {
      load: function () {
        this.renderer.image('img/lex_logo.svg', 600, 50, 50, 56).add();
      }

    }
  },
  title: {
      text: 'Percentage of countries that (i) declared an Emergency, (ii) had a specific covid-19 statute, (iii) issued stay-at-home orders, and allowed for individual regulations.'
  },
  subtitle: {
    text: 'Source: Lex-Atlas-19, available at: <a href="https://lexatlas-c19.org">lexatlas-c19.org</a>',
    align: 'left'
  },
  xAxis: {
      categories: ['Emergency Declaration', 'Covid-19 Statute', 'Stay-at-home Orders', 'Individual Regulations']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Percentage'
      }
  },
  tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
  },
  plotOptions: {
      column: {
          stacking: 'percent'
      }
  },
  series: [{
      name: 'Yes',
      data: [71, 82, 67, 64],
      color: '#A2B8B5'
  }, {
      name: 'No',
      data: [29, 18, 33, 36],
      
      color: '#8FAADD'

  }]
});

// C2
Highcharts.chart('c2', {
  chart: {
      type: 'column',
      renderTo:'container',
    events : {
      load: function () {
        this.renderer.image('img/lex_logo.svg', 600, 50, 50, 56).add();
      }

    }
  },
  title: {
      text: 'Sunset Provisions'
  },
  subtitle: {
    text: 'Source: Lex-Atlas-19, Emergency Powers dataset, available at: <a href="https://lexatlas-c19.org">lexatlas-c19.org</a>',
    align: 'left'
  },
  xAxis: {
      categories: ['Sunset provision - emergency declaration','Sunset provision - statute','Sunset provisions - stay at home','Sunset provision - individual regulations']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Percentage'
      }
  },
  tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
  },
  plotOptions: {
      column: {
          stacking: 'percent'
      }
  },
  series: [{
      name: 'Yes',
      data: [23,15,17,26],
      color: '#A2B8B5'
  }, {
      name: 'No',
      data: [9,3,8,16],
      
      color: '#8FAADD'

  }]
});

// c4
Highcharts.chart('c4', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      events : {
        load: function () {
          this.renderer.image('img/lex_logo.svg', 600, 50, 50, 56).add();
        }}
  },
  title: {
      text: 'Suspension of Bill of Rights',
      align: 'left'
  },
  subtitle: {
    text: 'Source: Lex-Atlas-19, Emergency Powers dataset, available at: <a href="https://lexatlas-c19.org">lexatlas-c19.org</a>',
    align: 'left'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
      name: 'Suspension of Bill of Rights',
      colorByPoint: true,
      data: [{
          name: 'Yes',
          color: '#A2B8B5',
          
          y: 5,
          sliced: true,
          selected: true
      }, {
          name: 'No',
          color: '#8FAADD',
          
          y: 42
      }]
  }]
});


// c5
Highcharts.chart('c5', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      events : {
        load: function () {
          this.renderer.image('img/lex_logo.svg', 600, 50, 50, 56).add();
        }}
  },
  title: {
      text: 'Judicial Review',
      align: 'left'
  },
  subtitle: {
    text: 'Source: Lex-Atlas-19, Emergency Powers dataset, available at: <a href="https://lexatlas-c19.org">lexatlas-c19.org</a>',
    align: 'left'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
      name: 'Suspension of Bill of Rights',
      colorByPoint: true,
      data: [{
          name: 'Yes',
          color: '#A2B8B5',
          
          y: 40,
          sliced: true,
          selected: true
      }, {
          name: 'No',
          color: '#8FAADD',
          
          y: 7
      }]
  }]
});

// c3
Highcharts.chart('c3', {
  chart: {
      type: 'column',
      events : {
        load: function () {
          this.renderer.image('img/lex_logo.svg', 600, 50, 50, 56).add();
        }}
  },
  title: {
      text: 'Duration in Months of Sunset Provisions for Emergency Declarations'
  },
  subtitle: {
    text: 'Source: Lex-Atlas-19, Emergency Powers dataset, available at: <a href="https://lexatlas-c19.org">lexatlas-c19.org</a>',

  },
  xAxis: {
      categories: [
        '<2 months',
        '3-6 months',
        '7-12 months'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Duration in Months of Sunset Provisions for Emergency Declarations'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'Total',
      color: '#A2B8B5',
      data: [10,8,3]

  }]
});




