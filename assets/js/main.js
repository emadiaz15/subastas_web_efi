function toggleContent(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);

    if(content && icon) {
        if(content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.querySelector('.plus-icon').classList.add('hidden');
            icon.querySelector('.minus-icon').classList.remove('hidden');
        } else {
            content.classList.add('hidden');
            icon.querySelector('.plus-icon').classList.remove('hidden');
            icon.querySelector('.minus-icon').classList.add('hidden');
        }
    }
}

function loadHomePage() {
    $.get("/partials/home.html", function (homeData) {
        $.get("/partials/en_curso.html", function (enCursoData) {
            $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $("#contentArea").html(homeData);
                $("#auctionsArea").html(enCursoData);

                $(this).removeClass('animate__animated animate__bounceOutLeft');

                $("#contentArea, #auctionsArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });
}

$(document).ready(function () {

    // Cargar el contenido principal al inicio
    loadHomePage();

    $("#homeLink").click(function (event) {
        event.preventDefault();
        loadHomePage();
    });

    $("#subastasLink").click(function (event) {
        event.preventDefault();
        loadHomePage();
    });

    $("#contentArea").on("click", "#enCursoLink", function (event) {
        event.preventDefault();

        $.get("/partials/en_curso.html", function (data) {
            var $auctionsArea = $("#auctionsArea");

            $auctionsArea.addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $auctionsArea.html(data).removeClass('animate__animated animate__bounceOutLeft');

                $auctionsArea.addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#contentArea").on("click", "#finalizadasLink", function (event) {
        event.preventDefault();

        $.get("/partials/finalizadas.html", function (data) {
            var $auctionsArea = $("#auctionsArea");

            $auctionsArea.addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $auctionsArea.html(data).removeClass('animate__animated animate__bounceOutLeft');

                $auctionsArea.addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#contentArea").on("click", "#canceladasLink", function (event) {
        event.preventDefault();

        $.get("/partials/canceladas.html", function (data) {
            var $auctionsArea = $("#auctionsArea");

            $auctionsArea.addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $auctionsArea.html(data).removeClass('animate__animated animate__bounceOutLeft');

                $auctionsArea.addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#contactLink").click(function (event) {
        event.preventDefault();

        $.get("/partials/contacto.html", function (data) {
            $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $("#contentArea").html(data).removeClass('animate__animated animate__bounceOutLeft');

                $("#contentArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#faqLink").click(function (event) {
        event.preventDefault();

        $.get("/partials/faq.html", function (data) {
            $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $("#contentArea").html(data).removeClass('animate__animated animate__bounceOutLeft');

                $("#contentArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#tutorialesLink").click(function (event) {
        event.preventDefault();

        $.get("/partials/tutoriales.html", function (data) {
            $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $("#contentArea").html(data).removeClass('animate__animated animate__bounceOutLeft');

                $("#contentArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#reglamentoLink").click(function (event) {
        event.preventDefault();

        $.get("/partials/reglamento.html", function (data) {
            $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $("#contentArea").html(data).removeClass('animate__animated animate__bounceOutLeft');

                $("#contentArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#loginLink").click(function (event) {
        event.preventDefault();

        $.get("/partials/login.html", function (data) {
            $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
                $("#contentArea").html(data).removeClass('animate__animated animate__bounceOutLeft');

                $("#contentArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });

    $("#contentArea").on("click", "#productoLink", function (event) {
        event.preventDefault();
        
        $("#contentArea").addClass('animate__animated animate__bounceOutLeft').one('animationend', function () {
            $.get("/partials/producto.html", function (data) {
                $("#contentArea").html(data).removeClass('animate__animated animate__bounceOutLeft');
                $("#contentArea").addClass('animate__animated animate__bounceInRight').one('animationend', function () {
                    $(this).removeClass('animate__animated animate__bounceInRight');
                });
            });
        });
    });


});
