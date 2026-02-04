import request from '@/utils/request'

/**
 * 分页获取
 */
export function getCompletedorderPage(params, pageNum, pageSize) {
  return request({
    url: '/completedorder/list/page',
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
export function getCompletedorderList(params) {
  return request({
    url: '/completedorder/list/all',
    method: 'get',
    params
  })
}

/**
 * 获取详情
 */
export function getCompletedorderDetail(params) {
  return request({
    url: '/order/PullOrdersDetail/',
    method: 'get',
    params: {
      ...params
    }
  })
}
/**
 * 流水
 */
export function getOrderLogList(params) {
  return request({
    url: '/order/orderLogList/',
    method: 'get',
    params: {
      ...params
    }
  })
}

/**
 * 保存
 */
export function saveCompletedorder(data) {
  return request({
    url: '/completedorder/save',
    method: 'post',
    data
  })
}

/**
 * 删除
 */
export function deleteCompletedorder(id) {
  return request({
    url: '/completedorder/del/' + id,
    method: 'delete'
  })
}
