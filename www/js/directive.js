    'use strict';

    /**
     * @ngdoc function
     * @name Blue Cross of India:Directives
     * @author Raghav
     * @description
     * # Directives
     * Contains the Directives for the Blue Cross of India app
     */


    angular

    .module('bluecross')

    .directive('file', function () {
        return {
            scope: {
                file: '='
            },
            link: function (scope, el, attrs) {
                el.bind('change', function (event) {
                    var file = event.target.files[0];
                    scope.file = file ? file : undefined;
                    scope.$apply();
                });
            }
        };
    })