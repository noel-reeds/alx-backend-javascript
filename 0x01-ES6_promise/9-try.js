export default function guardrail(mathFunction) {
  const queue = [];
  const res = mathFunction();
  if (Number.isFinite(res)) {
    queue.push(res, 'Guardrail was processed');
  } else {
    queue.push(`${res.name}: ${res.message}`, 'Guardrail was processed');
  }
  return queue;
}
