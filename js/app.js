$('#weathermap').click(() => {
    const cityName = $('#cityInput').val();
    $('#containers').show();
     $.ajax({
         type: 'GET',
         url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`,
         success: (data) => {
             const pressure = data.main.pressure;
             const humidity = data.main.humidity;
             const wind = Math.round((data.wind.deg * 5) / 18);
             const temperature =  Math.round(data.main.temp - 270);
             $('#currentPressure').html(pressure+"Hg");
             $('#currentHumidity').html(humidity+"%");
             $('#currrentWind').html(wind+"km/h");
             $('#currentname').html(cityName);
             $("#location").html(temperature);
                 },
         error: (err) => {
             console.log('In error callback');
             console.log(err);
         }
     });
 })
 
 $('#cweather').click(() => {
     const cityName = $('#cityInput').val();
      
      $.ajax({
          type: 'GET',
          url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`,
          success: (data) => {
              const temperature1 =  Math.round(data.main.temp - 270);
              $("#location").html(temperature1);
                  },
          error: (err) => {
              console.log('In error callback');
              console.log(err);
          }
      });
  })
 
  $('#fweather').click(() => {
     const cityName = $('#cityInput').val();
      
      $.ajax({
          type: 'GET',
          url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`,
          success: (data) => {
          const temperatures =  Math.round((data.main.temp - 270) * 1.8 + 32);
              $("#location").html(temperatures);
                  },
          error: (err) => {
              console.log('In error callback');
              console.log(err);
          }
      });
  })
  
  
 
 
 
 // /**
 //  * This function replaces the default weather underground weather icons
 //  * @param {String} weatherIcon the url of the weather underground icon.
 //  */
 // function getIcon(weatherIcon) {
 //     switch (weatherIcon) {
 //         case "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif":
 //         case "http://icons.wxug.com/i/c/k/partlycloudy.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_cloudy.gif":
 //         case "http://icons.wxug.com/i/c/k/cloudy.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/cloudy.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_chancerain.gif":
 //         case "http://icons.wxug.com/i/c/k/chancerain.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/rain_s_sunny.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_chanceflurries.gif":
 //         case "http://icons.wxug.com/i/c/k/chanceflurries.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/sunny_s_snow.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_chancesleet.gif":
 //         case "http://icons.wxug.com/i/c/k/chancesleet.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/snow_s_sunny.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/chancesnow.gif":
 //         case "http://icons.wxug.com/i/c/k/nt_chancesnow.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/sunny_s_snow.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif":
 //         case "http://icons.wxug.com/i/c/k/chancetstorms.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/sunny_s_rain.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_clear.gif":
 //         case "http://icons.wxug.com/i/c/k/nt_sunny.gif":
 //         case "http://icons.wxug.com/i/c/k/clear.gif":
 //         case "http://icons.wxug.com/i/c/k/sunny.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/sunny.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_flurries.gif":
 //         case "http://icons.wxug.com/i/c/k/flurries.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/snow_light.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_fog.gif":
 //         case "http://icons.wxug.com/i/c/k/nt_hazy.gif":
 //         case "http://icons.wxug.com/i/c/k/fog.gif":
 //         case "http://icons.wxug.com/i/c/k/hazy.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/fog.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif":
 //         case "http://icons.wxug.com/i/c/k/mostlycloudy.gif":
 //             $("#icon").attr('src', "https://ssl.gstatic.com/onebox/weather/64/cloudy_s_sunny.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/mostlysunny.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_partlysunny.gif":
 //         case "http://icons.wxug.com/i/c/k/partlysunny.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_sleet.gif":
 //         case "http://icons.wxug.com/i/c/k/sleet.gif":
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/sleet.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_rain.gif":
 //         case "http://icons.wxug.com/i/c/k/rain.gif":
 //             $("#icon").attr('src', "https://ssl.gstatic.com/onebox/weather/64/rain.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_snow.gif":
 //         case "http://icons.wxug.com/i/c/k/snow.gif":
 //             $("#icon").attr("src", "https://ssl.gstatif":
 //         case "http://icons.wxug.com/i/c/k/tstorms.gif"c.com/onebox/weather/64/snow.png");
 //             break;
 //         case "http://icons.wxug.com/i/c/k/nt_tstorms.gi:
 //             $("#icon").attr("src", "https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png");
 //             break;
 //     }
 // }
 
 // $(document).ready(function() {
 //     getFWeather();
 //  });
  
 
 
 
 $('#temperature').click(() => {
     const cityName = $('#cityInput').val();
     $.ajax({
         type: 'GET',
         url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=133b42fff699f45866056ed2e4a093db`,
         success: (data) => {
             var iconcode = data.list[0].weather[0].icon;
             var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
             $('img').attr('src', iconurl);
            //  var iconcode1 = data.list[0].weather[1].icon;
            //  var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
            //  $('img').attr('src', iconurl1);

             console.log('In success callback');
             console.log(data);
            //  var a= data.list[0].dt_txt[0];
            //  var listOfDates = "http://openweathermap.org/img/w/" + a;
            listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('h:mm a'));
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
                 type: 'line'
             },
             title: {
                 text: 'Temperature'
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
                 line: {
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
 
 $('#pressure').click(() => {
     const cityNames = $('#cityInput').val();
     $.ajax({
         type: 'GET',
         url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityNames}&appid=133b42fff699f45866056ed2e4a093db`,
         success: (data) => {
             console.log('In success callback');
             console.log(data);
             listOfDatess = data.list.map((ele) => moment(ele.dt * 1000).format('h:mm a'));
             console.log(listOfDates);
             listOfTemps = data.list.map(ele => Math.round(ele.main.pressure));
             console.log(listOfTemp);
             plotCharts(listOfTemps, listOfDatess);
             
         },
         error: (err) => {
             console.log('In error callback');
             console.log(err);
         }
     });

     const plotCharts = (tempArrs, datesArrs) => {
 
             $.getJSON(
            'https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json',
            function () {
              Highcharts.chart('chart-container', {
                chart: {
                  zoomType: 'x'
                },
                title: {
                  text: 'pressure'
                },
                xAxis: {
                    categories: datesArrs
                },
                yAxis: {
                  title: {
                    text: 'pressure'
                  },
                 labels: {
                    formatter: function () { return this.value + 'Hg'; }
                },
            },
                legend: {
                  enabled: false
                 },
                plotOptions: {
                  area: {
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
                    marker: {
                      radius: 2
                    },
                    lineWidth: 5,
                    states: {
                      hover: {
                        lineWidth: 3
                      }
                    },
                    threshold: null
                  }
                },
          
                series: [{
                    name: cityNames,
                    marker: {
                        symbol: 'square'
                    },
                    data: tempArrs
                }]
              });
            }
        );
        
    }
    })
     

    $('#wind').click(() => {
        const cityName1 = $('#cityInput').val();
        $.ajax({
            type: 'GET',
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName1}&appid=133b42fff699f45866056ed2e4a093db`,
            success: (data) => {
                console.log('In success callback');
                console.log(data);
                listOfDates1 = data.list.map((ele) => moment(ele.dt * 1000).format('h:mm a'));
                console.log(listOfDates1);
                listOfwind1 = data.list.map(ele => Math.round((ele.wind.deg * 5) / 18));
                console.log(listOfwind1);
                plotCharts(listOfwind1, listOfDates1);
                
            },
            error: (err) => {
                console.log('In error callback');
                console.log(err);
            }
        });

        const plotCharts = (windArr1, datesArr1) => {
        Highcharts.chart('chart-container', {
            chart: {
              type: 'spline',
              inverted: true
            },
            title: {
              text: 'wind'
            },
            xAxis: {
                reversed: false,
                title: {
                  enabled: true,
                  text: 'Altitude'
                },
                labels: {
                  format: '{value} km'
                },
                maxPadding: 0.05,
                showLastLabel: true
              },     
                 yAxis: {
                     categories: datesArr1,
                    title: {
                      text: 'width'
                    },
                     lineWidth: 2
                  },
                        
        
            legend: {
              enabled: false
            },
            // tooltip: {
            //   headerFormat: '<b>{series.name}</b><br/>',
            //   pointFormat: '{point.x} km: {point.y}°C'
            // },
            plotOptions: {
              spline: {
                marker: {
                  enable: false
                }
              }
            },
            series: [{
                name: cityName1,
                marker: {
                    symbol: 'square'
                },
                data: windArr1
            }]
          });
        }
    })

    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 