import random from '../services/random'

const generatePassword = (formSel, outputSel) => {
  const chars = {
    numbers: '0123456789',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
    specialSymbols: '!#$%&_<>.?,', //shorter variation to avoid bugs with RE
    // specialSymbols: '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/',
  }

  const form = document.querySelector(formSel),
        output = document.querySelector(outputSel)

  form.addEventListener('submit', e => {
    e.preventDefault()
    const formData = new FormData(form)
    let data = {}
    for (const [key, val] of formData) {
      data[key] = val
    }

    let password = '', allowedChars = '', allowedCharsGroups = []
    for (const key of Object.keys(data)) {
      if (chars[key]) {
        allowedChars += chars[key]
        allowedCharsGroups.push(chars[key])
      }
    }

    if (!allowedChars) {
      alert('Choose some options, please :)')
      return
    }

    if (+data.length <= 0) {
      alert('Choose length, please :)')
      return
    }

    for (let i = 0; i < data.length; i++) {
      if (allowedCharsGroups.length > 1 && i > data.length - allowedCharsGroups.length - 1) {
        for (let j = 0; j < allowedCharsGroups.length; j++) {
          const re = new RegExp(`[${allowedCharsGroups[j]}]`)
          if (!re.test(password)) {
            password += allowedCharsGroups[j][random(allowedCharsGroups[j].length)]
            break
          }
        }
        if (password.length > i) {
          continue
        }
      }
      password += allowedChars[random(allowedChars.length)]
    }

    output.textContent = password
  })
}

export default generatePassword