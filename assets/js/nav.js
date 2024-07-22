$(document).ready(function () {
  $("#nav").accordion({
    header: "li > a",
    collapsible: true,
    heightStyle: "content",
    active: false,
    icons: false
  });

  // 서브메뉴가 없는 항목 클릭 시 페이지 이동
  $("#nav > ul > li > a").on("click", function (e) {
    if ($(this).next("ul").length === 0) {
      window.location.href = $(this).attr("href");
    }
  });

  // 커스텀 아이콘 추가
  $("#nav > ul > li:not(:first-child) > a").prepend(
    '<span class="custom-icon"></span>'
  );

  // 아코디언 상태 변경 시 아이콘 전환
  $("#nav").on("accordionactivate", function (event, ui) {
    var icons = $(this).find(".custom-icon");
    icons.removeClass("open");
    if (ui.newPanel.length) {
      ui.newHeader.find(".custom-icon").addClass("open");
    }
  });

  console.log("실행 ");
});
