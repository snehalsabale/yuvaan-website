/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    window.onload = function () {
        var chart = new CanvasJS.Chart("chartContainer",
            {
                zoomEnabled: false,
                animationEnabled: true,
                title:{
                    text: "Volunteers"
                },
                axisY2:{
                    maximum: 600,
                    interval: 100,
                    interlacedColor: "#F5F5F5",
                    gridColor: "#D7D7D7",
                    tickColor: "#D7D7D7"
                },
                theme: "theme2",
                toolTip:{
                    shared: true
                },
                legend:{
                    verticalAlign: "bottom",
                    horizontalAlign: "center",
                    fontSize: 15,
                    fontFamily: "Lucida Sans Unicode"

                },
                data: [
                    {
                        type: "line",
                        lineThickness:3,
                        axisYType:"secondary",
                        showInLegend: true,
                        name: "Volunteers",
                        dataPoints: [
                            { x: new Date(2013, 01), y: 150 },
                            { x: new Date(2014, 01), y: 300 },
                            { x: new Date(2015, 05), y: 478 },

                        ]
                    }
                ],
                legend: {
                    cursor:"pointer",
                    itemclick : function(e) {
                        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                            e.dataSeries.visible = false;
                        }
                        else {
                            e.dataSeries.visible = true;
                        }
                        chart.render();
                    }
                }
            });
        chart.render();
    }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

