# Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.


def makeAnagram(a, b):
    deletions = 0
    letterFreqs = {}

    for char in a:
        if char not in letterFreqs:
            letterFreqs[char] = 1
        else:
            letterFreqs[char] += 1

    for char in b:
        if char not in letterFreqs:
            letterFreqs[char] = -1
        else:
            letterFreqs[char] -= 1

    for freq in letterFreqs:
        deletions += abs(letterFreqs[freq])

    return deletions


print(makeAnagram("cde", "abc"))  # should return 4
# should return 30
print(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"))
print(makeAnagram("showman", "woman"))  # should return 2
