var katzDeli =[]

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine[0]}.`
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently"
  for (i = 0; i < katzDeliLine.length; i++) {
    line += (` ${i + 1}. ${katzDeliLine[i]},)`
  }
  return line
}
