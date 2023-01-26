// type httpMethod = 'post' | 'get' ;

// type coolString = string;

// function fetchWidthAuth(url: string, method: httpMethod): 1 | -1 {
//     return 1
// }
// fetchWidthAuth('s', 'post');

// const method = 'post'

// fetchWidthAuth('s', method as 'post');

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  id: number;
};

type UserWithRole = User & Role;

let user: UserWithRole = {
  name: 'asdas',
  age: 33,
  skills: ['1', '2'],
  id: 1,
};
