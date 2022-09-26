$(function(){
    $('.btn_sh').click(function(){
        $('.search_form').stop().slideToggle();
    });
    $('.header').mouseleave(function(){
        $('.search_form').hide();
    });
    $('.btn_work').click(function(){
        $('.btn_work').toggleClass('on');
        $('.work_list').toggle();
        $('.company_list').hide();
        $('.btn_company').removeClass('on');
    });
    $('.btn_company').click(function(){
        $('.btn_company').toggleClass('on');
        $('.company_list').toggle();
        $('.work_list').hide();
        $('.btn_work').removeClass('on');
    });
    $('.btn_cl').click(function(){
        $('.work_list').hide();
        $('.company_list').hide();
        $('.btn_company').removeClass('on');
        $('.btn_work').removeClass('on');
    });
    $('.menu').click(function(){
        $('.allmenu_wrap').show();
    });
    $('.btn_close').click(function(){
        $('.allmenu_wrap').hide();
    });
    $('.gnb>li').mouseenter(function(){
        $('.header').stop().animate({"height":365},400);
        $(".header").css("border-bottom", "1px solid #002b5c")
        $('.g_depth2').css("border-left","1px solid #f1f1f1")
        $('.g_depth2').stop().slideDown();
    })
    $('.gnb').mouseleave(function(){
        $('.header').stop().animate({"height":70},400);
        $('.g_depth2').stop().slideUp();
    });

    // 메인슬라이드
    $('.visual').slick({
        disableOnInteraction:false,
        autoplay: true,
        // 좌우버튼
        arrows: false,
        // 페이드효과
        fade:true,
      });
    //   배열선언 vedio_tit[0]..
    let vedio_tit = ['D TOWER','Canakkale 1915 Bridge','Petrochemical Plant'];
    let vedio_sub = ['도시를 개발하다.','세계 6번째 현수교 기술자립국, 세계최고의 기술력,DL이앤씨.',
    '1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.'];
    let vedio_list = ['https://www.youtube.com/embed/lAJ3SGjbdr4',
    'https://www.youtube.com/embed/vM8b0CZd2Ww','https://www.youtube.com/embed/gehtA1gfXPc'];
    
    // 닫기 버튼 누르면 modal_wrap 사라지기
    $(".close").click(function(){
        $(".modal_wrap").fadeOut(300);
    });
    // list_img를 클릭하면 클릭한 번째의 값이 모달팝업으로 띄우기
    $(".list_img>li").click(function(){
        // this는 여러요소 중에 선택된 요소값을 갖는 내장변수
        let num = $(this).index();
        console.log(num);
        // text함수 -> 변수에 있는 값을 마크업태그에 값을 기억시킬때 사용
        $(".m_txt>h2").text(vedio_tit[num]);
        $(".m_txt>p").text(vedio_sub[num]);
        // 해당태그안에 속성값을 가져올때 사용
        $(".m_txt iframe").attr("src",vedio_list[num]);
        // 모달팝업띄우기
        $(".modal_wrap").fadeIn(300);
        // 이전버튼 클릭하면
        $(".btn_list .prev").click(function(){
            if(num==0){
                num = 2;
            }else{
                num--;
            };
            $(".m_txt>h2").text(vedio_tit[num]);
            $(".m_txt>p").text(vedio_sub[num]);
            $(".m_txt iframe").attr("src",vedio_list[num]);
        });
        $(".btn_list .next").click(function(){
            if(num==2){
                num = 0;
            }else{
                num++;
            };
            $(".m_txt>h2").text(vedio_tit[num]);
            $(".m_txt>p").text(vedio_sub[num]);
            $(".m_txt iframe").attr("src",vedio_list[num]);
        });
    });

})