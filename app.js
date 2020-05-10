$(document).ready(function() { 

    $("#body_container").css("display", "block");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "none");

    $("#header").css("background", "image");
    $("#header").css("width", "100%");
    $("#header").css("height", "20%");

    $("#body").css("background", "#1e1d1d");
    $("#body").css("width", "100%");
    $("#body").css("height", "75%");
    
    $("#footer").css("background", "#FEA860");
    $("#footer").css("width", "100%");
    $("#footer").css("height", "5%");

    $("#navigation_header").css("padding-top", "20px");
    $("#navigation_header").css("padding-bottom", "20px");

    $("#body_content").css("background", "#1e1d1d");

    $("#personal_photo").css("height", "250px");
    $("#personal_photo").css("width", "250px");
    
    $("#body_content").css("padding-top", "150px");
    $(".magic-image").css("height", "350px")
    $(".magic-image").css("width", "350px")

    $("#image_content").css("padding-top", "120px");
    $("#form_content").css("padding-top", "100px");

    $(".#button").html("navigation_buttons","Par_Mani");
    $(".#button").html(".navigation_buttons","Mani_darbi");
    $(".#button").html("navigation_buttons","Kontakti")

    $(document).ready(function() {
        var settings = {
            "bodyContainerDisplay":"block",
            "imageContainerDisplay":"none",
            "formContainerDisplay":"none",
        };
            $("body_container").css("display", settings.bodyContainerDisplay);
            $("image_container").css("display", settings.imageContainerDisplay);
            $("form_content").css("display", settings.formContainerDisplay);
    }

    $("#navigation_buttons p").click(function(){
        $(this).css("color"" #f99e70 ");

        var text = $(this).text();

        if(text == "Par mani") {
            $("#body_container").css("display","block");
            $("#body_container").css("display","none");
            $("#form_content").css("display","none");
            $("#my_works").css("color","#f99e70");
            $("#info").css("color","#f99e70")
        }
        if(text == "Mani darbi") {
            $("#body_container").css("display","none");
            $("#body_container").css("display","block");
            $("#form_content").css("display","none");
            $("#my_works").css("color","#f99e70");
            $("#info").css("color","#f99e70")
        }
        if(text == "Kontakti") {
            $("#body_container").css("display","none");
            $("#body_container").css("display","none");
            $("#form_content").css("display","block");
            $("#my_works").css("color","#f99e70");
            $("#info").css("color","#f99e70")
        }
    }
});