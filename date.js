function boletoDueDate(){
  let dias = 1
  var data = new Date(),
      day  = (data.getDate() + dias).toString().padStart(2, '0'),
      month  = (data.getMonth() + 1 + 0).toString().padStart(2, '0'),
      year  = data.getFullYear();
      if(day > 30){
        day  = (data.getDate() + dias - 30 ).toString().padStart(2, '0'),
        month  = (data.getMonth() + 2 + 0).toString().padStart(2, '0')
      return year+"-"+month+"-"+day;
      }
      return year+"-"+month+"-"+day;
}
console.log(boletoDueDate())
