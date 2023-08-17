const currentUrl = document.URL
const url = new URL(currentUrl)

if (url.pathname === "/") {
  const tableUrls = document.querySelector('[data-js="table"]')

  tableUrls.addEventListener("click", ({ target }) => {
    // copy btn
    if (target.dataset.js === "copyBtn") {
      const textCopy = target.previousElementSibling.textContent
      console.log(textCopy)
      navigator.clipboard.writeText(textCopy)
    }

    // more btn
    if (target.dataset.js === "moreBtn") {
      const menu = target.classList.toggle("rotate-180")
      const colummTable = target.parentElement.parentElement
      const moreMenu = colummTable.lastElementChild

      if (menu) {
        moreMenu.classList.remove("invisible")
        moreMenu.classList.add("h-full")
      } else {
        moreMenu.classList.add("invisible")
        moreMenu.classList.add("h-0")
        moreMenu.classList.remove("h-full")
      }
    }
  })
}

// validate register

if (url.pathname === "/register") {
  const form = document.querySelector('[data-js="form"]')
  const inputs = Array.from(document.querySelectorAll('[data-js="input"]'))

  const messageErr = (text) => {
    const span = document.createElement("span")
    span.classList.add("text-red", "text-xs", "text-center")
    span.textContent = text

    return span
  }

  const insertFieldError = (inputArr) => {
    const messageExistErr = form.querySelectorAll("span")
    inputArr.forEach((item) => {
      const fieldNotFilledAndNotExist =
        item.value === "" && messageExistErr.length === 0
      if (fieldNotFilledAndNotExist) {
        const err = messageErr("Campo obrigatorio")
        item.insertAdjacentElement("afterend", err)
      }
    })
  }

  const messagePasswordOK = (pass, confirmPass, field) => {
    const err = messageErr("Senhas não conferem")
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

  const checkingForm = (event) => {
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
