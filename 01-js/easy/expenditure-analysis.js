/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let arr = []
  for(let i =0 ;i<transactions.length; i++){
    let totalSpent = transactions[i].price
    let result = arr.find((item)=>{
      if(item.category===transactions[i].category) return true
    })
    
    if(!result){
      for(let j = i+1; j<transactions.length; j++){
        if(transactions[i].category===transactions[j].category) totalSpent+=transactions[j].price
      }
      arr.push({
        category: transactions[i].category,
        totalSpent: totalSpent
      })
    }
    
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
