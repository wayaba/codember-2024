const trace = `1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
1 2 3 4 -1
0 0 1 1 1
2 -1 0 2 1
0 1 0 1
3 0 -2 1
1 1 1 1 1 1
1 2 3 4 -1
0 0 1 1 1
2 -1 0 2 1
0 1 0 1
3 0 -2 1
1 1 1 1 1 1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
1 2 3 4 -1
0 0 1 1 1
2 -1 0 2 1
0 1 0 1
3 0 -2 1
1 1 1 1 1 1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
1 2 3 4 -1
0 0 1 1 1
2 -1 0 2 1
0 1 0 1
3 0 -2 1
1 1 1 1 1 1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
1 2 3 4 -1
0 0 1 1 1
2 -1 0 2 1
0 1 0 1
3 0 -2 1
1 1 1 1 1 1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
0 1 1 1
1 2 3 4 -1
0 0 1 1 1
2 -1 0 2 1
0 1 0 1
3 0 -2 1
1 1 1 1 1 1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
1 2 3 4 -1
0 0 1 1 1
2 -1 0 2 1
0 1 0 1
3 0 -2 1
1 1 1 1 1 1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
1 2 3 4 -1
0 0 1 1 1
2 -1 0 2 1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
1 2 3 4 -1
0 0 1 1 1
2 -1 0 2 1
0 1 0 1
3 0 -2 1
1 1 1 1 1 1
-1 0 1 -2 2
1 2 4 1 -2
0 1 2 3 -1
0 1 1 1
0 1 0 1
3 0 -2 1
1 1 1 1 1 1
1 0 1 0 1 0 1 0 1 4 5 6 7 8`

function getSteps(tracking) {
  let instructionIndex = 0
  let inArray = true
  let stepQty = 0
  let trackingArray = tracking
    .split(' ')
    .map((instruction) => Number(instruction))
  while (inArray) {
    const instructionIndexOld = instructionIndex
    instructionIndex += trackingArray[instructionIndex]
    trackingArray.splice(
      instructionIndexOld,
      1,
      trackingArray[instructionIndexOld] + 1
    )

    stepQty++
    if (instructionIndex < 0 || instructionIndex >= trackingArray.length)
      inArray = false
  }
  return stepQty
}

function getStepsFromTrace(input) {
  const initialValue = 0

  return input
    .split('\n')
    .map((item) => {
      return getSteps(item)
    })
    .reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    )
}

// console.log(getSteps('1 2 4 1 -2')) //5
// console.log(getSteps('0 1 2 3 -1')) //6
// console.log(getSteps('1 -2 5')) // 2
// console.log(getSteps('1 0 1 0 1 0 1 0 1 4 5 6 7 8')) //15
console.log(
  `submit ${getStepsFromTrace(trace)}-${getSteps(
    '1 0 1 0 1 0 1 0 1 4 5 6 7 8'
  )}`
)
