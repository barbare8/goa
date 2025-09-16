def diff(a, b):
    num = [i for i in a if i not in b]
    num1 = [x for x in b if x not in a]
    num2 = []
    return sorted(list(set(num + num1)))
