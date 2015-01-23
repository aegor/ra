//window.ItemsSingleton = {};
Meteor.startup(function() {
    Meteor.subscribe('config');
    Meteor.subscribe('players');
    Meteor.subscribe('designs');
    Meteor.subscribe('suites');

    /*  Tracker.autorun(function() {
     var t = document.querySelector('#testmodel');
     t.items = Items.find().fetch();
     //window.ItemsSingleton = Items.find().fetch();
     });*/
});


// counter starts at 0
// Session.setDefault("counter", 0);

