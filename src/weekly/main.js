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

        $.getJSON('/bongweek/calories', function (res) {

            // removeSpinner();

            if (+res.status === 0) {
                drawer.draw(targetId, res.data).forEach(randomAnim);            
            }
            else {
                alert('获取数据异常，请稍后重试');
            }


        });
    }

    $(function(){
        init('bo-weekly-chart')
    })

});
