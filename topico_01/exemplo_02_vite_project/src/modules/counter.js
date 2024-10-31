export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Você clicou ${counter} vez(es)`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
