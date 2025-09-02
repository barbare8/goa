def count_letters_and_digits(s):
    string = "abcdefghijklmnopqrstuvwxyz0123456789"
    count = 0
    for i in s.lower():
        if i in string:
            count += 1
    return count
