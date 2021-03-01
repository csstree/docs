/* eslint-env browser */
/* global discovery */
const Highcharts = require('highcharts');

discovery.view.define('chart', function(el, config, data, context) {
    const { options } = config;
    const label = '<b>{point.y}</b> ({point.percentage:.1f}%)';
    const container = el.appendChild(document.createElement('div'));

    if (!Array.isArray(data)) {
        data = data ? [data] : [];
    }

    if (data[0] && !data[0].data) {
        data = [{ data }];
    }

    try {
        const chart = Highcharts.chart(container, Highcharts.merge({
            chart: {
                type: 'pie'
            },
            title: {
                text: undefined
            },
            credits: {
                enabled: false
            },
            tooltip: {
                pointFormat: label
            },
            plotOptions: {
                pie: {
                    cursor: 'pointer',
                    dataLabels: {
                        format: '{point.name} – ' + label,
                        useHTMsL: true
                    }
                }
            },
            series: data
        }, options));

        setTimeout(() => {
            chart.reflow();
        }, 1);
    } catch (e) {
        discovery.view.render(el, { view: 'fallback', reason: e.message }, data, context);
    }
});
