(function () {
    var app = angular.module("ContactApp");
    app.value("AppNameSvc", "Contact App");
})();

// The line:
//    var app = angular.module("ContactApp");
// Gets the app module
// Note that we are using just one parameter,
// so the angualr module functions retrieves
// the module, it does not create it.
