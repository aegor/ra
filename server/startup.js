Meteor.startup(function()
{

    /* Start MDNS advertiser */
    var mdns = Meteor.npmRequire('mdns');
    var txt_record = {
        name: 'rationale',
        type: 'server',
        version: '0.0.1',
    };
    var ad = mdns.createAdvertisement(mdns.tcp('http'), 3000,
    {
        txtRecord: txt_record,
        name: "Rationale-server"
    });
	ad.start();
});

