define(['jquery', 'temp', 'bscrol'], function($, temp, BScroll) {
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(data) {
            console.log(data.data)
            temp('.text', data.data, '.list');
            new BScroll('.main', {
                probeType: 2,
                click: true,
                scroll: true
            })
           
        }
    })
    //跳转
    // $('.list').on('click', 'li', function() {
    //     console.log(0)
    //     window.location.href = '../page/detail.html'
    // })
    
})