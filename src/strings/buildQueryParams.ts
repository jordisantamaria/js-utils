export const buildQueryParams = (params: any) => {
  return Object.keys(params)
    .map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
    })
    .join('&')
}

