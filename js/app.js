$('#weathermap').click(() => {
   const cityName = $('#cityInput').val();
    
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`,
        success: (data) => {
            const precipitation = data.main.pressure;
            const humidity = data.main.humidity;
            const wind = data.wind.deg;
            const temperature = data.main.temperature;
            $('#currentPrecipitation').html(precipitation);
            $('#currentHumidity').html(humidity);
            $('#currrentWind').html(wind);
            $("#temp").html(temperature);
            $('table').show();
        },
        error: (err) => {
            console.log('In error callback');
            console.log(err);
        }
    });
})

$('#temperature').click(() => {
    const cityName = $('#cityInput').val();
    $.ajax({
        type: 'GET',
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=133b42fff699f45866056ed2e4a093db`,
        success: (data) => {
            var iconcode = data.list[0].weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            $('img').attr('src', iconurl);
            console.log('In success callback');
            console.log(data);
            listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('dddd, h:mm a'));
            console.log(listOfDates);
            listOfTemp = data.list.map(ele => Math.round(ele.main.temp - 270));
            console.log(listOfTemp);
            plotChart(listOfTemp, listOfDates);
            
        },
        error: (err) => {
            console.log('In error callback');
            console.log(err);
        }
    });

    const plotChart = (tempArr, datesArr) => {
        $('#chart-container').show();
        Highcharts.chart('chart-container', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            xAxis: {
                categories: datesArr
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () { return this.value + '°'; }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: cityName,
                marker: {
                    symbol: 'square'
                },
                data: tempArr
            


            }]
        });
    }

})

$('#precipitation').click(() => {
    // const cityName = $('#cityInput').val();
    $.ajax({
        type: 'GET',
        url: `https://tile.openweathermap.org/map/precipitation_new?q=${cityName}appid=aa31956ccc5a2eadd0a2de9ad8a86b0c`,
        success: (data) => {
            console.log('In success callback');
            console.log(data);
            listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('dddd, h:mm a'));
            console.log(listOfDates);
            listOfTemp = data.list.map(ele => Math.round(ele.main.temp - 270));
            console.log(listOfTemp);
            plotChart(listOfTemp, listOfDates);
            
        },
        error: (err) => {
            console.log('In error callback');
            console.log(err);
        }
    });

    // const plotChart = (tempArr, datesArr) => {
    //     $('#chart-container').show();



$.getJSON('https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/new-intraday.json', function (data) {
    
      // create the chart
      Highcharts.stockChart('chart-container', {
    
    
        title: {
          text: 'Precipitation'
        },
    
        subtitle: {
          text: 'Using explicit breaks for nights and weekends'
        },
    
        xAxis: {
          breaks: [{ // Nights
            from: Date.UTC(2011, 9, 6, 16),
            to: Date.UTC(2011, 9, 7, 8),
            repeat: 24 * 36e5
          }, { // Weekends
            from: Date.UTC(2011, 9, 7, 16),
            to: Date.UTC(2011, 9, 10, 8),
            repeat: 7 * 24 * 36e5
          }]
        },
    
        rangeSelector: {
          buttons: [{
            type: 'hour',
            count: 1,
            text: '1h'
          }, {
            type: 'day',
            count: 1,
            text: '1D'
          }, {
            type: 'all',
            count: 1,
            text: 'All'
          }],
          selected: 1,
          inputEnabled: false
        },
    
        series: [{
          name: 'AAPL',
          type: 'area',
          data: data,
          gapSize: 5,
          tooltip: {
            valueDecimals: 2
          },
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          threshold: null
        }]
      });
    })
})
    