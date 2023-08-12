const currentUrl = document.URL
const url = new URL(currentUrl)

const copyBtn = document.querySelector('[data-js="copyBtn"]')

if (url.pathname === "/") {
  copyBtn.addEventListener("click", () => {
    const textCopy = copyBtn.previousElementSibling.textContent
    navigator.clipboard.writeText(textCopy)
  })

  const moreMenuBtn = document.querySelector('[data-js="moreBtn"]')
  const moreMenu = document.querySelector('[data-js="moreMenu"]')

  moreMenuBtn.addEventListener("click", () => {
    const menu = moreMenuBtn.classList.toggle("rotate-180")

    if (menu) {
      moreMenu.classList.remove("invisible")
      moreMenu.classList.add("h-full")
    } else {
      moreMenu.classList.add("invisible")
      moreMenu.classList.add("h-0")
      moreMenu.classList.remove("h-full")
    }
  })
}

if (url.pathname === "/register") {
  const form = document.querySelector('[data-js="form"]')
  const inputs = Array.from(document.querySelectorAll('[data-js="input"]'))

  const messageErr = (text) => {
    const span = document.createElement('span')
    span.classList.add("text-red", "text-xs", "text-center")
    span.textContent = text

    return span
  }

  const insertFieldError = (inputArr) => {
    const messageExistErr = form.querySelectorAll("span")
    inputArr.forEach((item) => {
      const fieldNotFilledAndNotExist = item.value === "" && messageExistErr.length === 0
      if(fieldNotFilledAndNotExist) {
        const err = messageErr('Campo obrigatorio')
        item.insertAdjacentElement("afterend", err)
      }
    })
  }

  const messagePasswordOK = (pass, confirmPass, field) => {
    const err = messageErr('Senhas não conferem')
    if (pass !== confirmPass) {
      field.insertAdjacentElement("afterend", err)
      return false
    }
    return true
  }

  const removeMessageErr = ({ target }) => {
    const messageExistErr = target.nextSibling
    if (target.value !== "" && messageExistErr) {
      target.nextSibling.remove()
    }
  }

  const checkingForm =  (event) => {
    event.preventDefault()
    const password = form.password
    const confirmPassword = form.confirmPassword
    const everyoneHasValue = inputs.filter((item) => item.value)

    insertFieldError(inputs)
    
    const passwordOk = messagePasswordOK(
      password.value,
      confirmPassword.value,
      confirmPassword
    )

    if (passwordOk && everyoneHasValue.length !== 0) {
      form.submit()
    }
  }

  form.addEventListener("input", removeMessageErr)
  form.addEventListener("submit", checkingForm)
}
