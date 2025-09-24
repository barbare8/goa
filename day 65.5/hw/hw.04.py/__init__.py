from  my_module import pin_code1
try:
    pin_code = int(input())
except ValueError:
    raise Exception("get outtt")
else:
   pin_code = int(input())
   if pin_code == pin_code1:
    print("test pased")
   else:
    raise Exception("wrong pin_code")
finally:
    print("end of program")