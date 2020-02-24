# https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues


def isBalanced(s):
    # Complete this function
    bracket_map = {'{': '}', '(': ')', '[': ']'}
    stack = []
    for b in s:
        if b in bracket_map.keys():  # openning
            stack.append(bracket_map[b])
        elif b in bracket_map.values():  # closing
            if not stack or stack.pop() != b:
                return "NO"
    if not stack:
        return "YES"
    else:
        return "NO"


print(isBalanced("{[()]}"))  # Yes
print(isBalanced("{{[[(())]]}}"))  # Yes
print(isBalanced("{[(])}"))  # No
print(isBalanced("{(([])[])[]}"))  # Yes
print(isBalanced("{(([])[])[]]}"))  # No
