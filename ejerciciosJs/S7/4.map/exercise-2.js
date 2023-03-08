const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

let names = users
            .filter((user) => user.name.includes('A'))
            .map((user) => user.name = 'Anacleto');

console.log(names);
                