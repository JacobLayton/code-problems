# https://www.hackerrank.com/challenges/angry-children/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms


def maxMin(k, arr):
    minFairness = 999999999999

    arr.sort()

    for i in range(0, len(arr) - k + 1):
        curFairness = arr[i + k - 1] - arr[i]
        if (curFairness < minFairness):
            minFairness = curFairness

    return minFairness


print(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]))  # Should return 20
print(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]))  # Should return 3
print(maxMin(2, [1, 2, 1, 2, 1]))  # Should return 0
