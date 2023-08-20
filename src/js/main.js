import generatePassword from "./modules/generatePassword"
import copy from './modules/copy'

const validation = selector => {
  const input = document.querySelector(selector)
  input.addEventListener('change', () => {
    if (input.value < 0) {
      alert(`The length (${input.value}) is too small`)
      input.value = 1
    } else if (input.value > 20) {
      alert(`The length (${input.value}) is too long`)
      input.value = 20
    }
  })
}

window.addEventListener('DOMContentLoaded', () => {
  generatePassword('.form', '.output span')
  validation('#length')
  copy('.copy', '.output span')
})