(function () {
    var app = angular.module("ContactApp");

    app.service("ContactDataServiceSvc", function ($http) {
        this.contacts = [];

        var self = this;

        self.getContacts = function () {
            // $http({
            //     method: 'GET',
            //     url: 'http://localhost:3000/contacts'
            // }).then(function successCallback(response) {
            //     // this callback will be called asynchronously
            //     // when the response is available
            //     self.contacts = response.data;
            //     console.log("Contacts updated.");
            //     return self.contacts;
            // }, function errorCallback(response) {
            //     // called asynchronously if an error occurs
            //     // or server returns response with an error status.
            //     console.error("Something went wrong when calling http service.");
            // });

            var promise1 = $http.get('http://localhost:3000/contacts');
            var promise2 = promise1.then(function(response){
                return response.data;
            });
            return promise2;

        };

    });
})();