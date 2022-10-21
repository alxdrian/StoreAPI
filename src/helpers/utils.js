const outputToApi =  (code, data) => {
  if (parseInt(code) >= 400) {
    return {
      code,
      errors: data
    }
  } else {
    return {
      code,
      ...data
    }
  }
}

module.exports = {
  outputToApi,
}