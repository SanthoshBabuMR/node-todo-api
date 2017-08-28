const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to db');
    }
    console.log('Connected to mongodb server');

    // db
    //     .collection('Todos')
    //     .find({_id: new ObjectID('59a2de6d185b30da4e74acb7')})
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 3));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // db
    //     .collection('Todos')
    //     .find()
    //     .count()
    //     .then(count => {
    //         console.log(`Todos count: ${count}`);
    //     }, err => {
    //         console.log('Unable to fetch todos', err);
    //     });

    db
        .collection('Users')
        .find({name: 'Santhosh'})
        .toArray()
        .then(docs => {
            console.log('Users with name \'Santhosh\':');
            console.log(JSON.stringify(docs, undefined, 2));
        }, err => {
            console.log('Unable to fetch documents');
        })

    // db.close();
});
