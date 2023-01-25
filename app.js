"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'John',
    surname: 'Martin',
    city: 'Los Angels',
    age: 33,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName(user));
