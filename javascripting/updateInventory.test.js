const updateInventory = (inventory, additions) => {
const updated = [...inventory]
const products = inventory.map(item => item[1])

additions.forEach(entry => {
    const [amount, productName] = entry
    if(products.find(name => name == productName)){
        updated[products.indexOf(productName)][0] += amount
    }
    else{ updated.push(entry)}
} )

return updated.sort((a,b)=> a[1] > b[1] ? 1 : -1)

}



describe('update inventory', ()=>{
    it('should be array of length 6', ()=>{expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])).toHaveLength(6)})



    
    it('simpler', ()=>{expect(
        updateInventory(
            [
                [21, "Bowling Ball"],
                 [2, "Dirty Sock"],
                 [1, "Hair Pin"],
                 [5, "Microphone"]],
                 
                 [[2, "Hair Pin"],
                 [3, "Half-Eaten Apple"],
                 [67, "Bowling Ball"],
                 [7, "Toothpaste"]
                ]
                )).toEqual(
                [
                [88, "Bowling Ball"],
                 [2, "Dirty Sock"], 
                 [3, "Hair Pin"], 
                 [3, "Half-Eaten Apple"], 
                 [5, "Microphone"], 
                 [7, "Toothpaste"]
                ])})
    
    it('should update 1', ()=>{expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])).toEqual([[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]])})

    it('should update2', ()=>{expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])).toEqual([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]])})

    it('should update 3', ()=>{expect(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])).toEqual([[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]])})

    it('should update 4', ()=>{expect(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])).toEqual([[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]])})
})