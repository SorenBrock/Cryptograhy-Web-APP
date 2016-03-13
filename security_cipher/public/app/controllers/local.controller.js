(function () {
    "use strict";

    function localCtrl($scope) {
            
        $scope.radioBtnIsEncoded = true;
        $scope.message = "";
        $scope.shiftCipher = [];
        while ($scope.shiftCipher.length < 25) {
            $scope.shiftCipher.push($scope.shiftCipher.length + 1);
        }
        $scope.selectedItem = $scope.shiftCipher[0];

        $scope.returnMessage = function () {
            var char, newStr = "",
                nr = $scope.selectedItem,
                msg = $scope.message,
                alfabet = "abcdefghijklmnopqrstuvwxyz";
            
            nr = isNaN(parseFloat(nr)) ? 0 : parseInt($scope.radioBtnIsEncoded === true ? nr : -nr);
            msg = msg.replace(/[^a-zA-Z ]+/g, '').toLowerCase();
         
            for (var i = 0, len = msg.length; i < len; i++) {
                char = msg[i];
                newStr += msg[i] === " " ? " " : alfabet[((alfabet.indexOf(char) + nr + 26) % 26)];
            };
            return newStr;
        };  
    };
    angular
        .module('app', [])
        .controller('localCtrl', localCtrl);
})();