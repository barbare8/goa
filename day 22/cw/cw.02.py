# 2) მომხმარებლის შემოტანილ რიცხვამდე ყველა რიცხვი შეკრიბეთ
user1=int(input("enter number"))
doqument=0
# 0 1 2  3 4 5
for i in range(user1+1):
    doqument += i
print(doqument)