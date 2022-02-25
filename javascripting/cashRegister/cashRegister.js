
const checkCashRegister = (cost, payment, contents)=>{
    const change = payment - cost
    let totalInRegister = 0
     money = contents.map(denomination => denomination[1])
     totalInRegister = money.reduce((a,b)=>parseInt(a + b))
    console.log(totalInRegister, change);
    if (totalInRegister < change) {return {"change": [], "status": "INSUFFICIENT_FUNDS"} }
    return totalInRegister
}

module.exports = {checkCashRegister}