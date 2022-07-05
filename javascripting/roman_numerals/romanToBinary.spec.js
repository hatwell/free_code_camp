const mapRomanCharacter = char => ({ "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }[char])

const romanToBinary = romanString => {  
    let binary = 0;
    romanString.split('').forEach((num, i) => {
        const characterToDigit = mapRomanCharacter(num)
        const nextCharacterToDigit = mapRomanCharacter(romanString[i+1])
        if (nextCharacterToDigit && nextCharacterToDigit > characterToDigit){
            binary -= characterToDigit
        }
        else {
            binary += characterToDigit

        }
    });
    return binary;
  };
  

// const romanToBinary = romanString => {

// }

describe('rtb', ()=>{
    it('converts single', ()=>{
        expect(romanToBinary('V')).toBe(5)
    })

    it('converts with addtion', ()=>{
        expect(romanToBinary('CXV')).toBe(115)

    })
    it('converts with subtraction', ()=>{
        expect(romanToBinary('IC')).toBe(99)

    })
    it('converts with addition and subtraction', ()=>{
        expect(romanToBinary('CXIV')).toBe(114)
    })
    it('converts a big one', ()=>{
        expect(romanToBinary('MCMLXXXIV')).toBe(1984)
    })
})