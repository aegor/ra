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

Meteor.publish('types', function() {
    return PlayerTypes.find();
});

Config.allow({
    insert: function (userId, doc) {
        console.log("Config insert allow", userId, doc);
        return true;
    },
    update: function (userId, doc) {
        console.log("Config update allow", userId, doc);
        return true;
    },
    remove: function (userId, doc) {
        console.log("Config delete allow", userId, doc);
        return true;
    }
});

Players.allow({
    insert: function (userId, doc) {
        console.log("Players insert allow", userId, doc);
        return true;
    },
    update: function (userId, doc) {
        console.log("Players update allow", userId, doc);
        return true;
    },
    remove: function (userId, doc) {
        console.log("Players delete allow", userId, doc);
        return true;
    }
});

Designs.allow({
    insert: function (userId, doc) {
        console.log("Designs insert allow", userId, doc);
        return true;
    },
    update: function (userId, doc) {
        console.log("Designs update allow", userId, doc);
        return true;
    },
    remove: function (userId, doc) {
        console.log("Designs delete allow", userId, doc);
        return true;
    }
});

Suites.allow({
    insert: function (userId, doc) {
        console.log("Suites insert allow", userId, doc);
        return true;
    },
    update: function (userId, doc) {
        console.log("Suites update allow", userId, doc);
        return true;
    },
    remove: function (userId, doc) {
        console.log("Suites delete allow", userId, doc);
        return true;
    }
});

PlayerTypes.allow({
    insert: function (userId, doc) {
        console.log("PlayerTypes insert allow", userId, doc);
        return true;
    },
    update: function (userId, doc) {
        console.log("PlayerTypes update allow", userId, doc);
        return true;
    },
    remove: function (userId, doc) {
        console.log("PlayerTypes delete allow", userId, doc);
        return true;
    }
});
