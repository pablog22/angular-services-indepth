(function () {
    var app = angular.module("ContactApp");

    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataServiceSvc) {
        this.contacts = ContactDataServiceSvc.contacts;

        this.selectedContact = this.contacts[0];

        this.selectContact = function (selected) {
            this.selectedContact = this.contacts[selected];
        }
    }
})();