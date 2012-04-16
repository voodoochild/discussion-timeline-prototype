var discussion = {};


discussion.timeline = (function() {
    var init = function() {
        $('.discussion').on('click', '.responses', simpleDisplay);
    };

    var simpleDisplay = function(event) {
        event.preventDefault();
        var comment = $(this).parents('[data-comment-id]');

        if (comment.data('showing-responses')) {
            comment.find('.response').remove();
            comment.data('showing-responses', false);
        }
        else {
            var id = comment.attr('data-comment-id');
            var responses = $('[data-response-to=' + id + ']');
            var i, l, r;
            for (i = 0, l = responses.length; i < l; i++) {
                r = $(responses[i]).clone();
                r.addClass('response').find('.response').remove();
                r.hide().find('.tools').empty();
                comment.append(r);
            }
            comment.data('showing-responses', true)
                   .find('.response').fadeIn();
        }
    };

    return {
        init: init
    };
})();


$(document).ready(function() {
    discussion.timeline.init();
});