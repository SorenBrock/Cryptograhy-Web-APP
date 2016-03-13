(function () {
    "use strict";

    function localCtrl($scope) {

        $scope.inputA = "";
        $scope.inputB = "";

        $scope.gdc = function () {
            var r, a = isNaN(parseFloat($scope.inputA)) ? 0 : parseInt($scope.inputA),
                b = isNaN(parseFloat($scope.inputB)) ? 0 : parseInt($scope.inputB);
            if (a === 0 || b === 0) return;
            while (b > 0) {
                r = a % b;
                a = b;
                b = r;
            }
            return (a);
        };
    };
    angular
        .module('app', [])
        .controller('localCtrl', localCtrl);
})();