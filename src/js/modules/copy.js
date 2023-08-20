const copy = (btnSel, getSel) => {
  const btn = document.querySelector(btnSel)
  const get = document.querySelector(getSel)

  btn.addEventListener('click', e => {
    e.preventDefault()
    navigator.clipboard.writeText(get.textContent)
  })
}

export default copy