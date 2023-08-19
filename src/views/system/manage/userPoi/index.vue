<template>
  <div v-loading="loading" class="app-container">
    <x-table
      v-model="searchData"
      :config="tableConfig"
      :data="tableData"
      :page.sync="page"
      :load="getPage"
    />
    <dForm v-if="dialogName === 'dForm'" :id="propId" :mode="mode" @refresh="getPage" @close="closeDialog" />
  </div>
</template>

<script>
import { getUserPoiPage, deleteUserPoi } from '@/api/userpoi'
import dForm from './form'

export default {
  components: {
    dForm
  },
  data() {
    return {
      loading: 0,
      tableData: [],
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      searchData: {},
      propId: '',
      dialogName: ''
    }
  },
  computed: {
    tableConfig() {
      const _this = this
      return {
        stripe: true,
        search: true,
        reset: true,
        btn: [
          { text: '新增', click: () => _this.operate('add'), icon: 'el-icon-circle-plus' }
        ],
        column: [
          {
            name: 'uid',
            label: '用户id'
          },
          {
            name: 'poiId',
            label: '美团店铺id'
          },
          {
            name: 'poiName',
            label: '美团店铺名称',
            search: 'true',
            xType: 'input'
          },
          {
            name: 'remark',
            label: '备注'
          }
        ],
        operate: [
          {
            text: '编辑',
            show: _this.checkPermission(['UserPoi', 'UserPoi.edit']),
            click: data => _this.operate('edit', data)
          },
          {
            text: '删除',
            show: _this.checkPermission(['UserPoi', 'UserPoi.del']),
            click: _this.del
          },
          {
            text: '详情',
            show: true,
            click: data => {
              _this.operate('detail', data)
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.getPage()
  },
  methods: {
    getPage() {
      this.loading++
      getUserPoiPage(this.searchData, this.page.pageNum, this.page.pageSize).then(res => {
        this.tableData = res.data
        this.page.total = res.total
      }).catch(e => console.error(e)).finally(() => this.loading--)
    },
    operate(mode, data) {
      if (mode !== 'add') this.propId = data.id
      this.mode = mode
      this.dialogName = 'dForm'
    },
    del(data) {
      this.delConfirm().then(() => {
        this.loading++
        deleteUserPoi(data.id).then(res => {
          this.$message.success(res.msg)
          this.getPage()
        }).catch(e => console.log(e)).finally(() => this.loading--)
      }).catch(e => console.log(e))
    },
    closeDialog() {
      this.dialogName = ''
    }
  }
}
</script>

<style scoped>

</style>
