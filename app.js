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

    $("#navigation_header").css("padding-top", "20px");
    $("#navigation_header").css("padding-bottom", "20px");

    $("#body_content").css("background", "#1e1d1d");

    $("#personal_photo").css("height", "250px");
    $("#personal_photo").css("width", "250px");
    
    $("#body_content").css("padding-top", "150px");
    $(".magic-image").css("height", "350px");
    $(".magic-image").css("width", "420px");

    $("#image_content").css("padding-top", "120px");
    $("#form_content").css("padding-top", "100px"); 

    $("#pog").click(function() {
        $("#body_container").css("display", "block");
        $("#image_container").css("display", "none");
        $("#form_content").css("display", "none");
    });
    $("#mani_pog").click(function() {
        $("#body_container").css("display", "none");
        $("#image_container").css("display", "block");
        $("#form_content").css("display", "none");
    });
    $("#big_pog").click(function() {
        $("#body_container").css("display", "none");
        $("#image_container").css("display", "none");
        $("#form_content").css("display", "block");
    });
// kam ir paredzētas šīs programmas koda rindiņas? Ja tās tiek dzēstas vai aizkomentētas, tad javascript kods pogām strādā

    //$(".#button").html("navigation_buttons","Par_Mani");
    //$(".#button").html(".navigation_buttons","Mani_darbi");
    //$(".#button").html("navigation_buttons","Kontakti")

     
});