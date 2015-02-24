//window.ItemsSingleton = {};
Meteor.startup(function() {
    Meteor.subscribe('config');
    Meteor.subscribe('players');
    Meteor.subscribe('designs');
    Meteor.subscribe('suites');
    Meteor.subscribe('types');

    var _ = lodash; // this is because bugged underscore version in meteor

    window.addEventListener('polymer-ready', function (e) {
        var ra = document.querySelector('#ra-basic-layout');
        var lb = document.querySelector('body /deep/ ra-login-box');

        Tracker.autorun(function() {
            ra.config = Config.find().fetch();
            ra.players = Players.find().fetch();
            ra.designs = Designs.find().fetch();
            ra.suites = Suites.find().fetch();
            ra.types = PlayerTypes.find().fetch();
        }); // Tracker autorun

        if (Meteor.user()) {
            ra.isLogged = true;
            Meteor.user().username === "admin" ? ra.isAdmin = true : ra.isAdmin = false;
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
                        result = window[collection].update({_id: detail.elementid}, {$set: detail.obj}, undefined, function (){ra.menuFabric()});
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
                // TODO DEBUG 
                console.log("Regular CRUD params:", detail.obj, detail.elementid);
                crud(detail.action);
            }
            else
                if (collection === "Dashboard") {
                    /*
                     {pl1: "aa", pl2: "bb", pl3: "cc", pl4: "dd", pl5: "ee", pl6: "ff", pl7: "gg", pl8: "hh", pl9: "ii", pl10: "jj", suite_save: "false", suite_save_name: "qq", suite_select: "true"}
                     */
                    /* this.players - global players collection */
                    // TODO DEBUG
                    console.log("Dashboard CRUD params", detail.obj, detail.elementid);
                    var _ = lodash;
                    var o = detail.obj;
                    var players = _.keys(_.pick(o, function(value, key){return key.indexOf("suite_") === -1}));
                    var designs = _.values(_.pick(o, function(value, key){return key.indexOf("suite_") === -1}));
                    var actions = _.pick(o, function(value, key){return key.indexOf("suite_") !== -1});
                    var su = {};

                    function plBn (n) {
                        return Players.findOne({name: n})
                    };
                    function suBn (n) {
                        return Suites.findOne({name: n})
                    };

                    /* load suite*/
                    if (actions.suite_select.length !==0){
                        su = suBn(actions.suite_select);
                        for (i in su.pairs){
                            var plName = su.pairs[i].player;
                            var plDesign = su.pairs[i].design;
                            var plObj = plBn(plName);
                            if (plObj.designId !== plDesign) {
                                plObj.designId = plDesign;
                                Players.update(plObj._id, {$set: plObj}, function () {ra.menuFabric()})
                            }
                        }
                        return
                    }

                    /* Create suite */
                    if (actions.suite_save && actions.suite_save_name.length !==0){
                        if (suBn(actions.suite_save_name) !== undefined) {
                            ra.raError("ОШИБКА,Имя сюиты уже используется","black,red,white");
                            return
                        }
                        else {
                            su = {}; su.name = actions.suite_save_name; su.title = su.name; su.pairs = [];
                            for(var i in players) {
                                su.pairs.push({player: players[i], design: designs[i]}); 
                            }
                            Suites.insert(su, function (){ra.menuFabric()});
                            return
                        }
                    }

                    /* Update players */
                    if (!actions.suite_save) {
                        for(var i in players) {
                            var plObj = plBn(players[i]);
                            if (plObj.length !==0 ) {
                                var coll = {}; coll.name = players[i]; coll.designId = designs[i];
                                if (plObj.designId !== coll.designId) {
                                    Players.update(plObj._id, {$set: coll}, undefined, function () {ra.menuFabric()}); 
                                }
                            }
                            else {
                                console.log("dashboard CRUD ERROR: player not found by name, need to be create");
                                return
                            }
                        }
                        return
                    }
                }
                else
                    console.log("ERROR: CRUD not validated:", e.type, detail.action, collection);
                    return
        }); // CRUD action
    }); // Polymer ready
}); // Meteor startup

