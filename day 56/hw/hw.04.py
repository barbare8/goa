def validate_pin(pin):
    return True if len(pin.replace("-", "")) == 4 or len(pin.replace("-", "")) == 6 else False
