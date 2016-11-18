(function () {
    var app = angular.module("ContactApp");

    function AppConfig(AppNameSvc) {
        //var value = {};

        this.name = AppNameSvc;
        this.author = "Pablo";
        this.builtDate = new Date().toDateString();

        //return value;
    };

    app.service("AppDataServiceSvc", AppConfig); // new AppConfig()
})();