(function () {
    var app = angular.module("ContactApp");

    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataServiceSvc) {
        var self = this;
        self.editMode = false;
        self.addMode = false;

        ContactDataServiceSvc.getContacts()
            .then(function (data) {
                self.contacts = data;
                //self.selectedContact = self.contacts[0] // optional (I added this line)
            });

        this.selectContact = function (selected) {
            this.selectedContact = this.contacts[selected];
            self.successMessage = undefined;
            self.errorMessage = undefined;
        }

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        }

        this.saveUser = function () {
            var userData = this.selectedContact;
            this.toggleEditMode();

            if (this.addMode) {
                ContactDataServiceSvc.createUser(userData)
                    .then(
                    function () {
                        self.successMessage = "Data successfully updated";
                    },
                    function () {
                        self.errorMessage = "There was an error. Please try again.";
                    })
                // The then() above receives two functions, the first one what to do un a success,
                // the second one is wha to do in case of an error.

                this.editMode = false;

            } else {
                ContactDataServiceSvc.saveUser(userData)
                    .then(
                    function () {
                        self.successMessage = "Data successfully updated";
                    },
                    function () {
                        self.errorMessage = "There was an error. Please try again.";
                    })
                // The then() above receives two functions, the first one what to do un a success,
                // the second one is wha to do in case of an error.
            }
        }

        this.addContact = function () {
            this.selectedContact = {
                "id": new Date().getTime()
            };
            this.editMode = true;
            this.addMode = true;
        }
    }
})();