<template>
  <div class="app-container">
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%" @closed="$emit('close')">
      <el-form
        ref="xForm"
        :model="formData"
        :rules="rules"
        label-position="labelPosition"
        label-width="120px"
        size="mini"
        label-suffix=":"
      >
        <el-form-item label="用户名" prop="uId">
          <el-select
            v-model="formData.uId"
            filterable
            clearable
            :loading="false"
            placeholder="用户名"
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
        <el-form-item label="门店名称" prop="storeName">
          <el-input v-model="formData.storeName" />
        </el-form-item>
        <el-form-item label="美团名称" prop="poiName">
          <el-input v-model="formData.poiName" />
        </el-form-item>
        <el-form-item label="美团ID" prop="poiId">
          <el-input v-model="formData.poiId" />
        </el-form-item>
        <el-form-item label="美团状态" prop="poiStatus">
          <el-switch
            v-model="formData.poiStatus"
            style="display: block"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="开启"
            :active-value="1"
            :inactive-value="0"
            inactive-text="关闭"
          />
        </el-form-item>
        <el-form-item label="饿了么名称" prop="eleName">
          <el-input v-model="formData.eleName" />
        </el-form-item>
        <el-form-item label="饿了么ID" prop="eleId">
          <el-input v-model="formData.eleId" />
        </el-form-item>
        <el-form-item label="饿了么状态" prop="eleStatus">
          <el-switch
            v-model="formData.eleStatus"
            style="display: block"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="开启"
            :active-value="1"
            :inactive-value="0"
            inactive-text="关闭"
          />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="formData.remark" />
        </el-form-item>
        <el-form-item>
          <el-button v-if="showBtn" type="primary" @click="save('formData')">提交</el-button>
          <el-button v-if="showBtn" type="success" @click="resetForm">重置</el-button>
          <el-button @click="() => { dialogVisible = false }">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getUserPoiDetail, saveUserPoi } from '@/api/userpoi'
import { importRules, importDic } from '@/utils/index'
import { getUserList } from '@/api/user'
import dic from '@/store/modules/dic'
export default {
  props: {
    mode: { // edit, detail, add
      type: String,
      required: true
    },
    id: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      labelPosition: 'left',
      value: '',
      userData: {},
      treeData: importDic('sex'),
      loading: 0,
      dialogVisible: true,
      formData: {
        uId: '',
        storeName: '',
        userName: '',
        poiName: '',
        poiId: '',
        poiStatus: '',
        eleName: '',
        eleId: '',
        eleStatus: '',
        remark: '' },
      formDisabled: false,
      dialogTitle: '编辑',
      showBtn: true,
      rules: {
        storeName: importRules('inputRequired'),
        uId: importRules('selectRequired')
      }
    }
  },
  computed: {
    dic() {
      return dic
    }
  },
  watch: {
    mode: {
      handler: function(mode) {
        if (this.mode === 'add') {
          this.dialogTitle = '新建'
        }
        if (this.mode === 'edit') {
          this.dialogTitle = '编辑'
          this.getDetail()
        }
        if (this.mode === 'detail') {
          this.dialogTitle = '详情'
          this.getDetail()
          this.formDisabled = true
          this.showBtn = false
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.getUserLists()
  },
  methods: {
    onChange(value) {
      this.formData.uId = value
    },
    getUserLists() {
      this.loading++
      getUserList(this.searchData).then(res => {
        this.userData = res
        console.log(JSON.stringify(this.userData))
      }).catch(e => console.error(e)).finally(() => this.loading--)
    },
    resetForm(formName) {
      this.$refs.xForm.resetFields()
    },
    getDetail() {
      this.loading++
      getUserPoiDetail(this.id).then(res => {
        this.formData = res
      }).catch(e => console.error(e)).finally(() => this.loading--)
    },
    save() {
      this.$refs['xForm'].validate().then(() => {
        this.loading++
        saveUserPoi(this.formData).then(res => {
          this.$message.success(res.msg)
          this.dialogVisible = false
          this.$emit('refresh')
        }).catch(e => console.error(e)).finally(() => this.loading--)
      }).catch(e => console.error(e))
    }
  }
}
</script>

<style scoped>

</style>
