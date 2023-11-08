# 1
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        dic = {}
        max_len = 0
        l = 0
        r = 0
        while l < len(s) and r < len(s):
            if s[r] not in dic:
                dic[s[r]] = True
                r += 1
                max_len = max(max_len, r - l)
            else:
                dic.pop(s[l])
                l += 1
        return max_len
# 2
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        dic = {}
        max_len = 0
        l = 0
        for r, c in enumerate(s):
            if c in dic:
                l = max(l, dic[c])
            dic[c] = r + 1
            max_len = max(max_len, r - l + 1)
        return max_len
