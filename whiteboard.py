# Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
# Ex: "Reverse this string, please!" Output: "Reverse siht string, !esaelp"
# Ex2: 'This is not a test' 'Output: 'This si not a test'

def reverse(string):
    phrase = string.split(" ")    
    for word in range(len(phrase)):
        if word % 2 != 0:
            phrase[word] = phrase[word][::-1]
    return " ".join(phrase)
            

new_phrase = 'Reverse this string please!'
print(reverse(new_phrase))