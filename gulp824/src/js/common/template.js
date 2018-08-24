define(['jquery', 'hand'], function($, Handlebars) {
    return function(tar, data, cont) {
        var htmlel = $(tar).html();
        var setdata = Handlebars.compile(htmlel);
        $(cont).html(setdata(data))
    }
})