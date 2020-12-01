class Person {
  constructor(firstname, lastname, ssn) {
    this._firstname = firstname
    this._lastname = lastname
    this._ssn = ssn
    this._address = null
    this._birthYear = null
  }

  get firstname() {
    return this._firstname
  }

  get lastname() {
    return this._lastname
  }

  get ssn() {
    return this._ssn
  }

  get address() {
    return this._address
  }

  get birthYear() {
    return this._birthYear
  }

  set address(addr) {
    this._address = addr
  }

  set birthYear(year) {
    this._birthYear = year
  }

  toString() {
    return `Person(${this._firstname}, ${this._lastname})`
  }

  peopleInSameCountry(friends) {
    const result = []

    for (const idx in friends) {
      const friend = friends[idx]
      if (this.address?.country === friend.address?.country) {
        result.push(friend)
      }
    }

    return result
  }
}

class Student extends Person {
  constructor(firstname, lastname, ssn, school) {
    super(firstname, lastname, ssn)
    this._school = school
  }

  get school() {
    return this._school
  }

  studentsInSameCountryAndSchool(friends) {
    const closeFriends = super.peopleInSameCountry(friends)

    const result = []
    for (const idx in closeFriends) {
      const friend = closeFriends[idx]
      if (friend.school === this.school) {
        result.push(friend)
      }
    }

    return result
  }
}

// class Address {
//   constructor(adress) {
//     this._address = adress
//   }

//   get adress() {
//     return this._address
//   }
// }

class Address {
  constructor(country, state, city, zip, street) {
    this._country = country
    // this._state = state
    // this._city = city
    // this._zip = zip
    // this._street = street
  }
  // get street() {
  //   return this._street
  // }
  // get city() {
  //   return this._city
  // }
  // get state() {
  //   return this._state
  // }
  // get zip() {
  //   return this._zip
  // }
  get country() {
    return this._country
  }
}

const curry = new Student('Haskell', 'Curry', '111111111', 'PennState')
curry.address = new Address('US')
const turing = new Student('Alan', 'Turing', '222222222', 'Princeton')
turing.address = new Address('England')
const church = new Student('Alonzo', 'Church', '333333333', 'Princeton')
church.address = new Address('US')
const kleene = new Student('Stephen', 'Kleene', '444444444', 'Princeton')
kleene.address = new Address('US')

console.log(1, curry.studentsInSameCountryAndSchool([turing, church, kleene]))
console.log(2, turing.studentsInSameCountryAndSchool([curry, church, kleene]))
console.log(3, church.studentsInSameCountryAndSchool([curry, turing, kleene]))
