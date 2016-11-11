(function (angular) {
    'use strict';

    angular
        .module('equipMe.viewsales')
        .controller('viewSalesController', viewSalesController);

    function viewSalesController() {
        var vm = this;

        vm.selected = null;

        vm.chartType = ['ProdChart','SalesChart','AuditChart'];

        vm.prodChartConfig = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            series: [{
                name: 'United Sates',
                data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
            }, {
                name: 'India',
                data: [3, 4, 5, 8, 11, 15, 17, 16, 14, 10, 6, 4]
            }],
            title: {
                text: '<h4 style="text-align: center">Average Number Of Products Sold</h4>'
            },
            loading: false,
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Number Of Products Sold'
                }
            },
            //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
            useHighStocks: false
        };


        vm.salesChartConfig = {
            options: {
                chart: {
                    type: 'column'
                }
            },

            series: [{
                name: 'United Sates',
                data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
            }, {
                name: 'India',
                data: [3, 4, 5, 8, 11, 15, 17, 16, 14, 10, 6, 4]
            }],
            title: {
                text: '<h4 style="text-align: center">Average Monthly Sales</h4>'
            },
            loading: false,
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Number Of Products Sold'
                }
            },
            //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
            useHighStocks: false
        };


        vm.auditChartConfig = {
            options: {
                chart: {
                    type: 'waterfall'
                }
            },
            title: {
                text: '<h4 style="text-align: center">Yearly Budget Analysis</h4>'
            },
            xAxis: {
                type: 'category'
            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: 'Revenue Distribution'
                }
            },
            useHighStocks: false,
            series: [{
                name: 'Revenue and Cost',
                data: [{
                    name: 'Start',
                    y: 1000
                }, {
                    name: 'Product Revenue',
                    y: 10000
                }, {
                    name: 'Ad Revenue',
                    y: 2000
                }, {
                    name: 'Positive Balance',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }, {
                    name: 'Fixed Costs',
                    y: -2000
                }, {
                    name: 'Variable Costs',
                    y: -3000
                }, {
                    name: 'Balance',
                    isSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        fontWeight: 'bold'
                    }
                },
                pointPadding: 0
            }]
        };
    }

}(angular));
