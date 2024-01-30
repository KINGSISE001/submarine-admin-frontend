<template>
  <div v-loading="loading" class="app-container">
    <el-form :inline="true" :model="searchData" class="demo-form-inline">
      <el-form-item label="美团名称">
        <el-input v-model="searchData.poiName" placeholder="美团名称" />
      </el-form-item>
      <el-form-item label="用户账号">
        <el-select
          v-model="value"
          filterable
          clearable
          :loading="false"
          placeholder="用户账号"
          :options="userData"
          @change="onChange"
        >
          <el-option
            v-for="item in userData"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button v-if="checkPermission(['userPoi', 'userPoi.find'])" type="primary" @click="getPage()">查询</el-button>
        <el-button v-if="checkPermission(['userPoi', 'userPoi.add'])" type="success" @click="operate('add')">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-model="searchData"
      :data="tableData"
      :config="tableConfig"
      :page.sync="page"
      :load="getPage"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="name"
        label="用户名"
        width="100"
      />
      <el-table-column
        prop="userName"
        label="用户账号"
        width="110"
      />
      <el-table-column
        prop="storeName"
        label="门店名称"
        width="120"
      />
      <el-table-column
        prop="poiId"
        label="美团ID"
        width="120"
      />
      <el-table-column
        prop="poiName"
        label="美团名称"
        width="220"
      />
      <el-table-column
        prop="poiStatus"
        label="美团状态"
        width="100"
      >
        <template v-slot="scope">
          <div>
            <el-tag v-if="scope.row.poiStatus === 0" effect="dark" type="danger">关闭</el-tag>
            <el-tag v-if="scope.row.poiStatus === 1" effect="dark" type="success">开启</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="eleId"
        label="饿了么ID"
        width="120"
      />
      <el-table-column
        prop="eleName"
        label="饿了么名称"
        width="220"
      />
      <el-table-column
        prop="eleStatus"
        label="饿了么状态"
        width="100"
      >
        <template v-slot="scope">
          <div>
            <el-tag v-if="scope.row.eleStatus === 0" effect="dark" type="danger">关闭</el-tag>
            <el-tag v-if="scope.row.eleStatus === 1" effect="dark" type="success">开启</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        width="120"
      />
      <el-table-column
        label="操作"
        width="120"
      >
        <template v-slot="scope">
          <el-button type="text" size="small" @click="operate('detail',scope.row)">查看</el-button>
          <el-button v-if="checkPermission(['userPoi', 'userPoi.edit'])" type="text" size="small" @click="operate('edit',scope.row)">编辑</el-button>
          <el-button v-if="checkPermission(['userPoi', 'userPoi.del'])" type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <dForm v-if="dialogName === 'dForm'" :id="propId" :mode="mode" @refresh="getPage" @close="closeDialog" />
  </div>
</template>

<script>
import { getUserPoiPage, deleteUserPoi } from '@/api/userPoi'
import { getUserList } from '@/api/user'
import dForm from './form'

export default {
  components: {
    dForm
  },
  data() {
    return {
      value: '',
      loading: 0,
      tableData: [],
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      searchData: {
        poiName: '',
        name: '',
        uId: ''
      },
      mode: '',
      userData: {},
      propId: '',
      dialogName: ''
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    tableConfig() {
    }
  },
  mounted() {
    this.getPage()
    this.getUserLists()
  },
  methods: {
    onChange(value) {
      this.searchData.uId = value
    },
    getUserLists() {
      this.loading++
      getUserList(this.searchData).then(res => {
        this.userData = res
        console.log(JSON.stringify(this.userData))
      }).catch(e => console.error(e)).finally(() => this.loading--)
    },
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
