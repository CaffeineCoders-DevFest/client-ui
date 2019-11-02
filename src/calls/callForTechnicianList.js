const sleep = m => new Promise(r => setTimeout(r, m))
const faker = require('faker');

const sampleData = [{}, {}, {}, {}, {}, {}].map(() => ({
  name: faker.name.findName(),
  location: faker.address.zipCode(),
  rate: faker.finance.amount(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
}))

export default async (selectedOption, zipCode) => {
  await sleep(1000);
  return sampleData;
  // try {
  //   const response = await fetch('http://localhost:8000/api/technicians')
  //   const results = await response.json();
  //   return results.map(x => {
  //     return x;
  //   });
  // } catch (e) {
  //   console.error(e);
  //   return [];
  // }
};