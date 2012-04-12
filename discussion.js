var discussion = {};


discussion.timeline = (function() {
    var init = function() {
        $('.discussion').on('click', '.responses', getResponses);
    };

    var getResponses = function(event) {
        event.preventDefault();

        var id = $(this).parents('[data-comment-id]').attr('data-comment-id');
        var responses = $('[data-response-to=' + id + ']');

        console.log(responses);
    };

    return {
        init: init
    };
})();


$(document).ready(function() {
    discussion.timeline.init();
});