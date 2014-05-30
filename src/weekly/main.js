/**
 * @file weekly main
 */

define(function (require) {

    var drawer = require('./drawer');

    function init(targetId) {

        // var removeSpinner = drawer.spinner(targetId, 70, 120, 12, 25, "#fff");

        function randomAnim(circle) {
            var x = circle.attr('cx');
            var y = circle.attr('cy');

            circle.attr({
                cx: Math.random() * 500,
                cy: Math.random() * 500
            })
            .animate(Raphael.animation({cx: x, cy: y}, 1e3, 'bounce'));

        }

        function callback (res) {
            // removeSpinner();

            if (+res.status === 0) {
                drawer.draw(targetId, res.data).forEach(randomAnim);
            } else if (+res.status === 302) {
                locatoin.herf = res.statusInfo;
            } else {
                alert('获取数据异常，请稍后重试');
            }

        }

        $.ajax({
            url: '/bongweek/calories',
            data: {
                "_": (+new Date)
            },
            success: callback,
            dataType: 'json'
        });


        // tip
        $('.bo-tip p')
            .on('click', function () {
                $(this).css('top') == '0px' 
                    ? $(this).css('top', '-85px') 
                    : $(this).css('top', '0');
            });

    }

    $(function(){
        init('bo-weekly-chart')
    })

});
