$(function() {
    $("#txt").val('texto alterado com jquery');
    $(".email").val('email alterado com jquery naruto');

    $("p, li").css('opacity','.75');
    $("p:not(.destaque)").css('color', "#999");
    $("li:first").css("color", "green");
    $("li:first-child").css("color", "green");

    $("p:gt(2)").css({ //gt, et, lt - greater, equal, less than
        "color": "orange",
        fontSize: "22px"
    });

    $("a[title]").css("color", "red");
    $("a:not([title])").hide();

    $("li:odd").css("backgroundColor", "#ccc");
    $("li:even").css("backgroundColor", "#5edbcd");

    $("p:contains(afo 3)").css("color", "red");
    $("p:has(i)").css("color", "blue");
    $("p:empty").text("este paragrafo estava vazio, #Naruto");
    $("p:hidden").show();
});