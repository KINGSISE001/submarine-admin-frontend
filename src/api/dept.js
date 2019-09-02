import request from '@/utils/request'

/**
 * 分页获取部门
 */
export function getDeptPage(params) {
  return request({
    url: '/dept/list/page',
    method: 'get',
    params
  })
}

/**
 * 不分页获取部门
 */
export function getDeptList(params) {
  return request({
    url: '/dept/list/all',
    method: 'get',
    params
  })
}

/**
 * 获取部门详情
 */
export function getDeptDetail(id) {
  return request({
    url: '/dept/detail',
    method: 'get',
    params: {id}
  })
}

/**
 * 获取部门的 tree
 */
export function getDeptTree() {
  return request({
    url: '/dept/tree/list',
    method: 'get',
  })
}

/**
 * 保存部门
 */
export function saveDept(data) {
  return request({
    url: '/dept/save',
    method: 'post',
    data
  })
}

/**
 * 删除部门
 */
export function deleteDept(id) {
  return request({
    url: '/dept/del',
    method: 'delete',
    data: { id }
  })
}