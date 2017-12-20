$(function () {
    $(".nav-btn").click(function () {
        $("#nav-container").stop().slideToggle(200);
        $(".nav-btn").toggleClass("close");

    });
    $("#gnav li a").click(function () {
        $("#nav-container").fadeOut(100);
        $(".nav-btn").removeClass("close");
    });

//    $("#gnav li a").each(function () {
//        $href = $(this).attr("href");
//    
//       
//        return false
//    });


    $("#fullpage-wrap").click(function () {
        $("#nav-container").fadeOut(100);
        $(".nav-btn").removeClass("close");
        $("#mail-form").fadeOut(200);
    });　




    $("#contact-area .mail-btn a").click(function () {
        $("#mail-form").stop().slideToggle();
        $("#nav-container").fadeOut(100);
    });
    $("#submit-btn").click(function () {
        $(".nav-btn").removeClass("close");
        $("#mail-form").fadeOut(100);
    })

    $(".work-left a").click(function () {
        //    bodyの一番下に#bgと#photoを追加
        $("body").append("<div id='bg'></div>");
        $("body").append("<div id='photo'></div>");

        //        #bgと#photoを一旦非表示にする。
        $("#bg").hide();
        $("#photo").hide();

        $("#photo").html("<img>");
        //        #photo　img要素のsrc属性にクリックした自分自身の
        //        href属性の値を指定
        $("#photo img").attr("src", $(this).attr("href"));

        $("#bg").fadeIn();
        $("#photo").fadeIn();

        $("#bg").click(function () {
            //        #bgと#photoを非表示にする。
            //            その後に#bgと#photoを削除する。
            $(this).fadeOut(function () {
                $(this).remove();
            });

            $("#photo").fadeOut(500, function () {
                $(this).remove();
            });
        });





        return false;
    });
});
