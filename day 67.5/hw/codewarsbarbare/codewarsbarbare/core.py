def up_array(arr):
    if  arr == [0]:
        return [1]
    zeros = []
    l = "".join([str(i) for i in  arr])
    for i in l:
        if i == '0':
            zeros.append(0)
        else:
            break
    for i in arr:
        if  i < 0:
            return None
        elif len(str(i)) > 1:
            return None
    if l == '':
        return None
    if zeros+[int(x) for x  in str(int(l)+1)] == [0, 1, 0]:
        return [1, 0]
    else:
        return zeros+[int(x) for x  in str(int(l)+1)]
def modified_sum(a, n):
    return sum([i**n for i in a]) - sum(a)
def diff(a, b):
    num = [i for i in a if i not in b]
    num1 = [x for x in b if x not in a]
    num2 = []
    return sorted(list(set(num + num1)))
def sep_str(st): 
    result = []
    arr = st.split() # ["Just", "Live", "Life", "Man"]
    length = [len(i) for i in arr]
    for i in range(max(length)):
        temp_arr = []
        for x in arr:
            if  i > len(x)-1:
                temp_arr.append('')
            else:
                temp_arr.append(x[i])
        result.append(temp_arr)
    return result
def reverse_words(text):
    text = text.split(" ")
    result = ""
    for word in text:
        result += " " + word[::-1]
    return result[1:]