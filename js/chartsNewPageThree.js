var ctx = document.getElementById("chart-4-line").getContext("2d");

var data = {
  labels: [
    "2020-07-31", "2020-08-31", "2020-08-31", "2020-9-29", "2020-9-29", "2020-9-29", "2020-9-29", "2020-9-29",
  ],
  datasets: [

      {
        type: 'line',
        label: "Collection efficiency",
        data: [ 85, 38,84,55,86, 44,50,58,],
        borderColor: "#171410", // blue
        backgroundColor:"#171410",
        borderWidth: 2,
        fill: false,
        order: 1,
        pointRadius: 0, // Remove points
        pointHoverRadius: 0 // Remove hover effect on points
      },
      {
        type: 'line',
        label: "% Qualified",
        data: [57, 42, 30, 28, 17,18, 19, 12, 8, 10,12, 10, 16, 19],
        borderColor: "#090", // Red
        backgroundColor:"#090",
        borderWidth: 2,
        fill: false,
        order: 1,
        pointRadius: 0, // Remove points
        pointHoverRadius: 0 // Remove hover effect on points
      },
      {
        type: 'line',
        label: "Avarage Time For Dispuste Resolution",
        data: [22, 38, 23, 32, 31,37, 40, 43, 45, 48,50, 40, 35, 30],
        borderColor: "#27ADC6", // skyblue
        backgroundColor:"#27ADC6",
        borderWidth: 2,
        fill: false,
        order: 1,
        pointRadius: 0, // Remove points
        pointHoverRadius: 0 // Remove hover effect on points
      },
      {
        type: 'line',
        label: "Collection efficiency",
        data: [ 15, 37,54,12,16, 37,82,20,],
        borderColor: "#F7EE00", // blue
        backgroundColor:"#F7EE00",
        borderWidth: 2,
        fill: false,
        order: 1,
        pointRadius: 0, // Remove points
        pointHoverRadius: 0 // Remove hover effect on points
      },
      {
        type: 'line',
        label: "% Qualified",
        data: [12, 14, 29, 15, 17,18, 19, 12, 8, 10,34, 10, 25, 8],
        borderColor: "#FF0081", // Red
        backgroundColor:"#FF0081",
        borderWidth: 2,
        fill: false,
        order: 1,
        pointRadius: 0, // Remove points
        pointHoverRadius: 0 // Remove hover effect on points
      },
      {
        type: 'line',
        label: "Avarage Time For Dispuste Resolution",
        data: [60, 40, 60, 30, 22,15, 36, 43, 45, 48,15, 40, 56, 20],
        borderColor: "red", // skyblue
        backgroundColor:"red",
        borderWidth: 2,
        fill: false,
        order: 1,
        pointRadius: 0, // Remove points
        pointHoverRadius: 0 // Remove hover effect on points
      },
     
  ]
};

var options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position:"bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "rect",
        fontSize: 2,
        boxWidth: 10,
        pointStyleWidth: 12,
        template: {
          maxWidth: 1,
        },
      },
    },
    datalabels: {
      display: false // Ensure this is set to false to hide data labels
  }
  },
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 20,
        callback: function (value) {
          return value + "%";
        },
        font: {
          size: 9 // Font size for x-axis labels
        },
      },     
    },
    y1: {
      type: 'linear',
      position: 'right',
      beginAtZero: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
          callback: function(value) {
            return (value )+ "D";
          },
          // font: {
          //     size: 9 
          // },
      },
      grid: {
          drawOnChartArea: false, // Only draw grid lines for secondary y-axis
      },
  },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: false,
        maxWidth: 100,
        maxRotation: 0,
        font: {
          size: 9 // Font size for x-axis labels
        },
      }
    },
  },
};

var myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
});