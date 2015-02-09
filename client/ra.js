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

        if (Meteor.user()) {
            ra.isLogged = true;
            Meteor.user().username === "admin" ? ra.isAdmin = true : ra.isAdmin = false;
            ra.menuFabric();
        }
        else {
            ra.isLogged = false 
        };

        ra.addEventListener('login-box-login-try', function (e) {
            Meteor.loginWithPassword(e.detail.identifier, e.detail.password, function (err) {
                if(err){
                    lb.shake(lb)
                }
                else {
                    ra.isLogged = true;
                    if (e.detail.identifier === "admin") {
                        ra.isAdmin = true;
                        ra.menuFabric();
                    }
                }
            });
        });

        ra.addEventListener('logout-action', function (e) {
            Meteor.logout(function (){ra.isLogged=false})
        });

        ra.addEventListener('crud-action', function (e) {

            // detail = Object {action: "create", collection: "players", obj: Object, elementid: "Y9NsSkA5nmDZRrHL3"}
            var detail = e.detail;
            var collection = detail.collection.charAt(0).toUpperCase() + detail.collection.slice(1);
            var ra = document.querySelector('#ra-basic-layout');
            
            var result = undefined;
            function crud (action) {
                switch (action) {
                    case "create": {
                        result = window[collection].insert(detail.obj, function (){ra.menuFabric()});
                        break;
                    }
                    case "update": {
                        result = window[collection].update({_id: detail.elementid}, {$set: detail.obj}, {}, function (){ra.menuFabric()});
                        break;
                    }
                    case "delete": {
                        result = window[collection].remove(detail.elementid, function (){ra.menuFabric()});
                        break;
                    }
                    default:
                        console.log("ERROR: unknown crud action:", detail.action)
                }
            };
            if (detail.collection && detail.collection !== "dashboard" && detail.obj){
                // DEBUG 
                console.log("Regular CRUD params:", detail.obj, detail.elementid);
                crud(detail.action);
            }
            else
                if (collection === "Dashboard") {
                    // DEBUG 
                    console.log("Dashboard CRUD params", detail.obj, detail.elementid); return;
/*                    var players = Players.find().fetch();
                    for (var i in ra.players) {
                        if (players[i].designId !== ra.players[i].designId) {
                            console.log("DO REPLACE!!!")
                        }
                    } */
                }
                else
                    console.log("ERROR: CRUD not validated:", e.type, detail.action, collection);
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

