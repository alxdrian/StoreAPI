const config = require("../config/settings.json")[process.env.ENVIRONMENT || 'development']

// Retorna la estructura de la respuesta de los endpoints
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

// Estructura la respuesta de respuestas de listas con filtros y paginación
const apiEncodeList = ({list, count, limit, offset, url, args}) => {
  const base = config.BASE_URL + '/' + config.VERSION + url 
  const href = base + `?limit=${limit}&offset=${offset}${args}`
  data = {
    href,
    count,
    limit,
    offset,
    data: list
  }
  if (offset > 0) data['previous'] = `${base}?limit=${limit}&offset=${offset - limit}${args}`
  if (offset < limit && offset > 0) data['previous'] = `${base}?limit=${limit}&offset=0${args}`
  if ((limit + offset) < count) data['next'] = `${base}?limit=${limit}&offset=${limit + offset}${args}`
  return data
}

// Admite un objeto de paramétros {limit: 10, ..} y lo retorna en formato para url (filter=&limit=) 
const getParamsList = (params) => {
  let list = ''
  Object.entries(params).forEach(([name, value]) => {
    if (name != 'limit' && name != 'offset') {
      list += `&${name}=${value}`
    }
  })
  return list
}

// Establece la paginación predefinida de acuerdo a la configuración (settings.json)
const parseFilters = (params) => {
  const filters = {
    ...params,
    limit: parseInt(params.limit || config.LIMIT_DB),
    offset: parseInt(params.offset || config.OFFSET_DB)
  }
  return filters
}

module.exports = {
  outputToApi,
  apiEncodeList,
  getParamsList,
  parseFilters
}

