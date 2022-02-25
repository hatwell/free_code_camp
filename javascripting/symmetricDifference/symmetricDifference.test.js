describe('symmetric difference', ()=>{
    expect(sym([1, 2, 3], [5, 2, 1, 4])).toBe( [3, 4, 5]) .
    
    expect(sym([1, 2, 3], [5, 2, 1, 4])).toHaveLength(3)
    
    expect(sym([1, 2, 3, 3], [5, 2, 1, 4])).toBe([3, 4, 5])  
    
    expect(sym([1, 2, 3, 3], [5, 2, 1, 4])).toBe()  
    
    expect(sym([1, 2, 3], [5, 2, 1, 4, 5])).toBe([3, 4, 5])  
    
    expect(sym([1, 2, 3], [5, 2, 1, 4, 5])).toHaveLength(3)  
    
    expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toBe( [1, 4, 5]) 
    
    expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toHaveLength(3) 
    
    expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toBe([1,4,5])
    
    expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toHaveLength(3)  
    
    expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toBe(  [2, 3, 4, 6, 7])
    
    expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toHaveLength(5)
    
    expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).toBe([1, 2, 4, 5, 6, 7, 8, 9])
    
    expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).toHaveLength(8)
    
    
}0