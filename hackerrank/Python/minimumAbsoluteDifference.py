# https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms


def minimumAbsoluteDifference(arr):
    arr.sort()

    minAbsDiff = abs(arr[0] - arr[1])

    for i in range(1, len(arr) - 1):
        currentAbsDiff = abs(arr[i] - arr[i+1])
        if currentAbsDiff < minAbsDiff:
            minAbsDiff = currentAbsDiff

    return minAbsDiff


print(minimumAbsoluteDifference([3, -7, 0]))  # should return 3
print(
    minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
)  # should return 1
print(minimumAbsoluteDifference([1, -3, 71, 68, 17]))  # should return 3
