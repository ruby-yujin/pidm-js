$(document).ready(function () {
  $("#start-date").datepicker({
    showOn: "button",
    buttonImage: "../../assets/img/icon-calendar.png",
    buttonImageOnly: true,
    buttonText: "Select date"
  });

  //한글적용을 위해 추가
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

  $("#end-date").datepicker({
    showOn: "button",
    buttonImage: "../../assets/img/icon-calendar.png",
    buttonImageOnly: true,
    buttonText: "Select date"
  });
});
