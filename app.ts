const skill: readonly [number, string, string] = [1, 'Devops', 'Testing'];

const skills: ReadonlyArray<string> = ['Dev', 'DevOps'];
skills[0] = '';

console.log(skills)