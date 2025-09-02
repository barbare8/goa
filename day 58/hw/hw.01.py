def convert_lambda_to_def(string):
    func = string.split(" ")
    return f"def {func[0]}({func[3].replace(':', '')}):\n    return {string[string.find(':')+ 2 :]}"
