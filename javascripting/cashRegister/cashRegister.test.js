const {checkCashRegister} = require('./cashRegister')

it('should return an object', ()=>{

    expect(typeof checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])).toBe('object')
})

it.only('should cash register one quarter', ()=>{

    expect(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])).toBe({status: "OPEN", change: [["QUARTER", 0.5]]}) 
})

it('should cash register', ()=>{

    expect(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])).toBe({status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}) 
})

it('should cash register', ()=>{

    expect(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toBe({status: "INSUFFICIENT_FUNDS", change: []}) 
})

it('should cash register', ()=>{

    expect(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toBe({status: "INSUFFICIENT_FUNDS", change: []}) 
})

it('should cash register', ()=>{

    expect(checkCashRegister(         19.5, 20, 
        [["PENNY", 0.5],
         ["NICKEL", 0],
         ["DIME", 0],
         ["QUARTER", 0],
         ["ONE", 0],
         ["FIVE", 0],
         ["TEN", 0],
         ["TWENTY", 0],
         ["ONE HUNDRED", 0]])).toBe( {status: "CLOSED", change: [["PENNY", 0.5],
         ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}) })



       