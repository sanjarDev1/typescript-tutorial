const skills: string[] = ['Div', 'DevOps', 'Testing'];

for (const skill of skills) {
  console.log(skill.toLocaleLowerCase());
}
const res = skills
  .filter((s: string) => s !== 'DevOps')
  .map((s) => {return 1})
  .reduce((a, b) => a + b);

console.log(res);
