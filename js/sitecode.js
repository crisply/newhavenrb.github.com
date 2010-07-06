var nhvsite = {};
nhvsite.templates = {};
nhvsite.templates.gg_post = function gg_post() {
    var template;
    template = '<div><a href="{{link}}" class="post-title">{{title}}</a>';
    template += ' <div class="post-author">{{author}}</div></div>';
    return template
};

$(document).ready( function () {
    $.jGFeed('http://groups.google.com/group/newhavenrb/feed/atom_v1_0_msgs.xml',
             function (feeds) {
                 if (!feeds) {
                     return false;
                 }

                 $.each(feeds.entries, function (index,feed) {
                     $("#google-groups-posts").append(Mustache.to_html(nhvsite.templates.gg_post(), feed));
                 });
             }, 6);

    // HA!
    $(window).konami( function () {
        var markup = '<div class="konami"><p>RUBY</p>';
        markup += '<p class="secret"><code>Level.unlock(:bonus => "konami")</code></p>';
        markup += '</div>'
        $("#page").fadeOut();
        $("body").append(markup);
        setTimeout(function () { $(".konami").fadeIn(); }, 1500);
    });
});
