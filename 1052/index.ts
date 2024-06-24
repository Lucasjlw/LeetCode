function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  let bestGrumpy = [...grumpy];

  if (minutes < 1)
    return customers.reduce((a, b, index) => {
      if (bestGrumpy[index] === 0) return a;
      return a + b;
    });

  for (let i = 0; i < customers.length; i += minutes) {
    const potentialNewGrumpy = [...grumpy].map((item, index) => {
      if (index >= i && index < i + minutes) return 1;
      return item;
    });

    const bestScore = customers.reduce((a, b, index) => {
      if (bestGrumpy[index] === 0) return a;
      return a + b;
    });

    const current = customers.reduce((a, b, index) => {
      if (potentialNewGrumpy[index] === 0) return a;
      return a + b;
    });

    if (current > bestScore) bestGrumpy = [...potentialNewGrumpy];
  }

  return customers.reduce((a, b, index) => {
    if (bestGrumpy[index] === 0) return a;
    return a + b;
  });
}

const result = maxSatisfied([10, 1, 7], [0, 0, 0], 0);
