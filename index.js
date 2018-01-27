function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return katzDeliLine.shift();
  }
}

function currentLine(katzDeliLine)
{
  var currentLine
  for(var i = 0; i < katzDeliLine.length; i++){
    
  }
}