 #1) დაწერე პროგრამა, რომელიც while ციკლით 3-ჯერ დაბეჭდავს სიტყვას „Hello“ 
# counter = 0
# while counter != 3:
#     print("hello")
#     counter += 1
password = "SecretWord"
guess = input()
while guess != password:  
  guess = input() 
print("Access Granted")