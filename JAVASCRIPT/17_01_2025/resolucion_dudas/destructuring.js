const objeto = {
  name: "Name",
  age: 50,
  job: "Tech",
  props: {
    first: "1",
    second: "2",
  },
};

/* const name = objeto.name;
const age = objeto.age;
const job = objeto.job; */

const { name, age, job } = objeto;
const { first, second } = objeto.props;

console.log(name);
