<template>
  <div class="app-container">
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="520px" :close-on-click-modal="false" @closed="$emit('close')">
      <x-form ref="xForm" v-model="formData" v-loading="loading" :config="formConfig" />
    </el-dialog>
  </div>
</template>

<script>
import { getUserPoiDetail, saveUserPoi } from '@/api/userpoi'
// eslint-disable-next-line no-unused-vars
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
            name: 'uId',
            label: ''
          },
          {
            xType: 'input',
            name: 'poiId',
            label: ''
          },
          {
            xType: 'input',
            name: 'poiName',
            label: ''
          }
        ],
        operate: [
          {
            text: '保存',
            show: _this.showBtn,
            click: _this.saveUserPoi
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
          this.getUserPoiDetail()
        }
        if (this.mode === 'detail') {
          this.dialogTitle = '详情'
          this.getUserPoiDetail()
          this.formDisabled = true
          this.showBtn = false
        }
      },
      immediate: true
    }
  },
  methods: {
    getUserPoiDetail() {
      this.loading++
      getUserPoiDetail(this.id).then(res => {
        this.formData = res
      }).catch(e => console.error(e)).finally(() => this.loading--)
    },
    saveUserPoi() {
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
