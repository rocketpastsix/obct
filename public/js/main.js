$(document).ready(function(){

    $(document).foundation();

    // Main Page Slider
    $('.image').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        fade: true,
        cassEase: 'linear',
        autoplaySpeed: 2500
    });

    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });

    var offset = 250;
    var duration = 300;
    $(window).scroll(function(){
        if($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('button.button#cast').on('click', function(){
        var data = $('form#cast').serialize();
        console.log(data);
        $.ajax({
            url: '/admin/cast',
            data: data,
            cache: false,
            async: true,
            success: function() {
                console.log(data);
            },
            failure: function() {

            }
        });
    });

    $('button.button#editCast').on('click', function(){
        var data = $('form#editCast').serialize();
        console.log(data);
        $.ajax({
            url: '/admin/editCast',
            data: data,
            method: patch,
            cache: false,
            async: true,
            success: function() {
                console.log(data);
            },
            failure: function() {

            }
        });
    });

    $('button.button#whatsNew').on('click', function(){
        var data = $('form#whatsNew').serialize();
        console.log(data);
        $.ajax({
            url: '/admin/whatsNew',
            data: data,
            method: patch,
            cache: false,
            async: true,
            success: function() {
                console.log(data);
            },
            failure: function() {

            }
        });
    });

    $('button.button#alert').on('click', function(){
        var data = $('form#alert').serialize();
        console.log(data);
        $.ajax({
            url: '/admin/alert',
            data: data,
            method: 'POST',
            cache: false,
            async: true,
            success: function() {
                console.log(data);
            },
            failure: function() {

            }
        });
    });

    $('button.button#addSchool').on('click', function() {
        var data = $('form#addSchool').serialize();
        console.log(data);
        $.ajax({
            url: '/admin/schools',
            data: data,
            method: post,
            cache: false,
            async: true,
            success: function() {
                console.log(data);
            },
            failure: function() {

            }
        });
    });

    $('button.button#addPerformance').on('click', function() {
        var data = $('form#addPerformance').serialize();
        console.log(data);
        $.ajax({
            url: '/admin/newPerformance',
            data: data,
            method: post,
            cache: false,
            async: true,
            success: function() {
                console.log(data);
            },
            failure: function() {

            }
        });
    });

    $('button.button#editPerformance').on('click', function() {
        var data = $('form#editPerformance').serialize();
        console.log(data);
        $.ajax({
            url: '/admin/editPerformance',
            data: data,
            method: post,
            cache: false,
            async: true,
            success: function() {
                console.log(data);
            },
            failure: function() {

            }
        });
    });

    $('button.button.deleteSchool').click(function(){
        var data = (this.id);
        $.ajax({
            url: '/admin/schools',
            type: 'post',
            data: {  data:data ,_method:"DELETE"},
            cache: false,
            async: true,
            success: function(data) {
            },
            failure: function(data) {
                console.log(data);

            }
        });
    });

    $('button.button#remove').on('click', function(){
        var value = $(this).attr('value');
        $.ajax({
            url: '/admin/removeAlert',
            method: "POST",
            data: value,
            async: true,
            cache: false,
            success: function(){

            },
            failure: function(){

            }
        })
    });

    $('button.button#addCamp').on('click', function() {
        var data = $('form#addCamp').serialize();
        $.ajax({
            url: '/admin/summer',
            data: data,
            method: post,
            cache: false,
            async: true,
            success: function() {
                console.log(data);
            },
            failure: function() {

            }
        });
    });

    $('button.button#editCamp').on('click', function() {
        var data = $('form#editCamp').serialize();
        $.ajax({
            url: '/admin/summer' + data.id,
            data: data,
            method: post,
            cache: false,
            async: true,
            success: function() {
                console.log(data);
            },
            failure: function() {

            }
        });
    });

});
