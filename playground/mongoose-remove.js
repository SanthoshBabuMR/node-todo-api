const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({})
//     .then(result => {
//         console.log(result);
//     });

Todo.findOneAndRemove({ _id: '59abda432ecd93c7e7b86b0b'})
    .then(todo => {
        console.log(todo);
    });

Todo.findByIdAndRemove('59abda432ecd93c7e7b86b0b')
    .then(todo => {
        console.log(todo);
    });
