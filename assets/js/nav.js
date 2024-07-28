$(document).ready(function () {
  var $nav = $("#nav");
  var currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  const menu = [
    { link: "home" },
    { link: "transaction-details" },
    { link: "sale-saggregation" },
    { link: "closing-status" },
    { link: "deposit-status" },
    { link: "settlement-status" },
    { link: "machine-status" },
    { link: "my-info-edit" },
    { link: "product-group-manage" },
    { link: "product-manage" },
    { link: "operational-machine-manage" },
    { link: "notice" },
    { link: "popular-qna" }
  ];

  var activeMenuItem = menu.find((item) => item.link === currentPage);

  if (activeMenuItem) {
    // 일치하는 메뉴 항목에 대해 active 클래스 추가
    $("#nav .main-menu a, #nav .sub-menu a").each(function () {
      var linkHref = $(this).attr("href");
      if (linkHref.includes(activeMenuItem.link)) {
        $(this).addClass("active");
        $(this).parents("li").addClass("active");

        // 서브메뉴 항목인 경우, 상위 메인 메뉴 항목에도 'active' 클래스 추가
        if ($(this).closest(".sub-menu").length) {
          $(this).closest(".main-menu > li").addClass("active");
        }
      }
    });
  }

  console.log(currentPage);

  // 아코디언 초기화를 제거하고 커스텀 토글 함수 구현
  function toggleSubMenu($item) {
    var $subMenu = $item.find(".sub-menu");
    var isOpen = $subMenu.is(":visible");

    $(".sub-menu").slideUp();
    $(".main-menu > li > a .custom-icon").removeClass("open");

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
      return true;
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

  $(".main-menu > li:not(:first-child) > a").prepend(
    '<span class="custom-icon"></span>'
  );

  function setInitialAsideState() {
    if ($(window).width() <= 1024) {
      $("aside").removeClass("active");
    } else {
      $("aside").addClass("active");
    }
  }

  setInitialAsideState();

  $(window).resize(function () {
    setInitialAsideState();
  });

  $("#toggleNav").click(function (e) {
    e.preventDefault(); // 기본 이벤트 방지
    if ($(window).width() <= 1024) {
      $("aside").toggleClass("active");
    }
  });

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
});
