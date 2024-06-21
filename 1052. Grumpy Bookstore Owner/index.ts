function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number,
): number {
  const { getMaxes, setMaxes } = maxes(minutes);

  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    const isGrumpy = grumpy[i];

    const value = isGrumpy ? customer : 0;
    setMaxes(i, value);
    console.log(getMaxes());
  }

  return 0;
}

function maxes(minutes: number) {
  const maxes: number[] = new Array(4).fill(0);

  const setMaxes = (i: number, value: number) => {
    for (let k = 0; k < minutes; k++) {
      if (i === 0 && value > maxes[i]) maxes[i] = value;
      else if (value > maxes[i] && value < maxes[i - 1]) maxes[i] = value;
    }
  };

  const getMaxes = () => maxes;

  return { getMaxes, setMaxes };
}
