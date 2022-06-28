const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    hasPets: true,
    petsNr: 3,
    pets: ['cat', 'dog', 'bird'],
    isMarried: false,
    address: {
        country: 'England',
        city: 'London',
        street: '10 Thomas More St'
    },
    brokenProp: null
};

function getObjectPropType(object) {
    let keyTypes = [];
    let keyIndex = 0
    for(let key in object){
        keyIndex++;
        let keyTyp = typeof object[key];
        console.log(`Key${keyIndex}: ${key} & PropertyType: ${keyTyp}`);

    }

}
 getObjectPropType(person);