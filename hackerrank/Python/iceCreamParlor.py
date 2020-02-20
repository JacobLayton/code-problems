# https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search


def whatFlavors(costs, money):
    compliments = {}

    for i in range(0, len(costs)):
        cost = costs[i]
        if cost >= money:
            continue
        compliment = money - cost
        if cost in compliments:
            costIndex = i + 1
            complimentIndex = compliments[cost]
            mini = min(costIndex, complimentIndex)
            maxi = max(costIndex, complimentIndex)
            #print("%s %s" % (mini, maxi))
            print(f"{mini} {maxi}")
            return
        compliments[compliment] = i + 1


print(whatFlavors([1, 4, 5, 3, 2], 4))  # Should log "1 4"
print(whatFlavors([1, 2, 3, 5, 6], 5))  # Should log "2 3"
print(whatFlavors([7, 2, 5, 4, 11], 12))  # Should log "1 3"
