//www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

// Complete the function whatFlavors in the editor below. It must determine the two flavors they will purchase and print them as two space-separated integers on a line.

https: function whatFlavors(costs, money) {
  const compliments = {};

  for (let i = 0; i < costs.length; i++) {
    const cost = costs[i];
    if (cost >= money) {
      continue;
    }
    const compliment = money - cost;
    if (compliments[cost]) {
      const costIndex = i + 1;
      const complimentIndex = compliments[cost];
      const min = Math.min(costIndex, complimentIndex);
      const max = Math.max(costIndex, complimentIndex);
      console.log(`${min} ${max}`);
      return;
    }
    compliments[compliment] = i + 1;
  }
}

console.log(whatFlavors([1, 4, 5, 3, 2], 4)); // Should log "1 4"
console.log(whatFlavors([1, 2, 3, 5, 6], 5)); // Should log "2 3"
console.log(whatFlavors([7, 2, 5, 4, 11], 12)); // Should log "1 3"
