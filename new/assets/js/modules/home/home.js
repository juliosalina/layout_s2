//Home >  Dashboard

//charts
function createChart() {
    $('.chart-one').kendoChart({
        dataSource: {
            requestStart: function () {
                kendo.ui.progress($("#loading"), true);
            },
            requestEnd: function () {
                kendo.ui.progress($("#loading"), false);

            }
        },
        title: {
            //text: "Evolução Nota Centro Médico Sacomã"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area",
            area: {
                line: {
                    style: "smooth"
                },
                border: {
                    dashType: "dashDot",
                    color: "#5c99c9",
                    width: 2
                }
            }
        },
        series: [{
            color: "#ececec",
            opacity: 1,
            name: "Meta",
            data: [9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0]
        }, {
            color: "#7cb0d9",
            opacity: 0.5,
            name: "Nota Mês",
            data: [7.5, 7.9, 8.7, 9.0, 8.3, 8.5, 9.7, 9.4]
        }],
        valueAxis: {
            max: 10,
            labels: {
                format: "{0}"
            },
            line: {
                visible: true
            },
            border: {
                visible: true
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: ['Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            majorGridLines: {
                visible: false
            },
            labels: {
                rotation: "auto"
            }
        },
        tooltip: {
            visible: true,
            format: "{0}",
            template: "#= series.name #: #= value #"
        }
    });

    $('.chart-two').kendoChart({
        dataSource: {
            requestStart: function () {
                kendo.ui.progress($("#loading"), true);
            },
            requestEnd: function () {
                kendo.ui.progress($("#loading"), false);

            }
        },
        title: {
            //text: "Evolução Nota Centro Médico Sacomã"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area",
            area: {
                line: {
                    style: "smooth"
                },
                border: {
                    dashType: "dashDot",
                    color: "#5c99c9",
                    width: 2
                }
            }
        },
        series: [{
            color: "#ececec",
            opacity: 1,
            name: "Meta",
            data: [9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0]
        }, {
            color: "#7cb0d9",
            opacity: 0.5,
            name: "Nota Mês",
            data: [5.0, 6.9, 8.7, 7.5, 8.3, 8.5, 10, 9.1]
        }],
        valueAxis: {
            max: 10,
            labels: {
                format: "{0}"
            },
            line: {
                visible: true
            },
            border: {
                visible: true
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: ['Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            majorGridLines: {
                visible: false
            },
            labels: {
                rotation: "auto"
            }
        },
        tooltip: {
            visible: true,
            format: "{0}",
            template: "#= series.name #: #= value #"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);