const Todo = require('./model');

const data = [
    {
        name: 'Eat breakfast'
    },
    {
        name: 'Eat lunch'
    },
    {
        name: 'Eat dinner'
    },
    {
        name: 'Eat dessert'
    }
];

Todo
    .sync({ force: false }) // means do not drop current database items
    .then(() => {
        Todo.bulkCreate(data)
        .then(() => console.log('Added data'));
    });
