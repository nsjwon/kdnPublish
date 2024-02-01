//헤더 메뉴 드롭다운
$(document).ready(function() {
    $("#gnb").mouseenter(function() {
        // 마우스가 올라갔을 때
        $("#header").addClass("on");
        $(".gnb-bg").addClass("on");
        $(".depth2").addClass("on");
        $(".dim").show();
    }).mouseleave(function() {
        // 마우스가 나갔을 때
        $("#header").removeClass("on");
        $(".gnb-bg").removeClass("on");
        $(".depth2").removeClass("on");
        $(".dim").hide();
    });
});   

//레프트 메뉴 클릭이벤트
$(document).ready(function() {
    $(".d1 > a").click(function(e) {
        e.preventDefault(); // 기본 동작을 막음

        var parentD1 = $(this).parent(".d1");
        var twoDepthMenu = parentD1.find(".two-depth");

        // 클릭한 one-depth 메뉴를 제외하고 모든 two-depth 메뉴를 숨김
        $(".two-depth").not(twoDepthMenu).hide();
        $(".d1").not(parentD1).removeClass("active");

        // 현재 클릭한 one-depth 메뉴의 two-depth 메뉴를 토글
        twoDepthMenu.toggle();

        // 현재 클릭한 one-depth 메뉴에 active 클래스를 추가
        parentD1.toggleClass("active");
    });
});

//메인페이지 제안검토 카테고리 설정 셀렉트박스
$(document).ready(function() {
    $(".ct-select > a").click(function(event) {
        $(".ct-select").toggleClass("open");
        if ($(".ct-select").hasClass("open")) {
            $(".ct-option").show();
        } else {
            $(".ct-option").hide();
        }
        event.stopPropagation();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.ct-select').length) {
            $(".ct-option").hide();
            $(".ct-select").removeClass("open");
        }
    });

    $(".ct-option li a").click(function() {
        var selectedOptionText = $(this).text();
        $(".ct-select > a").text(selectedOptionText);
        $(".ct-option").hide();
        $(".ct-select").removeClass("open");
    });
});

