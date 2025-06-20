let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000,
    "Dhaka": 30000000
};
let cityPopulations = {};

for (const cities in citiesPopulation) {
    if (cities == "Berlin") {
        break
    }
    cityPopulations[cities] = citiesPopulation[cities]
    console.log(cities);
}
console.log(cities);
