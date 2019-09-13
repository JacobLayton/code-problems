/*Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2,4,6]. Anna declines to eat item k=bill[2]  which costs 6. If Brian calculates the bill correctly, Anna will pay (2+4)/2 = 3. If he includes the cost of bill[2], he will calculate (2+4+6)/2 = 6. In the second case, he should refund  to Anna.
*/

/*
bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill
*/
// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  // declare sum variable
  let sum = 0;
  // loop through bill
  for (let i = 0; i < bill.length; i++) {
    // skip index k
    // add all other integers in bill
    // console.log(i)
    if (i !== k) {
      sum += bill[i];
      // console.log("sum", sum)
    }
  }
  if (sum / b === 2) {
    console.log("Bon Appetit");
  } else {
    console.log(b - sum / 2);
  }
  // if sum / b === 2 return bon apetit
  // else return sum - b
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12)); // Should log 5
