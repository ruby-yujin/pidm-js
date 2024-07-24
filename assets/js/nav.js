$(document).ready(function () {
  var $nav = $("#nav");

  // 아코디언 초기화를 제거하고 커스텀 토글 함수 구현
  function toggleSubMenu($item) {
    var $subMenu = $item.find(".sub-menu");
    var isOpen = $subMenu.is(":visible");

    // 모든 서브메뉴 닫기
    $(".sub-menu").slideUp();
    $(".main-menu > li > a .custom-icon").removeClass("open");

    // 클릭한 항목이 닫혀있었다면 열기
    if (!isOpen) {
      $subMenu.slideDown();
      $item.find("> a .custom-icon").addClass("open");
    }
  }

  // 메인 메뉴 항목 클릭 시 동작
  $(".main-menu > li > a").on("click", function (e) {
    var $this = $(this);
    var $parent = $this.parent();

    if ($parent.find(".sub-menu").length === 0) {
      // 서브메뉴가 없는 경우 페이지 이동
      return true; // 기본 동작 허용
    } else {
      // 서브메뉴가 있는 경우 토글
      e.preventDefault();
      toggleSubMenu($parent);
    }
  });

  // 서브메뉴 항목 클릭 시 이벤트 전파 중단
  $(".sub-menu li a").on("click", function (e) {
    e.stopPropagation();
  });

  // 커스텀 아이콘 추가
  $(".main-menu > li:not(:first-child) > a").prepend(
    '<span class="custom-icon"></span>'
  );

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
