import fetch from 'utils/fetch'

export function page(query) {
  return fetch({
    url: '/api/admin/server/all',
    method: 'get',
    params: query
  })
}

export function getImages(query) {
  return fetch({
    url: '/api/admin/server/getImages',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return fetch({
    url: '/api/admin/server/add',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return fetch({
    url: '/api/admin/server/get/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return fetch({
    url: '/api/admin/server/delete/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return fetch({
    url: '/api/admin/server/put/' + id,
    method: 'put',
    data: obj
  })
}

export function conStop(id, sIp) {
  return fetch({
    url: '/api/admin/server/conStop/' + id + '?sip=' + sIp,
    method: 'get'
  })
}

export function conStart(id, sIp) {
  return fetch({
    url: '/api/admin/server/conStart/' + id + '?sIp=' + sIp,
    method: 'get'
  })
}

export function conRmove(id, sIp) {
  return fetch({
    url: '/api/admin/server/conRmove/' + id + '?sIp=' + sIp,
    method: 'delete'
  })
}

