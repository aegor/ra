//window.ItemsSingleton = {};
Meteor.startup(function() {
    Meteor.subscribe('config');
    Meteor.subscribe('players');
    Meteor.subscribe('designs');
    Meteor.subscribe('suites');
    Meteor.subscribe('types');

    window.addEventListener('polymer-ready', function (e) {
        var ra = document.querySelector('#ra-basic-layout');
        var lb = document.querySelector('body /deep/ ra-login-box');

        Meteor.user() ? ra.isLogged = true : ra.isLogged = false

        ra.addEventListener('login-box-login-try', function (e) {
            Meteor.loginWithPassword(e.detail.identifier, e.detail.password, function (err) {
                // DEBUG console.log("login:", e, err);
                err ? lb.shake(lb) : ra.isLogged = true;
                /* shake login form if login incorrect */
                /* set this if login correct */
            })
        });

        ra.addEventListener('logout-action', function (e) {
            Meteor.logout(function (){ra.isLogged=false})
        });

        ra.addEventListener('crud-action', function (e) {

            // e.detail = Object {action: "create", collection: "players", object: Object, elementid: "Y9NsSkA5nmDZRrHL3"}

            var collection = e.detail.collection.charAt(0).toUpperCase() + e.detail.collection.slice(1);
            var ra = document.querySelector('#ra-basic-layout');
            var result = undefined;
            if (e.detail.collection && e.detail.collection !== "dashboard" && e.detail.object){
                // DEBUG console.log("CRUD obj:", e.detail);
                switch (e.detail.action) {
                    case "create": {
                        result = window[collection].insert(e.detail.object, function (){ra.menuFabric()});
                        ra.menuFabric();
                        break;
                    }
                    case "update": {
                        result = window[collection].update({_id: e.detail.elementid}, {$set: e.detail.object}, {}, function (){ra.menuFabric()});

                        break;
                    }
                    case "delete": {
                        result = window[collection].remove(e.detail.elementid, function (){ra.menuFabric()});
                        ra.menuFabric();
                        break;
                    }
                    default:
                        console.log("ERROR: unknown crud action:", e.detail.action)
                }
            }
            else
                console.log("CRUD not validated:", e.type, collection);
        }); // CRUD action

        Tracker.autorun(function() {
            ra.config = Config.find().fetch();
            ra.players = Players.find().fetch();
            ra.designs = Designs.find().fetch();
            ra.suites = Suites.find().fetch();
            ra.types = PlayerTypes.find().fetch();
        }); // Tracker autorun

    }); // Polymer ready
}); // Meteor startup

