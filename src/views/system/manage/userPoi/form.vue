<template>
  <div class="app-container">
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="520px" :close-on-click-modal="false" @closed="$emit('close')">
      <x-form ref="xForm" v-model="formData" v-loading="loading" :config="formConfig" />
    </el-dialog>
  </div>
</template>

<script>
import { getUserPoiDetail, saveUserPoi } from '@/api/userPoi'
import { importRules } from '@/utils/index'
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
      loading: 0,
      dialogVisible: true,
      formData: {},
      formDisabled: false,
      dialogTitle: '编辑',
      showBtn: true
    }
  },
  computed: {
    formConfig() {
      const _this = this
      return {
        disabled: _this.formDisabled,
        inline: false,
        item: [
          {
            xType: 'input',
            name: 'uid',
            label: 'uid',
            rules: importRules('inputRequired')
          },
          {
            xType: 'input',
            name: 'poiId',
            label: 'poiId',
            rules: importRules('inputRequired')
          },
          {
            xType: 'input',
            name: 'poiName',
            label: 'poiName',
            rules: importRules('inputRequired')
          },
          {
            xType: 'input',
            name: 'remark',
            label: '备注'
          },
          {
            xType: 'input',
            name: 'creatorName',
            label: '创建者'
          }
        ],
        operate: [
          {
            text: '保存',
            show: _this.showBtn,
            click: _this.save
          },
          {
            text: '取消',
            show: _this.showBtn,
            click: () => { _this.dialogVisible = false }
          }
        ]
      }
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
  methods: {
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
