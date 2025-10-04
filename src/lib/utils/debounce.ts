export default function debounce<Params extends unknown[], Return>(
  mainFunction: (...args: Params) => Return,
  delay: number
) {
  let timer: NodeJS.Timeout;

  return (...args: Params) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
}
