(function () {

    var localService = function ($http) {
        var localFunction = function () {};
        return {
            localFunction: localFunction
        };
    };

    angular
        .module("app")
        .factory("localService", localService);
}());