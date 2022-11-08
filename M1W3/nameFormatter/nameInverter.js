const nameInverter = function(name) {

  const honorifics = ["Mr.", "Mrs.", "Ms.", "Dr."];

  if (name === undefined) { //should throw an error when name is undefined
    throw new Error('Error');
  }
  if (name === '') { // should return an empty string when passed an empty string
    return '';
  }

  name = name.split(' ').filter(i => /\S/.test(i)); // remove spaces, turn into array

  for (let honorific of honorifics) {
    if (name.includes(honorific) && name.length === 1) {
      return "";
    } else if (name.includes(honorific)) {
      honorific = name.slice(0, 1); // only the title
      name = name.slice(1); // only the name, without the title
      return honorific + " " + name.reverse().join(', ');
    }
  }
  return name.reverse().join(', '); //if no title, return last name, first name
};


module.exports = nameInverter;

//Tests
// console.log(nameInverter("Mrs. Finally Got"))
// console.log(nameInverter("Finally Got"))
// console.log(nameInverter(" Finally Got "))
// console.log(nameInverter(" Finally "))
// console.log(nameInverter("Dr. "))
// console.log(nameInverter("Dr. Nope"))