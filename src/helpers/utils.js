const config = require("../config/settings.json")[process.env.ENVIRONMENT || 'development']

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

const apiEncodeList = ({list, count, limit, offset, url, args}) => {
  const href = config.BASE_URL + url
  data = {
    href,
    count,
    limit,
    offset,
    data: list
  }
  if (offset > 0) data['previous'] = `${href}?limit=${limit}&offset=${offset - limit}${args}`
  if (offset < limit && offset > 0) data['previous'] = `${href}?limit=${limit}&offset=0${args}`
  if ((limit + offset) < count) data['next'] = `${href}?limit=${limit}&offset=${limit + offset}${args}`
  return data
}

const getParamsList = (params) => {
  let list = ''
  Object.entries(params).forEach(([name, value]) => {
    if (name != 'limit' && name != 'offset') {
      list += `&${name}=${value}`
    }
  })
  return list
}

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

