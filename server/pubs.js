Meteor.publish('config', function() {
    return Config.find();
});
Config.allow({
    insert: function (userId, doc) {
        console.log("Config insert allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin"
    },
    update: function (userId, doc) {
        console.log("Config update allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin" || Meteor.users.findOne(userId).username === "user"
    },
    remove: function (userId, doc) {
        console.log("Config delete allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin"
    }
});

Meteor.publish('players', function() {
    return Players.find();
});
Players.allow({
    insert: function (userId, doc) {
        console.log("Players insert allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin"
    },
    update: function (userId, doc) {
        console.log("Players update allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin" || Meteor.users.findOne(userId).username === "user"
    },
    remove: function (userId, doc) {
        console.log("Players delete allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin" 
    }
});

Meteor.publish('designs', function() {
    return Designs.find();
});
Designs.allow({
    insert: function (userId, doc) {
        console.log("Designs insert allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin"
    },
    update: function (userId, doc) {
        console.log("Designs update allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin" || Meteor.users.findOne(userId).username === "user"
    },
    remove: function (userId, doc) {
        console.log("Designs delete allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin"
    }
});

Meteor.publish('suites', function() {
    return Suites.find();
});
Suites.allow({
    insert: function (userId, doc) {
        console.log("Suites insert allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin"
    },
    update: function (userId, doc) {
        console.log("Suites update allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin" || Meteor.users.findOne(userId).username === "user"
    },
    remove: function (userId, doc) {
        console.log("Suites delete allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin"
    }
});

Meteor.publish('types', function() {
    return PlayerTypes.find();
});

PlayerTypes.allow({
    insert: function (userId, doc) {
        console.log("PlayerTypes insert allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin"
    },
    update: function (userId, doc) {
        console.log("PlayerTypes update allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin" || Meteor.users.findOne(userId).username === "user"
    },
    remove: function (userId, doc) {
        console.log("PlayerTypes delete allow", userId, doc);
        return Meteor.users.findOne(userId).username === "admin"
    }
});

Meteor.publish('player', function() {
    console.log("Player publish:", this.connection.clientAddress)
    console.log("Player find:", Players.find({name: "pl2"}).fetch())
    return Players.find();
});