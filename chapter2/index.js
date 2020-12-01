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
      if (this.address.country === friends.address.country) {
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

const kazuhira = new Student('kazuhira', 'hirano', 222, 'medaka')

console.log(kazuhira.toString())
