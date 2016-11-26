(function () {
    var app = angular.module("ContactApp");

    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataServiceSvc) {
        var self = this;
        self.editMode = false;

        ContactDataServiceSvc.getContacts()
        .then(function(data){
            self.contacts = data;
            self.selectedContact = self.contacts[0] // optional (I added this line)
        });

        this.selectContact = function (selected) {
            this.selectedContact = this.contacts[selected];
        }

        this.toggleEditMode = function() {
            this.editMode = !this.editMode;
        }

        this.saveUser = function() {
            var userData = this.selectedContact;
            this.toggleEditMode();
            ContactDataServiceSvc.saveUser(userData);
        }
    }
})();