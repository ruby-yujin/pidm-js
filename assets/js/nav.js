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

  // 화면 크기에 따른 aside 초기 상태 설정
  function setInitialAsideState() {
    if ($(window).width() <= 1024) {
      $("aside").removeClass("active");
    } else {
      $("aside").addClass("active");
    }
  }

  // 페이지 로드 시 초기 설정 적용
  setInitialAsideState();

  // 윈도우 리사이즈 시 aside 상태 업데이트
  $(window).resize(function () {
    setInitialAsideState();
  });

  // 내비게이션 토글 버튼 클릭 이벤트
  $("#toggleNav").click(function (e) {
    e.preventDefault(); // 기본 이벤트 방지
    if ($(window).width() <= 1024) {
      $("aside").toggleClass("active");
    }
  });

  // 모바일 뷰에서 aside 외부 클릭 시 aside 닫기
  $(document).on("click", function (event) {
    if ($(window).width() <= 1024) {
      if (
        !$(event.target).closest("aside").length &&
        !$(event.target).closest("#toggleNav").length
      ) {
        $("aside").removeClass("active");
      }
    }
  });

  console.log("실행 ");
});
