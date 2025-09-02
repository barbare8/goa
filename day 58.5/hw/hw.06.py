# 6)შექმენით რიცხვების სია, შემდეგ მარტო ლუწ ინდექსზე მდგომი ელემენტები დატოვეთ ფილტრაციით
numbers =[i for i in range(1, 10)]
numbers1 = list(filter(lambda a:numbers.index(a) % 2 != 0, numbers))
print(numbers1)