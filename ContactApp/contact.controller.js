(function () {
    var app = angular.module("ContactApp");

    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataServiceSvc) {
        var self = this;

        ContactDataServiceSvc.getContacts()
        .then(function(data){
            self.contacts = data;
            self.selectedContact = self.contacts[0] // optional (I added this line)
        });

        this.selectContact = function (selected) {
            this.selectedContact = this.contacts[selected];
        }
    }
})();