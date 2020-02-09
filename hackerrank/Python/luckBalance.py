# https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms


def luckBalance(k, contests):
    luck = 0
    importantLuck = []

    for contest in contests:
        if contest[1] == 0:
            luck += contest[0]
        else:
            importantLuck.append(contest[0])

    importantLuck.sort(reverse=True)

    impLen = len(importantLuck)

    while impLen > k:
        poppedLuck = importantLuck.pop(-1)
        luck -= poppedLuck
        impLen -= 1

    for impLuck in importantLuck:
        luck += impLuck

    return luck


print(luckBalance(3, [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
]))  # Should return 29
print(luckBalance(2, [
    [5, 1],
    [4, 0],
    [6, 1],
    [2, 1],
    [8, 0],
]))  # Should return 21
