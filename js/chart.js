var colors = Highcharts.getOptions().colors,
  categories = [
    'No',
    'Yes'
  ],
  data = [
    {
      y: 16,
      color: '#8FAADD',
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
      color: '#A2B8B5',
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
    type: 'pie'
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