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
        if ($(this).parent(".one-menu").length > 0) {
            // one-menu 클래스가 있는 경우에는 링크로 이동
            window.location.href = $(this).attr("href");
        } else {
            e.preventDefault();
            var twoDepthMenu = $(this).siblings(".two-depth");
            
            // 클릭한 one-depth 메뉴를 제외하고 모든 two-depth 메뉴를 숨김
            $(".two-depth").not(twoDepthMenu).hide();
            $(".d2").removeClass("active");
            $(".three-depth").not(twoDepthMenu).hide();
            
            // 클릭한 one-depth 메뉴의 two-depth 메뉴를 토글
            twoDepthMenu.toggle();
            
            // 모든 one-depth 메뉴에서 "active" 클래스 제거
            $(".d1").removeClass("active");
            
            // 클릭한 one-depth 메뉴에 "active" 클래스 추가
            $(this).parent(".d1").addClass("active");
        }
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


//제안 상세 페이지 내용 접었다 폈다 하는 기능
$(document).ready(function() {
    $(".board-block").on("click", ".btn-accordion", function(event) {
        var boardBlock = $(this).closest(".board-block");
        boardBlock.find(".board-list").toggle();
        boardBlock.find(".inner-table-wrap").toggle();
        boardBlock.toggleClass("fold");
        $(this).toggleClass("fold");
        
        if (boardBlock.hasClass("fold")) {
            boardBlock.find(".board-list").hide();
            boardBlock.find(".inner-table-wrap").hide();
            boardBlock.find(".caution-txt").hide();
        } else {
            boardBlock.find(".board-list").show();
            boardBlock.find(".inner-table-wrap").show();
            boardBlock.find(".caution-txt").show();
        }
    });
});

//window 사이즈에 따라 테이블 스크롤 추가
$(document).ready(function(){
    function checkWindowSize() {
        if($(window).width() <= 1440){
            $('.table-wrap').addClass('scroll');
        } else {
            $('.table-wrap').removeClass('scroll');
        }
    }

    // 페이지 로드시 확인
    checkWindowSize();

    // 창의 크기가 변경될 때마다 확인
    $(window).resize(function(){
        checkWindowSize();
    });
});

//팝업 이벤트
$(document).ready(function() {
    $(".selectable").click(function(event) {
        $(".selectable").removeClass("select");
        $(this).toggleClass("select");
    });
});

$(document).ready(function() {
    const body = $('body')[0];
    // 팝업 열기 버튼 클릭 이벤트
    $('.popup-button').click(function() {
        var target = $(this).data('target');
        $(target).show();
        //본문창 스크롤 막기
        $('body').addClass('scrollLock');
    });
    
    // 팝업 닫기 버튼 클릭 이벤트
    $('.popup-panel .close-button').click(function() {
        $(this).closest('.popup-panel').hide();
        //본문창 스크롤 막기 해제
        $('body').removeClass('scrollLock');
    });
});

//부서 찾기 팝업 조직도 클릭이벤트
$(document).ready(function() {
    $(".p2 > ul").hide();

    $(".p1 > a, .p2 > a, .p3 > a, .parttree-wrap .p4 > a").click(function(e) {
        e.preventDefault();

        var parentP = $(this).parent();
        var childUl = parentP.find("ul");

        // .p3에 대한 처리
        if (parentP.hasClass("part")) {
            $(".parttree-wrap .part").removeClass("choose");
            parentP.toggleClass("choose");

            // 만약 choose 클래스가 있다면 부모 <ul>을 보이도록 함
            if (parentP.hasClass("choose")) {
                parentP.closest("ul").show();
            }
        } else {
            // .p1, .p2에 대한 처리
            parentP.toggleClass("open");
            childUl.toggle();
        }
    });
});

                    
//검토자 조회 팝업 조직도 클릭이벤트
//조원관리 팝업 조직도 클릭이벤트
$(document).ready(function() {
    $(".f2 > ul").hide();

    $(".f1 > a, .f2 > a, .f3 > a, .findperson-wrap .f4 > a").click(function(e) {
        e.preventDefault();

        var parentP = $(this).parent();
        var childUl = parentP.find("ul");

        // .f4에 대한 처리
        if (parentP.hasClass("person")) {
            $(".findperson-wrap .person").removeClass("choose");
            parentP.toggleClass("choose");

            // 만약 choose 클래스가 있다면 부모 <ul>을 보이도록 함
            if (parentP.hasClass("choose")) {
                parentP.closest("ul").show();
                $(".btn-addmb").addClass("active"); // choose 클래스가 있으면 .btn-addmb에 active 클래스 추가
            } else {
                $(".btn-addmb").removeClass("active"); // choose 클래스가 없으면 .btn-addmb의 active 클래스 제거
            }
        } else {
            // .f1, .f2, .f3에 대한 처리
            parentP.toggleClass("open");
            childUl.toggle();
        }
    });
});



$(document).ready(function() {
    // 문서가 로드될 때 각 라디오 버튼을 확인하고 해당 .typeLabel에 "checked" 클래스를 추가합니다.
    $('.typeSuggest').each(function() {
        if ($(this).prop('checked')) {
            $(this).closest('.typeLabel').addClass('checked');
        }
    });

    // 라디오 버튼의 변경 이벤트를 감지하여 .typeLabel에 "checked" 클래스를 추가 또는 제거합니다.
    $('.typeSuggest').change(function() {
        // 모든 .typeLabel 요소에서 "checked" 클래스를 제거합니다.
        $('.typeLabel').removeClass('checked');

        // 선택한 라디오 버튼에 해당하는 .typeLabel에 "checked" 클래스를 추가합니다.
        if ($(this).prop('checked')) {
            $(this).closest('.typeLabel').addClass('checked');
        }
    });
});


// 클릭 시 해당 url로 이동하는 이동함수
function fn_pageMove(url) {
    window.location.href = url;
}

$(document).ready(function() {
    // fn_overlap 함수 정의
    function fn_overlap(targetPopup) {
        // #popup1 숨기기
        $('.popup-panel').hide();

        // 목표 팝업 보이기
        $('#' + targetPopup).show();
    }

    // 버튼 클릭 이벤트 핸들러 등록
    // $('#popup1 input[type=button]').click(function() {
    //     fn_overlap('popup2');
    // });
});


function flexibleWidth() {
    var flexDiv = $('.popup-body');

    flexDiv.each(function(i) {
        console.log(flexDiv.eq(i).outerWidth());
        var flexDiv3 = $(".popup-body").eq(i).outerWidth() + 7;
        var blockDiv = $(".board-block").eq(i).outerWidth() + 7;
        
        blockDiv.css({'width' : 'calc(100% - '+ flexDiv3 + 'px'});
    })
}