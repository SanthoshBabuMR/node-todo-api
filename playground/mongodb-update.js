const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to db');
    }
    console.log('Connected to mongodb server');

    // findOneAndUpdate
    // db
    // .collection('Todos')
    // .findOneAndUpdate({
    //     _id: new ObjectID("59a39ad718699f3837c48397")}
    //     , {
    //         $set: {
    //             completed: true
    //         }
    //     }
    //     , {
    //         returnOriginal: false
    //     }
    // )
    // .then(result => {
    //     console.log(result);
    // }, err => {
    //     console.log(err);
    // });

    db
    .collection('Users')
    .findOneAndUpdate({
        _id: new ObjectID("59a3a05b18699f3837c486f1"),
    }, {
        $set: {
            name: 'Santhosh'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    })
    .then(result => {
        console.log(result);
    }, err => {
        console.log(err);
    })

    // db.close();
});
