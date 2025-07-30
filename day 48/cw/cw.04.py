def high_and_low(numbers):
    goa = numbers.split(" ")
    for i in range(len(goa)):
        goa[i]=int(goa[i])
    return str(max(goa))+" "+str(min(goa))
