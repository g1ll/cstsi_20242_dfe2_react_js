export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.text(`count is ${counter}`);
  };
  element.click(() => setCounter(counter + 1));
  setCounter(0);
}
