import divideFunction from './8-try';
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(...[value, 'Guardrail was processed']);
  } catch (e) {
    queue.push(...['Error: ' + e.message, 'Guardrail was processed']);
  }

  return queue;
}

console.log(
  guardrail(() => {
    return divideFunction(10, 2);
  })
);
console.log(
  guardrail(() => {
    return divideFunction(10, 0);
  })
);
