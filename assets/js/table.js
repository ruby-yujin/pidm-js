$(document).ready(function () {
  // table filter datepicker를 위해 둠
  $("#start-date").datepicker({
    dateFormat: "yy.mm.dd",
    showOn: "button",
    buttonImage: "../../assets/img/icon-calendar.png",
    buttonImageOnly: true,
    buttonText: "Select date"
  });

  $("#end-date").datepicker({
    dateFormat: "yy-mm-dd",
    showOn: "button",
    buttonImage: "../../assets/img/icon-calendar.png",
    buttonImageOnly: true,
    buttonText: "Select date"
  });

  $.datepicker.setDefaults({
    dateFormat: "yymmdd",
    prevText: "이전 달",
    nextText: "다음 달",
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ],
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ],
    dayNames: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    showMonthAfterYear: true,
    yearSuffix: "년"
  });

  //table pagination
  $("#pagination-test01").pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    callback: function (data, pagination) {
      // template method of yourself
      var html = template(data);
      dataContainer.html(html);
    }
  });
});

//table td 생성
document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("test-table");
  const tbody = table.querySelector("tbody");

  // 10개의 행을 생성
  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");

    // 각 행에 20개의 열(td) 추가
    for (let j = 0; j < 20; j++) {
      const cell = document.createElement("td");

      // 첫 번째 열에는 순번 추가
      if (j === 0) {
        cell.textContent = i;
      }

      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }
});
