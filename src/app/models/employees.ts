export interface Employee {
    name: string;
    salary: number;
    bonus: number;
}
const employees: Employee[] = [
  {name: 'Fulano da Silva', salary: 1000, bonus: 0},
  {name: 'Cicrano da Silva', salary: 10000, bonus: 0},
  {name: 'Beltrano da Silva', salary: 900, bonus: 5},
];

export default employees;
