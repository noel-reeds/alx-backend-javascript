export default function guardrail(mathFunction) {
  const queue = [];
  const res = mathFunction();
  if (Number.isNaN(res)) {
    queue.push(`Error: ${res.message}`, 'Guardrail was processed');
  } else {
    queue.push(res, 'Guardrail was processed');
  }
  return queue;
}
