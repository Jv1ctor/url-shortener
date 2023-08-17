export const generateCode = (numChar: number) => {
  const codesParam = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210'
  let codes = ''
  for(let i = 0; i < numChar; i++){
    codes += codesParam[Math.floor(Math.random() * codesParam.length)]
  }

  return codes
}
