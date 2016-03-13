(function () {
    "use strict";

    function localCtrl($scope) {

        $scope.radioBtnIsEncoded = true;
        $scope.message = "";
        $scope.messageCode = "";

        $scope.returnMessage = function () {

            var char, charCode, cipher, foundNonAlpha,
                newStr = "",
                codeCounter = 0,
                msgCode = $scope.messageCode.replace(/[^a-zA-Z]+/g, '').toLowerCase(),
                msg = $scope.message.toLowerCase(),
                alfabet = "abcdefghijklmnopqrstuvwxyz";

            if (msgCode === "") return msg;

            for (var i = 0, len = msg.length; i < len; i++) {
                char = msg[i];
                foundNonAlpha = alfabet.indexOf(char) === -1;
                cipher = alfabet.indexOf(msgCode[codeCounter % (msgCode.length)]);
                if (!foundNonAlpha) codeCounter++;
                cipher = parseInt($scope.radioBtnIsEncoded === true ? cipher : -cipher);
                newStr += foundNonAlpha ? char : alfabet[((alfabet.indexOf(char) + cipher + 26) % 26)];
            };
            return newStr;
        };
    };
    angular
        .module('app', [])
        .controller('localCtrl', localCtrl);
})();