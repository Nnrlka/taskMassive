const users = [
{
  id: 1,
  name: 'Alex',
  age: 25,
  active: true,
},
{
  id: 2,
  name: 'Maria',
  age:17,
  active: false,
}
];
//1
const IsActive = users.filter(user => user.active === true);
console.log(IsActive);
//2
const AllNames = users.map(user => user.name);
console.log(AllNames)
//3
const UserWithIdOne = users.find(user => user.id === 1);
console.log(UserWithIdOne)