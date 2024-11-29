var ctx = document.getElementById("myChart-101").getContext("2d");
var data = {
  labels: ["Feb 2024", "Nov 2024", "Apr 2024"],
  datasets: [
    {
      type: "bar",
      label: "E-mail",
      data: [25,0,145],
      backgroundColor: "#0080A9",
      barPercentage: window.innerWidth < 600 ? 0.5 : 0.8,
      order:2,
    },
    {
      type: "bar",
      label: "E-mail (Automatic action)",
      data: [40,25,210],
      backgroundColor: "#34D2D9",
      barPercentage: window.innerWidth < 600 ? 0.5 : 0.8,
      order:2,
    },
    {
        type: "bar",
        label: "Phone",
        data: [0,25,0],
        backgroundColor: "#FF8F00",
        barPercentage: window.innerWidth < 600 ? 0.5 : 0.8,
        order:2,
      },
      {
        type: "bar",
        label: "SMS",
        data: [0,20,0],
        backgroundColor: "#95C11B",
        barPercentage: window.innerWidth < 600 ? 0.5 : 0.8,
        order:2,
      },
      {
        type: "bar",
        label: "Dunning letters",
        data: [10,0,110],
        backgroundColor: "#F7EE00",
        barPercentage: window.innerWidth < 600 ? 0.5 : 0.8,
        order:2,
      },
      {
        type: "bar",
        label: "Litigaion",
        data: [10,0,110],
        backgroundColor: "#FF0081",
        barPercentage: window.innerWidth < 600 ? 0.5 : 0.8,
        order:2,
      },
  ],
};
var options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        min: 0,
        max: 250,
        stepSize: 50,
        // callback: function (value) {
        //   return (value / 1000).toFixed(3) + "k";
        // },
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};
var myChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options,
});