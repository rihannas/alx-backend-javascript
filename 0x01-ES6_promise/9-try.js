export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(...[value, 'Guardrail was processed']);
  } catch (e) {
    queue.push(...[`${e.name} : ${e.message}`, 'Guardrail was processed']);
  }

  return queue;
}
