const buildThreshold = (numSteps) => {
  let thresholds = [0];

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  return thresholds;
};

const headingEntranceOptions = { threshold: 0.3 };

export { buildThreshold, headingEntranceOptions };
