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

const apiEncodeList = ({list, count, limit, offset, url}) => {
  const href = config.BASE_URL + "/" + config.VERSION + url
  data = {
    href,
    count,
    limit,
    offset,
    data: list
  }
  if (offset > 0) data['previous'] = `${href}?limit=${limit}&offset=${offset - limit}`
  if (offset < limit && offset > 0) data['previous'] = `${href}?limit=${limit}&offset=0`
  if ((limit + offset) < count) data['next'] = `${href}?limit=${limit}&offset=${limit + offset}`
  return data
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
  parseFilters
}

