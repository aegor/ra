Meteor.publish('config', function() {
    return Config.find();
});

Meteor.publish('players', function() {
    return Players.find();
});

Meteor.publish('designs', function() {
    return Designs.find();
});

Meteor.publish('suites', function() {
    return Suites.find();
});
