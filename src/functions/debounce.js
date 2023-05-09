export default function debounce(func, ms) {
  let timeoutID;
  let isCooldown = false;

  return function (...args) {
    clearTimeout(timeoutID);
    if (!isCooldown) {
      isCooldown = true;
    }
    timeoutID = setTimeout(() => {
      func.apply(this, args);
      isCooldown = false;
    }, ms);
  };
}
