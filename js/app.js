$(function(){
    $(".containers").hide();
    $(".day-container").hide();
    $("#btn-align").hide();
    $("#chart-container").hide();
})


 $('#weathermap').click(() => {
    $(".containers").show();
    $("#btn-align").show();
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
             const currentdates = moment(data.dt * 1000).format('dddd, h:mm a');
             var iconId = data.weather[0].icon;
             var icon =  "http://openweathermap.org/img/w/" + iconId + ".png";
             $('img').attr('src', icon);
             $('#currentPressure').html(pressure+"Hg");
             $('#currentHumidity').html(humidity+"%");
             $('#currrentWind').html(wind+"km/h");
             $('#currentname').html(cityName);
             $('#currentdate').html(currentdates);
             $("#tempdesc").html(data.weather[0].description);
             $("#tempval").html(temperature);
             $("#6").html(temperature);
             $('#1').attr('src', icon);

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
              $("#tempval").html(temperature1);
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
              $("#tempval").html(temperatures);
                  },
          error: (err) => {
              console.log('In error callback');
              console.log(err);
          }
      });
  })
  
  $('button').click(function(){
      var a=0;
      var b=7;
      
     if(this.id=="monday")
    {
      c=a;
      d=b;
    }
     else if(this.id=="tuesday")
    {
      c=a+7;
      d=b+7;
    }
    else if(this.id=="wednesday")
    {
      c=a+14;
      d=b+14;
    }
     else if(this.id=="thursday")
    {
      c=a+21;
      d=b+21;
    }
     else if(this.id=="firday")
    {
      c=a+28;
      d=b+28;
    }
    console.log('Button Clicked');
          var cityName = $('#cityInput').val();
          $.ajax({
              type: 'GET',
              url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c6692183353a35f1d73dbe6f90af94ba`,
              success: (data) => {
                  console.log('In success callback');
                  console.log(data);
                  listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('ddd, h:mm a'));
                  firstList=listOfDates.slice(c, d);
                  listOfTemp = data.list.map(ele => Math.round(ele.main.temp - 270));
                  secondList=listOfTemp.slice(c, d);
                  plotChart(secondList , firstList);
              },
              error: (err) => {
                  console.log('In error callback');
                  console.log(err);
              }
          });
  
      var plotChart=function(secondList, firstlist){
          console.log("Button clicked");
          var cityName=$('#cityInput').val();
          Highcharts.chart('chart-container', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Temperature'
            },
            xAxis: {
                categories: firstlist
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
                data: secondList
            }]
        });
     }
  })
  
  
 
 $('#temperature').click(() => {
    $(".day-container").show();
    $("#chart-container").show();
    var a=0;
    var b=7;
    console.log('Button Clicked');
        var cityName = $('#cityInput').val();
        $.ajax({
            type: 'GET',
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c6692183353a35f1d73dbe6f90af94ba`,
            success: (data) => {
                console.log('In success callback');
                console.log(data);
                listOfDates = data.list.map((ele) => moment(ele.dt * 1000).format('ddd, h:mm a'));
                console.log(listOfDates);
                firstList=listOfDates.slice(a, b);
                listOfTemp = data.list.map(ele => Math.round(ele.main.temp - 270));
                console.log(listOfTemp.length);
                secondList=listOfTemp.slice(a, b);
                plotChart(secondList  , firstList);
                var iconId = data.list[0].weather[0].icon;
                var icon =  "http://openweathermap.org/img/w/" + iconId + ".png";
                $("#2").attr('src',icon);
                $("#7").html(Math.ceil((data.list[5].main.temp-273)));
                var iconId1 = data.list[12].weather[0].icon;
                var icon1 =  "http://openweathermap.org/img/w/" + iconId1 + ".png";
                $("#3").attr('src',icon3);
                $("#8").html(Math.ceil((data.list[12].main.temp-273)));
                var iconId2 = data.list[20].weather[0].icon;
                var icon2 =  "http://openweathermap.org/img/w/" + iconId2 + ".png";
                $("#4").attr('src',icon3);
                $("#9").html(Math.ceil((data.list[20].main.temp-273)));
                var iconId3 = data.list[28].weather[0].icon;
                var icon3 =  "http://openweathermap.org/img/w/" + iconId3 + ".png";
                $("#5").attr('src',icon3);
                $("#10").html(Math.ceil((data.list[28].main.temp-273)));
                
            },
           
               error: (err) => {
                console.log('In error callback');
                console.log(err);
            }
        });

    var plotChart=function(secondList, firstlist){
        console.log("Button clicked");
        var cityName=$('#cityInput').val();
        Highcharts.chart('chart-container', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Temperature'
            },
            xAxis: {
                categories: firstlist
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
                data: secondList
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
             console.log(listOfDatess);
             listOfTemps = data.list.map(ele => Math.round(ele.main.pressure));
             console.log(listOfTemps);
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
            yAxis: {
                

                reversed: false,
                title: {
                  enabled: true,
                  categories: datesArr1,
                  
                },
                
                maxPadding: 0.05,
                showLastLabel: true
              },     
                 xAxis: {
                    title: {
                        text: 'wind'
                      },
                     labels: {
                        formatter: function () { return this.value + 'km/hr'; }
                    },
                    
                    title: {
                      text: 'width'
                    },
                     lineWidth: 2
                  },
                        
        
            legend: {
              enabled: false
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
                name: cityName1,
                marker: {
                    symbol: 'square'
                },
                data: windArr1
            }]
          });
        }
  })
 
 
 
 
 
 
 
 
 
 
 
 





