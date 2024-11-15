function unlockTerminal(initialCode, movements) {
  let finalMovements = []
  let finalMovementIndex = 0

  for (let movIndex = 0; movIndex < movements.length; movIndex++) {
    if (movements[movIndex] === 'U') {
      finalMovements[finalMovementIndex] = !finalMovements[finalMovementIndex]
        ? 1
        : Number(finalMovements[finalMovementIndex]) + 1
    }
    if (movements[movIndex] === 'D') {
      finalMovements[finalMovementIndex] = !finalMovements[finalMovementIndex]
        ? -1
        : Number(finalMovements[finalMovementIndex]) - 1
    }
    if (movements[movIndex] === 'R') {
      finalMovementIndex =
        finalMovementIndex + 1 > initialCode.length ? 0 : finalMovementIndex + 1
    }
    if (movements[movIndex] === 'L') {
      finalMovementIndex =
        finalMovementIndex - 1 < 0
          ? initialCode.length - 1
          : finalMovementIndex - 1
    }
  }

  return initialCode
    .split('')
    .map((initialValue, index) => {
      const value =
        Number(initialValue) +
        (finalMovements[index] ? Number(finalMovements[index]) : 0)
      console.log(value, index)

      return value < 0 ? 10 + value : value % 10
    })
    .join('')
}

console.log(unlockTerminal('000', 'URURD')) // 119
console.log(unlockTerminal('1111', 'UUURUUU')) // 4411
console.log(unlockTerminal('9999', 'LULULULD')) // 8000

console.log(unlockTerminal('528934712834', 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR')) // 628934712834
