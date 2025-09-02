# 2)შექმენით სია, სადაც იქნება ბევრი რიცხვი, შემდეგ გაფილტრეთ ეს სია ისე რომ დარჩეს მხოლოდ float რიცხვები
numbers = [1, 2.5, 3, 4.7, 5, 6.1,7,8.0,9]
numbers1 = list(filter(lambda x:type(x) == float, numbers))
print(numbers1)