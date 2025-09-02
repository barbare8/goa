arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,"barbare",True,False,10.5]

arr2 = filter(lambda element:element%2!=0, arr1) 

def filter_copy(func, arr):
    result = []
    for i in arr:
        if func(i) == True:
            result.append(i)
    return result
