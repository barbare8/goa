var humanYearsCatYearsDogYears = function(humanYears) {
  let catyear = 0
  let dogyear = 0
  if(humanYears == 1){
    catyear = 15
    dogyear = 15
  }else if(humanYears == 2){
    catyear = 24
    dogyear = 24
  }else{
    catyear = 24 + (humanYears -2) *4
    dogyear = 24 + (humanYears - 2) *5
  }
  return [humanYears , catyear , dogyear]
}