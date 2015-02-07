
/* ---------- Config fixture ---------------------- */

if (Config.find().count() === 0) {
    Config.insert({
        origin: '',
        staticOrigin: ''
    });
}
/* ---------- Players fixtures ---------------------- */

if (Players.find().count() === 0) {
    Players.insert({
        name: 'pl1',
        title: 'Входная галерея',
        designId: '',
        typeId: '720p-6x1-h',
        ip: '10.7.0.1',
        login: 'egor',
        password: 'iehfkf3432'
    });

    Players.insert({
        name: 'pl2',
        title: 'Кофейня',
        designId: '',
        typeId: '720p-4x1-v',
        ip: '10.7.0.2',
        login: 'rationale',
        password: 'iehfkf3432'
    });

    Players.insert({
        name: 'pl3',
        title: 'Полки кофейня',
        designId: '',
        typeId: '720p-5x1-h',
        ip: '10.7.0.3',
        login: 'egor',
        password: 'iehfkf3432'
    });

    Players.insert({
        name: 'pl4',
        title: 'Полки Ф1',
        designId: '',
        typeId: '720p-5x1-h',
        ip: '10.7.0.4',
        login: 'egor',
        password: 'iehfkf3432'
    });

    Players.insert({
        name: 'pl5',
        title: 'Полки бар',
        designId: '',
        typeId: '720p-5x1-h',
        ip: '10.7.0.5',
        login: 'egor',
        password: 'iehfkf3432'
    });

    Players.insert({
        name: 'pl6',
        title: 'Бар левый',
        designId: '',
        typeId: '720p-3x2-h',
        ip: '10.7.0.6',
        login: 'egor',
        password: 'iehfkf3432'
    });

    Players.insert({
        name: 'pl7',
        title: 'Бар правый',
        designId: '',
        typeId: '720p-2x2-h',
        ip: '10.7.0.7',
        login: 'egor',
        password: 'iehfkf3432'
    });

    Players.insert({
        name: 'pl8',
        title: 'Бар проход',
        designId: '',
        typeId: '720p-4x1-h',
        ip: '10.7.0.8',
        login: 'egor',
        password: 'iehfkf3432'
    });

    Players.insert({
        name: 'pl9',
        title: 'Зеркала',
        designId: '',
        typeId: '720p-3x1-v',
        ip: '10.7.0.9',
        login: 'egor',
        password: 'iehfkf3432'
    });

    Players.insert({
        name: 'pl10',
        title: 'Витрина',
        designId: '',
        typeId: '720p-3x1-v',
        ip: '10.7.0.10',
        login: 'egor',
        password: 'iehfkf3432'
    });
}

/* ---------- Designs fixtures ---------------------- */

if (Designs.find().count() === 0) {
    Designs.insert({
        name: 'pl1-реклама',
        title: 'Входная группа',
        origin: 'http://10.1.2.1/pl1',
        content: '',
        typeId: "720p-6x1-h"
    });

    Designs.insert({
        name: 'pl2',
        title: 'Кофейня',
        origin: 'http://10.1.2.1/pl2',
        content: '',
        typeId: "720p-4x1-v"
    });

    Designs.insert({
        name: 'pl3-5',
        title: 'Стеллажи',
        origin: 'http://10.1.2.1/pl3',
        content: '',
        typeId: "720p-5x1-h"
    });

    Designs.insert({
        name: 'pl6',
        title: 'Бар левый',
        origin: 'http://10.1.2.1/pl6',
        content: '',
        typeId: "720p-3x2-h"
    });

    Designs.insert({
        name: 'pl7',
        title: 'Бар правый',
        origin: 'http://10.1.2.1/pl7',
        content: '',
        typeId: "720p-2x2-h"
    });

    Designs.insert({
        name: 'pl8',
        title: 'Стеллажи 8',
        origin: 'http://10.1.2.1/pl8',
        content: '',
        typeId: ""
    });

    Designs.insert({
        name: 'pl9',
        title: 'Зеркала',
        origin: 'http://10.1.2.1/pl9',
        content: '',
        typeId: "720p-4x1-h"
    });

    Designs.insert({
        name: 'pl10',
        title: 'Витрина',
        origin: 'http://10.1.2.1/pl10',
        content: '',
        typeId: "720p-3x1-v"
    });
}

/* ---------- Suites fixtures ---------------------- */

if (Suites.find().count() === 0) {
    Suites.insert({
        name: 'Футбол',
        title: 'Футбольная',
        pairs: [{player: 'playerId', design: 'designId'}]
    });
}

/* ---------- Player type fixtures ---------------------- */

if (PlayerTypes.find().count() === 0) {

    PlayerTypes.insert({
        name: '720p-6x1-h',
        title: '720p 6 горизонтальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-5x1-h',
        title: '720p 5 горизонтальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-4x1-h',
        title: '720p 4 горизонтальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-3x1-h',
        title: '720p 3 горизонтальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-2x1-h',
        title: '720p 2 горизонтальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-1x1-h',
        title: '720p 1 горизонтальный',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-6x1-v',
        title: '720p 6 вертикальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-5x1-v',
        title: '720p 5 вертикальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-4x1-v',
        title: '720p 4 вертикальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-3x1-v',
        title: '720p 3 вертикальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-2x1-v',
        title: '720p 2 вертикальных',
        params: ""
    });
    PlayerTypes.insert({
        name: '720p-1x1-v',
        title: '720p 1 вертикальный',
        params: ""
    });
}
