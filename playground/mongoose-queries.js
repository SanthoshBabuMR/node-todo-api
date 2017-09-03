const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// var id = '59ab9c63f45deea2629a22b811';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//         _id: id
//     })
//     .then (todos => {
//         console.log('Todos', todos);
//     });
//
// Todo.findOne({
//         _id: id
//     })
//     .then (todo => {
//         console.log('Todo', todo);
//     });

// Todo.findById(id)
//     .then(todo => {
//         if(!todo) {
//             return console.log('Id not found');
//         }
//         console.log('Todo By Id', todo);
//     })
//     .catch(e => console.log(e));

// User.find({
//         _id: userId
//     })
//     .then(user => {
//         console.log('Users', user);
//     });
//
// User.findOne({
//         _id: userId
//     })
//     .then(user => {
//         console.log('User', user);
//     });

User.findById('59a4eb677a436d7105a2ef4c')
    .then(user => {
        if (!user) {
            return console.log('Unable to find user');
        }
        console.log(JSON.stringify(user, undefined, 2));
    }).
    catch(e => {
        console.log(e);
    });
