// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

  let times = [];
  let value = 0;
  let currentDate = new Date();
  let sum =0;
  $.get(
      "app_dev.php/api/time/timers",
      function (data) {
        data.forEach(function (entry) {
          let stopDateTime = new Date(entry.stop_time);
          if ( stopDateTime.getHours() <= 1) {
            stopDateTime.setHours(stopDateTime.getHours() - 1);
          }
          if (stopDateTime.getMonth() === currentDate.getMonth()) {
            var time = entry.time.split(':').map(function (map) {
              return parseInt(map, 10);
            });
            value = (time[0]) + (time[1] / 60);
            if (times[stopDateTime.getDate() -1] != null) {
              times[stopDateTime.getDate() -1] += value;
            } else {
              times[stopDateTime.getDate() -1] = value;
            }
          }
        });

        for (let i = 0; i < times.length; i++) {
          if (times[i] != undefined) {
            sum += times[i];
          }
        }

        var ctx = document.getElementById("myBarChart");
        $('p[name="hours"]').text(parseInt(sum) + ' h');
        var myBarChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: getDaysInMonth(),
            datasets: [{
              label: "Revenue",
              backgroundColor: "#4e73df",
              hoverBackgroundColor: "#2e59d9",
              borderColor: "#4e73df",
              data: times,
            }],
          },
          options: {
            maintainAspectRatio: false,
            layout: {
              padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
              }
            },
            scales: {
              xAxes: [{
                time: {
                  unit: 'month'
                },
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  maxTicksLimit: 31
                },
                maxBarThickness: 25,
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 12,
                  maxTicksLimit: 12,
                  padding: 7,
                  // Include a dollar sign in the ticks
                  callback: function(value, index, values) {
                    return number_format(value) + 'h';
                  }
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2]
                }
              }],
            },
            legend: {
              display: false
            },
            tooltips: {
              titleMarginBottom: 10,
              titleFontColor: '#6e707e',
              titleFontSize: 14,
              backgroundColor: "rgb(255,255,255)",
              bodyFontColor: "#858796",
              borderColor: '#dddfeb',
              borderWidth: 1,
              xPadding: 15,
              yPadding: 15,
              displayColors: false,
              caretPadding: 10,
              callbacks: {
                label: function(tooltipItem, chart) {
                  // var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                  return 'Godzin: ' + number_format(tooltipItem.yLabel) + 'h';
                }
              }
            },
          }
        });
      }
  );


function getDaysInMonth() {
  let currentDate = new Date();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let date = new Date(Date.UTC(year, month, 1));
  let days = [];
  while (date.getMonth() === month) {
    let day = new Date(date);
    days.push(day.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}