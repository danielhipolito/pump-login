export const getFilePath = (file) => {
  const filePath = file.path
  let fileSplit = filePath
  if (filePath.includes('/')) {
    fileSplit = filePath.split('/')
  } else {
    fileSplit = filePath.split('\\')
  }
  return `${fileSplit[2]}/${fileSplit[3]}`
}
