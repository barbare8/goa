# 3)შექმენით სახლების სია, სადაც ბევრი სახელი იქნება ჩაშენებული, გაფილტრეთ სია ისე რომ დარჩეს მარტო panidrome ები, ანუ ისეთი სახელები რომლებიც შემოტრიალებულზე იგივე რჩება(მაგალითად ana)
name1 = ["tornike","barbare","demetre","elene","nia","toma","ana"]
name2 = list(filter(lambda a: a == a[::-1],name1))
print(name2)