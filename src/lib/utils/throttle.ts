export default function throttle<Params extends unknown[], Return>(
  mainFunction: (...args: Params) => Return,
  delay: number
) {
  let isBusy = false;
  let waitingArgs: null | Params = null;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      isBusy = false;
    } else {
      mainFunction(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: Params) => {
    if (isBusy) {
      waitingArgs = args;
      return;
    }

    mainFunction(...args);
    isBusy = true;
    setTimeout(timeoutFunc, delay);
  };
}
