$(document) .ready(function () {
    $('.ask--sad__header').click(function () {
        $(this).next().slideToggle (500);
        if ($(this).find('.ask--sad__button.ask--sad__button--up').css
        ('display')==='none') {
            $(this).find('.ask--button.ask--sad__button--down ').css
            ('display','block');
            $(this).find('.ask--button.ask--sad__button--up ').css
            ('display','none');
        } else {
            $(this).find('.ask--button.ask--sad__button--up ').css
            ('display','none');
            $(this).find('.ask--button.ask--sad__button--down ').css
            ('display','block');
        }

    })
});