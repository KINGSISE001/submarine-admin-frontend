import request from '@/utils/request'

/**
 * 分页获取
 */
export function getUserPoiPage(params, pageNum, pageSize) {
  return request({
    url: '/userpoi/list/page',
    method: 'get',
    params: {
      ...params,
      pageNum,
      pageSize
    }
  })
}

/**
 * 不分页获取
 */
export function getUserPoiList(params) {
  return request({
    url: '/userpoi/list/all',
    method: 'get',
    params
  })
}

/**
 * 获取详情
 */
export function getUserPoiDetail(id) {
  return request({
    url: '/userpoi/detail/' + id,
    method: 'get'
  })
}

/**
 * 保存
 */
export function saveUserPoi(data) {
  return request({
    url: '/userpoi/save',
    method: 'post',
    data
  })
}

/**
 * 删除
 */
export function deleteUserPoi(id) {
  return request({
    url: '/userpoi/del/' + id,
    method: 'delete'
  })
}
