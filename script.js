$(function () {
    $("#botao-enviar").click(function () {
        validaLocalFunction()

    })

    $("#botao-enviar2").click(function () {
        validaLocalFunction2()

    })



    $("a button.like").click(function () {
        like(this.id)
    })

    $("a button.dislike").click(function () {
        dislike(this.id)
    })

})

function like(id) {
    let identi = "#" + id
    let identi2 = "#dis" + id

    let likes = $(identi).data("like")
    let dislikes = $(identi2).data("dislike")



    if ($(identi).hasClass("far")) {

        $(identi).removeClass("far")
        $(identi).addClass("fas")
        $(identi).text(likes += 1)
        if ($(identi2).hasClass("fas")) {
            $(identi2).removeClass("fas")
            $(identi2).addClass("far")
            $(identi2).text(dislikes)
        }
        return true
    }
    else {
        $(identi).removeClass("fas")
        $(identi).addClass("far")
        $(identi).text(likes)
        return true
    }
}

function dislike(id) {
    let identi = "#" + id
    let identi2 = "#like" + id.slice(-1)

    let dislikes = $(identi).data("dislike")
    let likes = $(identi2).data("like")



    if ($(identi).hasClass("far")) {
        $(identi).removeClass("far")
        $(identi).addClass("fas")
        $(identi).text(dislikes += 1)
        if ($(identi2).hasClass("fas")) {
            $(identi2).removeClass("fas")
            $(identi2).addClass("far")
            $(identi2).text(likes)
        }
        return true
    }
    else {
        $(identi).removeClass("fas")
        $(identi).addClass("far")
        $(identi).text(dislikes)
        return true
    }
}


function validaLocalFunction() {
    let local = $("#localizacao")


    if (local.val() == '') {
        local.addClass("is-invalid")
        local.removeClass("is-valid")
        return false
    }
    else {
        local.removeClass("is-invalid")
        local.addClass("is-valid")
        return true
    }
}

function validaLocalFunction2() {
    let local2 = $("#localizacao2")

    if (local2.val() == '') {
        local2.addClass("is-invalid")
        local2.removeClass("is-valid")
        return false
    }

    else {
        local2.removeClass("is-invalid")
        local2.addClass("is-valid")
        return true
    }
}