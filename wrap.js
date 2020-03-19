const wrap = (line, maxLen) => {
  let answer = ""

  // if (line.length > maxLen){
  //   return "Error"
  // }

  if (line.length <= maxLen){
    return line
  }

  if (line.length > maxLen){
    let lastIndex = line.lastIndexOf(" ")
    console.log(lastIndex)

    answer += line.slice(0, lastIndex)
  }




  return answer
};














module.exports = wrap;
