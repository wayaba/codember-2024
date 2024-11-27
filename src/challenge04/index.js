const nodesArray = [
  [1, 2],
  [2, 3],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
  [13, 14],
  [15, 16],
  [17, 18],
  [19, 20],
  [21, 22],
  [23, 24],
  [25, 26],
  [27, 28],
  [31, 32],
  [33, 34],
  [35, 36],
  [37, 38],
  [39, 40],
  [41, 42],
  [43, 44],
  [45, 46],
  [47, 48],
  [49, 50],
  [71, 72],
  [73, 74],
  [75, 76],
  [77, 78],
  [79, 80],
  [81, 82],
  [83, 84],
  [85, 86],
  [87, 88],
  [155, 156],
  [157, 158],
  [175, 176],
  [177, 178],
  [179, 180],
  [181, 182],
  [183, 184],
  [195, 196],
  [197, 198],
  [198, 199],
  [199, 200],
  [2, 4],
  [4, 6],
  [6, 8],
  [8, 10],
  [10, 12]
]

const getSafeNodes = (nodes) => {
  const sortedArray = nodes.sort((a, b) => {
    const sumA = a[0] + a[1]
    const sumB = b[0] + b[1]
    return sumA - sumB
  })
  const invalidNodes = new Set()
  sortedArray.forEach(([input, output]) => {
    if (invalidNodes.has(input)) invalidNodes.add(output)
    if (invalidNodes.has(output)) invalidNodes.add(input)
    if (sortedArray.some((otherNode) => otherNode[0] === output)) {
      invalidNodes.add(input)
      invalidNodes.add(output)
    }
  })
  return sortedArray
    .filter(([value]) => !invalidNodes.has(value))
    .flat()
    .join(',')
}

console.log(
  getSafeNodes([
    [1, 2],
    [2, 3],
    [4, 5]
  ])
) //4,5

console.log(
  getSafeNodes([
    [1, 2],
    [2, 3],
    [3, 4]
  ])
) // []

console.log(
  getSafeNodes([
    [4, 6],
    [7, 9],
    [10, 12],
    [12, 16]
  ])
) //  4, 6, 7, 9

console.log(getSafeNodes(nodesArray)) // [ 4, 6, 7, 9 ]
// console.log(getSafeNodes(nodesArray).join(',')) // [ 4, 6, 7, 9 ]
