# 1)შექმენით  პროგრამა, სადაც მომხარებელს  შემოატანინებს რიცხვს, შემდეგ თუ მომხარებელმა შემოიტანა რამე ტქსტი, ანუ დააერორა, მაგ შემთხვევაში აიყვანეთ(raise) ერორი Expection, სადაც ეწერება "you stupid", საბოლოოდ(finally), გამოიტანეთ "end of program"
try:
    name = int(input("number"))
    print(name)
except ValueError:
    raise ValueError("asoebi ara ricxvebi")
else:
    print("you stupid")
finally:
    print("end of program")
