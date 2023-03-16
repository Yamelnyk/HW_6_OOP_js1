'use strict'

class People {
    constructor (gender) {
        this.gender = gender;
    }
    showGender () {
        if (this.gender === 'woman') {
            console.log(`It's a woman!`)
        } else if (this.gender === 'man'){
            console.log(`It's a man!`)
        }else if (this.gender === 'girl'){
            console.log(`It's a girl!`)
        } else {
            console.log(`It's a boy!`)
        }
    }
}


class Person extends People {
    constructor (name, weight, gender) {
        super (gender);
        this.name = name; 
        this.weight = weight;
        this.part = 'Person';
    }
    showQuestion = () => alert (`${this.name} do you have a dream?`);
    getName = () => console.log(this.name);
    phrase = () => alert (`${this.name} weighs ${this.weight} kg.`);
}

// const dmytro = new Person('Dmytro', '70', 'man')
// console.log(dmytro)
// dmytro.phrase()

class Kids extends Person {
    #age;
    constructor (name, weight, gender, age, nationality) {
        super (name, weight, gender)
        this.nationality = nationality;
        this.#age = age;
        this.part = 'Child';
    }

        showAge () {
        if (this.#age <= 2) {
            console.log(`It's a Baby.`)
        }
        if (this.#age > 2 && this.#age <= 5 ) {
            console.log(`It's a Toddler.`)
        } if (this.#age > 5) {
            console.log(`It's a Kid`)
        }
        }
    whoYouAre = () => console.log(this.nationality);
    showQuestion = () => alert (`${this.name} do you have a dream?`);
}

// const yana = new Kids ('Yana', '50', 'girl', '10', 'ukrainian')
// console.log(yana);
// yana.showAge(4);

class Workers extends Person {
    #height
    constructor (name, weight, gender, profession) {
        super (name, weight, gender)
        this.profession = profession;
        this.part = 'Worker';
        this.#height = +prompt('Please enter your height');
    }
  showHeight()  {
            if (this.#height > 180) { 
                alert('You are tall worker.')
            } if (this.#height <= 180 && this.#height > 150) {
                alert('You are of average height.')
            } if (this.#height <= 150) {
                this.#showMessage ()
            }
        }
        #showMessage () {
            alert(`Sorry, You can't work a flight attendant.`)   
        }   
        showQuestion = () => alert (`${this.name} do you have a dream?`);     
}

// const emma = new Workers ('Emma', '7', 'woman');
// console.log(emma)
// emma.showHeight ()
// emma.showQuestion ()
// emma.phrase()

class Students extends People {
    #specialty
    constructor (name, weight, gender, specialty) {
        super (gender)
        this.name = name;
        this.#specialty = specialty;
        this.part = 'Students';
    }
    whoYouAre = () => console.log(this.part);
    asking = () => console.log(`Do you like your specialty - ${this.#specialty}?`);
    showQuestion = () => alert (`${this.name} do you have a dream?`);
}

// const dmytro = new Students('Dmytro', '70', 'man', 'engineer');
// console.log (dmytro);
// dmytro.showQuestion();

class Retired extends People {
    #age
    constructor (name, weight, gender, age) {
        super(gender);
        this.#age = age;
        this.part = 'Retired'; 
        this.name = name;
        this.weight = weight;  

    }
 whoYouAre = () => console.log(this.part);
 asking = () => console.log(`How many years have you worked?`)
 getAge = () => console.log(this.#age);
}

const dmytro = new Retired ('Dmytro', '70', 'man', '70');
console.log (dmytro);
dmytro.showGender()
