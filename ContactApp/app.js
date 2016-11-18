var app = angular.module("ContactApp", []);

app.controller("ContactCtrl", ContactCtrl);

app.controller("HeaderCtrl", HeaderCtrl);
app.controller("FooterCtrl", FooterCtrl);

app.value("AppNameSvc", "Contact App");

function prepareAppConfig(AppNameSvc) {
    var value = {};

    value.name = AppNameSvc;
    value.author = "Pablo";
    value.builtDate = new Date().toDateString();

    return value;
};

function AppConfig(AppNameSvc) {
    //var value = {};

    this.name = AppNameSvc;
    this.author = "Pablo";
    this.builtDate = new Date().toDateString();

    //return value;
};

app.value("AppDataSvc", prepareAppConfig());

app.value("LoggingSvc", function(){
    console.log("Hello");
});

app.factory("AppDataFactorySvc", prepareAppConfig);  //prepareAppConfig()
app.service("AppDataServiceSvc", AppConfig); // new AppConfig()

function ContactCtrl() {
  this.contacts = [
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "topias",
            "last": "puro"
        },
        "location": {
            "street": "7611 suvantokatu",
            "city": "äänekoski",
            "state": "northern savonia",
            "postcode": 38870
        },
        "email": "topias.puro@example.com",
        "login": {
            "username": "heavyelephant218",
            "password": "ballin",
            "salt": "6s6E47bB",
            "md5": "991de5fb6958fa43aa0c4e41d136ceb7",
            "sha1": "9e0a80b63995797cb9329a4d2f0578e6bbf4d39a",
            "sha256": "67ca13849ffe808bdec298e544cbf34a867e717ee9602a15581933434c0a38a0"
        },
        "dob": "1946-03-07 07:29:30",
        "registered": "2007-09-06 02:57:16",
        "phone": "03-114-587",
        "cell": "042-846-82-53",
        "id": {
            "name": "HETU",
            "value": "646-9179"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/34.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
        },
        "nat": "FI"
    },
    {
        "gender": "female",
        "name": {
            "title": "ms",
            "first": "thaïs",
            "last": "lopez"
        },
        "location": {
            "street": "4370 rue de l'abbé-carton",
            "city": "rueil-malmaison",
            "state": "jura",
            "postcode": 92519
        },
        "email": "thaïs.lopez@example.com",
        "login": {
            "username": "goldendog598",
            "password": "maserati",
            "salt": "GRyA6aYm",
            "md5": "79de9cb410df7984b0074b7bec6141ea",
            "sha1": "9439819e6f8785bc2e23bad2a5df2e60cdc62c6e",
            "sha256": "24df862300972a80ce31ea01c11609003e36cdeb1e8020a00303ffd90762eb6a"
        },
        "dob": "1958-10-20 19:40:35",
        "registered": "2006-06-21 21:31:26",
        "phone": "04-33-51-43-63",
        "cell": "06-04-84-60-39",
        "id": {
            "name": "INSEE",
            "value": "258962330727 73"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/41.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
        },
        "nat": "FR"
    },
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "arthur",
            "last": "lopez"
        },
        "location": {
            "street": "1197 avenue debrousse",
            "city": "nanterre",
            "state": "lot-et-garonne",
            "postcode": 34618
        },
        "email": "arthur.lopez@example.com",
        "login": {
            "username": "ticklishtiger589",
            "password": "cougars",
            "salt": "AarBadMV",
            "md5": "3ee2fc757f1679fc93db563bad47ef49",
            "sha1": "db458d75454ddd50e519907bac3fd13c37a9db0f",
            "sha256": "6d1317e1b3b770df61e1125ddd11705b6175f693824203e4bca02eb7834f2350"
        },
        "dob": "1970-11-23 19:37:11",
        "registered": "2010-08-23 10:48:18",
        "phone": "01-83-05-50-84",
        "cell": "06-71-65-90-76",
        "id": {
            "name": "INSEE",
            "value": "1701064214245 82"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/99.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/99.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/99.jpg"
        },
        "nat": "FR"
    },
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "armand",
            "last": "garcia"
        },
        "location": {
            "street": "7883 rue de bonnel",
            "city": "lyon",
            "state": "meuse",
            "postcode": 61992
        },
        "email": "armand.garcia@example.com",
        "login": {
            "username": "orangecat251",
            "password": "mazdarx7",
            "salt": "czsT0ZCe",
            "md5": "84f969e07f9c95899006332fdcfae266",
            "sha1": "e4291202d5857e7c2f028f6998826c8c67bba39f",
            "sha256": "2233e74a48055be28d11a6e6de6fa00e4dac157caf14831c72de91ceb3db3dda"
        },
        "dob": "1990-07-20 17:22:11",
        "registered": "2011-12-09 13:48:15",
        "phone": "05-30-87-74-28",
        "cell": "06-77-01-19-61",
        "id": {
            "name": "INSEE",
            "value": "190662893599 45"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/59.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
        },
        "nat": "FR"
    },
    {
        "gender": "male",
        "name": {
            "title": "mr",
            "first": "kaya",
            "last": "bayındır"
        },
        "location": {
            "street": "6754 doktorlar cd",
            "city": "aksaray",
            "state": "kars",
            "postcode": 32997
        },
        "email": "kaya.bayındır@example.com",
        "login": {
            "username": "crazypeacock661",
            "password": "3000gt",
            "salt": "7OaGECa6",
            "md5": "13fbb326d0164491ec099be4b2b97d2f",
            "sha1": "9622d2ff422573b3d72f3506f6ef709d6961e9cf",
            "sha256": "82e59a21b36d2bf9d72535c692f8861fe885016cb219c2aee062bb6a336629d3"
        },
        "dob": "1977-11-02 06:02:33",
        "registered": "2006-01-30 14:26:19",
        "phone": "(126)-456-2653",
        "cell": "(951)-454-9732",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/15.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
        },
        "nat": "TR"
    },
    {
        "gender": "female",
        "name": {
            "title": "mrs",
            "first": "zoe",
            "last": "li"
        },
        "location": {
            "street": "6452 highgate",
            "city": "auckland",
            "state": "tasman",
            "postcode": 81909
        },
        "email": "zoe.li@example.com",
        "login": {
            "username": "organicelephant467",
            "password": "tight",
            "salt": "bNzHm7Gn",
            "md5": "96e71a4fb7e8d1dc072f90d238cab431",
            "sha1": "e5099599f4d079d19a8e1247dc0de9a263972464",
            "sha256": "d114b282da4dc667cce8d154b25878df3fe1f38c09f5e332f2d3e08fbb5f579d"
        },
        "dob": "1981-11-17 20:49:10",
        "registered": "2012-06-11 12:47:54",
        "phone": "(385)-616-6272",
        "cell": "(458)-625-1406",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/21.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
        },
        "nat": "NZ"
    },
    {
        "gender": "female",
        "name": {
            "title": "ms",
            "first": "vilma",
            "last": "mikkola"
        },
        "location": {
            "street": "3162 rautatienkatu",
            "city": "kinnula",
            "state": "pirkanmaa",
            "postcode": 89689
        },
        "email": "vilma.mikkola@example.com",
        "login": {
            "username": "brownbird466",
            "password": "chillin",
            "salt": "dzRBm5l6",
            "md5": "868055f39b84ff3f37e432cb3125e189",
            "sha1": "4e29d6da4ba8e5693557bfea38bb324a50976e9d",
            "sha256": "ac113506fa5e8c1b802d70d061ecdced2c47a5c4ca7d40932e4730ec0c0de0b0"
        },
        "dob": "1953-04-11 11:23:56",
        "registered": "2015-10-27 18:15:45",
        "phone": "05-322-099",
        "cell": "045-218-21-53",
        "id": {
            "name": "HETU",
            "value": "953-458P"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/81.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
        },
        "nat": "FI"
    },
    {
        "gender": "female",
        "name": {
            "title": "ms",
            "first": "eva",
            "last": "johnston"
        },
        "location": {
            "street": "9475 the grove",
            "city": "greystones",
            "state": "kildare",
            "postcode": 42944
        },
        "email": "eva.johnston@example.com",
        "login": {
            "username": "heavyfrog429",
            "password": "avalon",
            "salt": "ABE3etFf",
            "md5": "aa09cc21fff3bd36b5ae8549fead995b",
            "sha1": "9cfb79c73c05d22e2d2b3836e7d5a7aa08613521",
            "sha256": "6cc89194845a2fd0e52fa10f17c57258e5010e99612de66f47b1ac4eea6c4aa6"
        },
        "dob": "1967-07-15 23:07:54",
        "registered": "2004-09-10 17:58:56",
        "phone": "061-073-3429",
        "cell": "081-363-2160",
        "id": {
            "name": "PPS",
            "value": "2496427T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/64.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
        },
        "nat": "IE"
    },
    {
        "gender": "male",
        "name": {
            "title": "monsieur",
            "first": "tim",
            "last": "mathieu"
        },
        "location": {
            "street": "8503 rue des écoles",
            "city": "clarmont",
            "state": "schaffhausen",
            "postcode": 8617
        },
        "email": "tim.mathieu@example.com",
        "login": {
            "username": "heavyladybug950",
            "password": "tunafish",
            "salt": "lkWM7UbC",
            "md5": "49c122d224c376b1cd77489ba8553390",
            "sha1": "6a51d643d755cea74367ba35da0deecd00a282cf",
            "sha256": "fdf6433d74694c28620906086a800a424fc860e88c15c25b3a42b68aea49f670"
        },
        "dob": "1982-01-17 07:59:58",
        "registered": "2013-09-17 03:47:13",
        "phone": "(889)-670-9852",
        "cell": "(960)-063-3864",
        "id": {
            "name": "AVS",
            "value": "756.FZIO.EVGU.22"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/28.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
        },
        "nat": "CH"
    },
    {
        "gender": "female",
        "name": {
            "title": "ms",
            "first": "henriette",
            "last": "haase"
        },
        "location": {
            "street": "2504 schützenstraße",
            "city": "augsburg",
            "state": "sachsen",
            "postcode": 28165
        },
        "email": "henriette.haase@example.com",
        "login": {
            "username": "crazylion641",
            "password": "asses",
            "salt": "T7bfzvdJ",
            "md5": "e08e4f04b309636abb61c67c24971a39",
            "sha1": "19f2758a551e3819ca3869f59e3ac604fce96a0a",
            "sha256": "5eb125f88094de735914e8fb7b72078d99011ae629d30eaf08332a91292ddf4e"
        },
        "dob": "1961-11-07 01:45:08",
        "registered": "2012-04-13 20:13:19",
        "phone": "0570-0921592",
        "cell": "0170-3607401",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/89.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
        },
        "nat": "DE"
    }
  ];

  this.selectedContact = this.contacts[0];

  this.selectContact = function(selected) {
      this.selectedContact = this.contacts[selected];
  }
}

function HeaderCtrl(AppDataServiceSvc){
    this.appTittle = AppDataServiceSvc.name;
}

function FooterCtrl(AppDataFactorySvc){
    this.appTittle = AppDataFactorySvc.name;
    this.builtDate = AppDataFactorySvc.builtDate;
}
