const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

const nowServing = katzDeliLine => {
  let q = katzDeliLine.length
  let name = katzDeliLine[0];
  if (!q) {
    return 'There is nobody waiting to be served!'
  } else {
    katzDeliLine.splice(0, 1);
    return `Currently serving ${name}.`;
  }
}


const currentLine = katzDeliLine => {
    let line = []
    let q = katzDeliLine.length

    if (!q) {
      return 'The line is currently empty.'
    } else {
      for(let i = 0; i < q; i++) {
        line += `${(i + 1)}. ${katzDeliLine[i]},`

      }
      line = line.slice(0, line.length-2)
        /////
      return `The line is currently: ${line}`
    }
}
