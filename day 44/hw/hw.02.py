def reverse_words(s):
    string = ""
    for i in s.split()[::-1]:
        string += i + " "
    return string[0:-1]
