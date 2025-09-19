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
