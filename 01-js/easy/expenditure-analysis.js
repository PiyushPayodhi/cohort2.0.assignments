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
  let categoryListOut = [];

  for (i = 0; i < transactions.length; i++) {
    let categoryOut = {};
    categoryOut.category = transactions[i].category;
    categoryOut.totalSpent = transactions[i].price;
    for (j = i + 1; j < transactions.length; j++) {
      if (transactions[i].category == transactions[j].category) {
        categoryOut.totalSpent =
          transactions[i].price = transactions[i].price + transactions[j].price;
        transactions.splice(j, 1);
        j--
      }
    }
    categoryListOut.push(categoryOut);
  }
  return categoryListOut;
}

module.exports = calculateTotalSpentByCategory;
