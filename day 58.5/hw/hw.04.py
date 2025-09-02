# 4)შექმენით სახელების სია, სადაც ბევრი სახელი იქნება ჩაშენებული, შემდეგ გაფილტრეთ ეს სია ისე რომ დარჩეს მარტო ისეთი სახელები რომლებიც იწყება a ზე და მთავრდება a ზე (მაგალითად ana, anamaria, axtona)
name = ["anastasia","taso","victoria","sofia","ana"]
name1 =list(filter(lambda a:a[0] == "a" and a[-1] == "a" , name))
print(name1)