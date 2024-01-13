export default function divideFunction(numerator, denominator) {
  let ans;
  if (denominator == 0) {
    throw new Error('cannot divide by 0');
  }
  return (ans = numerator / denominator);
}
