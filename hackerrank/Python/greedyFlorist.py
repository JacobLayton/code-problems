# https://www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms


def getMinimumCost(k, c):

    cost = 0
    multiplier = 1
    c.sort(reverse=True)

    for i in range(len(c)):
        cost += multiplier * c[i]
        if (i+1) % k == 0:
            multiplier += 1

    return cost


print(getMinimumCost(3, [2, 5, 6]))  # should return 13
print(getMinimumCost(2, [2, 5, 6]))  # should return 15
print(getMinimumCost(3, [1, 3, 5, 7, 9]))  # should return 29
