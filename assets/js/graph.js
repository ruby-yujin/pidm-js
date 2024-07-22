document.addEventListener("DOMContentLoaded", function () {
  Highcharts.chart("period-status", {
    chart: {
      type: "column"
    },
    title: {
      text: "일별 매출 현황"
    },
    xAxis: {
      categories: [
        "4/27",
        "4/28",
        "4/29",
        "4/30",
        "5/1",
        "5/2",
        "5/3",
        "5/4",
        "5/5",
        "5/6",
        "5/7",
        "5/8",
        "5/9",
        "5/10",
        "5/11",
        "5/12",
        "5/13",
        "5/14",
        "5/15",
        "5/16",
        "5/17",
        "5/18",
        "5/19",
        "5/20",
        "5/21",
        "5/22",
        "5/23",
        "5/24",
        "5/25",
        "5/26"
      ],
      tickmarkPlacement: "on",
      title: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function () {
          return this.value / 10000 + "백만";
        },
        style: {
          fontSize: "10px",
          color: "#333333"
        }
      }
    },
    tooltip: {
      shared: true,
      formatter: function () {
        return (
          this.x +
          "<br>" +
          this.points
            .map(function (point) {
              return (
                point.series.name +
                ": " +
                Highcharts.numberFormat(point.y, 0) +
                "원"
              );
            })
            .join("<br>")
        );
      }
    },
    plotOptions: {
      column: {
        stacking: "normal"
      }
    },
    series: [
      {
        name: "신용카드매출금액",
        data: [
          2000000, 2000000, 1300000, 1500000, 1300000, 1000000, 1100000,
          1300000, 1700000, 1300000, 2100000, 1500000, 1000000, 1700000,
          1300000, 2100000, 2000000, 1600000, 1200000, 2000000, 1800000,
          1700000, 2200000, 1900000, 2200000, 2100000, 2000000, 1800000,
          1400000, 1100000
        ],
        color: "#e83d45"
      },
      {
        name: "현금영수증중거래매출금액",
        data: [
          3800000, 3800000, 2300000, 2300000, 2100000, 1500000, 1800000,
          2300000, 2800000, 2000000, 3500000, 2700000, 1500000, 2700000,
          2100000, 3500000, 3500000, 2800000, 2100000, 3700000, 3000000,
          2700000, 3700000, 3000000, 3800000, 3800000, 3400000, 2500000,
          2200000, 2000000
        ],
        color: "#4fc7d9"
      }
    ]
  });

  Highcharts.chart("daily-donut", {
    chart: {
      type: "pie"
    },
    title: {
      text: null
    },
    subtitle: {
      text: "2024/05/28",
      align: "center",
      verticalAlign: "top",
      style: {
        fontSize: "18px",
        color: "#333333"
      }
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: "매출",
        colorByPoint: true,
        data: [
          {
            name: "신용카드",
            y: 7000000,
            color: "#e83d45"
          },
          {
            name: "현금영수증",
            y: 3000000,
            color: "#4fc7d9"
          }
        ]
      }
    ],
    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
      itemMarginTop: 10,
      itemMarginBottom: 10
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y:,.0f}원</b>"
    },
    credits: {
      enabled: false
    }
  });

  Highcharts.chart("monthly-donut", {
    chart: {
      type: "pie"
    },
    title: {
      text: null
    },
    subtitle: {
      text: "2024/05/28",
      align: "center",
      verticalAlign: "top",
      style: {
        fontSize: "18px",
        color: "#333333"
      }
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: "매출",
        colorByPoint: true,
        data: [
          {
            name: "신용카드",
            y: 7000000,
            color: "#e83d45"
          },
          {
            name: "현금영수증",
            y: 3000000,
            color: "#4fc7d9"
          }
        ]
      }
    ],
    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
      itemMarginTop: 10,
      itemMarginBottom: 10
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y:,.0f}원</b>"
    },
    credits: {
      enabled: false
    }
  });
});
