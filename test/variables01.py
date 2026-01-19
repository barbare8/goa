# data_types = ["str", 21, "int", "barbare", "float", 20.2, "bool", True]

# ძირითადი 
name = "barbare" #str სტრინგი არის ნებისმიერი რამ რასაც ჩავწერთ ბრჭყალებში

age = 9 #int არის ნებისმიერი მთელი რიცხვი

height = 1.30 #float არის ნებისმიერი ათწილადი რიცხვი

is_student = True #bool არის True and False

print(type(name))
print(type(age))
print(type(height))
print(type(is_student))


# colections
students = ["barbare", "tornike" , "barbare", "giorgi"] #list
print(students[0])
print(students[3])
print(students[-2])
print(len(students))
students.append("lile")
print(len(students))
students.remove("tornike")
countbarbare = students.count("barbare")
print(countbarbare)