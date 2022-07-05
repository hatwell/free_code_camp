const fccTest = "smallestCommons([1, 5]) should return 60"

const wantedTest = "expect(smallestCommons([1, 5]).toEqual(60)"


const [one, two] = fccTest.split(/should return/).map(str => str.trim())

console.log(one, two);


const transformTest = testString =>{
const [actual, expected] = testString.split(/should return/).map(str => str.trim())
    return `it('${testString}', ()=>{
        expect(${actual}).toBe(${expected})
    })`
}


const tests = ["smallestCommons([5, 1]) should return 60",

"smallestCommons([2, 10]) should return 2520",

"smallestCommons([1, 13]) should return 360360",

"smallestCommons([23, 18]) should return 6056820"]

tests.map(t => console.log(transformTest(t)))