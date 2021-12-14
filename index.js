const createPerson = (name, city, year) => ({
  name,
  city,
  year,
});

const person = createPerson("Alan Kay", "Springfield", 1960);
console.log(person);
