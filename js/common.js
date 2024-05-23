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
/*$(document).ready(function() {
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
});*/

                    
//검토자 조회 팝업 조직도 클릭이벤트
//조원관리 팝업 조직도 클릭이벤트
$(document).ready(function() {
    $(".f2 > ul").hide();

    $(".f1 > a, .f2 > a, .f3 > a, .findperson-wrap .f4 > a, .f5 > a, .f6 > a").click(function(e) {
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


/**
 * 현재 창의 위치에서 경로명을 추출하여 반환합니다.
 *
 * 만약 `isMove` 파라미터가 참이라면, 'go_'를 포함하는 경우에 해당 부분을 제거하고,
 * 'go_'가 포함되지 않은 문자열을 반환합니다. 'go_' 뒤의 문자열이 두 부분('_'로 구분)으로
 * 나뉠 경우 첫 두 부분만 반환합니다. 'isMove'가 거짓이면, 경로명에서 'go_' 다음에 오는
 * 부분을 반환합니다.
 *
 * @param {boolean} isMove - 경로명에서 'go_'를 제거할지 여부를 결정하는 부울 변수입니다.
 *                           이 값이 참이면 'go_' 제거 또는 앞의 두 세그먼트만 반환하고,
 *                           거짓이면 원래의 경로명을 그대로 반환합니다.
 * @returns {string} 'isMove'의 값에 따라 처리된 경로명을 문자열로 반환합니다.
 */
function getPathName(isMove) {
	
	
    //var path = window.location.pathname.split('/');
    //var pathName = path[path.length-1];
  /*  if ( isMove ) {
      const arr = pathName.split("_");
      if ( arr.length < 3 ) return pathName;       // go_xxx 형태의 문자열을 반환합니다.
      else return arr[0] + "_" + arr[1];           // 'go_' 제거 후 첫 두 세그먼트 반환합니다.
    }*/
    // 'isMove'가 false일 경우, 'go_'를 제외한 나머지 부분을 반환합니다.
	let path = window.location.pathname;
	if(isMove){
		var segments = path.split('/'); // Split the path into segments
	    segments.pop(); // Remove the last segment
	    return segments.join('/'); // Rejoin the remaining segments
	}else{
		return path;
	}
    
}

// controller 별로 requestMapping이 부여되어 contextPath 필요
function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf('/',1));
}

// Input, TextArea 작성 시 체크
function validateForm() {
    var isEmptyElement = null;
	var message = '필수입력 값을 확인하세요.';
	var returnValue = new Object();

    const elList = $.merge($('input:not([type="hidden"])'), $('textarea'));
    if ( elList.length > 0 ) {
      for ( var i=0; i<elList.length; i++ ) {
        const el = elList[i];  
        var isTxtPoint = $(el).closest('.brd-w-item').find('.txt-point').length > 0 ? true : false;
        if ( isTxtPoint && ($.trim($(el).val()) < 1) ) {
            isEmptyElement = $(el);
            break;
        }
      }
    }
	
	returnValue.el = isEmptyElement;
	returnValue.msg = message;
    return returnValue;
}

/**
 * jQuery 객체의 폼 데이터를 JSON 객체로 직렬화합니다.
 * 이 함수는 폼의 각 input 요소의 이름과 값을 객체의 속성과 값으로 매핑합니다.
 * 같은 이름을 가진 여러 값은 배열로 직렬화합니다.
 * @returns {Object} 폼 데이터의 JSON 객체 표현
 */
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray(); // 폼 데이터를 이름-값 쌍의 배열로 변환
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]]; // 단일 값이 있는 경우, 배열로 변환
            }
            o[this.name].push(this.value || ''); // 값이 undefined인 경우 빈 문자열로 대체
        } else {
            o[this.name] = this.value || ''; // 처음 나타난 이름은 바로 객체에 추가
        }
    });
    return o; // 직렬화된 객체 반환
};

