<template>
  <div v-loading="loading" class="app-container">

    <el-drawer
      title="我是外面的 Drawer"
      :visible.sync="drawer"
      size="60%"
      :show-close="true"
    >
      <div>
        <el-table
          border
          :data="detailData"
          style="width: 100%"
        >
          <el-table-column
            prop="appMedicineCode"
            label="店内码"
            width="180"
          />
          <el-table-column
            prop="foodName"
            label="名称"
            width="200"
          />
          <el-table-column
            prop="spec"
            label="规格"
            width="180"
          />
          <el-table-column
            prop="quantity"
            label="数量"
            width="50"
          />
          <el-table-column
            prop="originalPrice"
            label="原价"
            width="50"
          />
          <el-table-column
            prop="price"
            label="单价"
            width="50"
          />
          <el-table-column
            prop="actualPrice"
            label="实际价格"
            width="80"
          />
          <el-table-column
            prop="upc"
            label="条码"
            width="130"
          />
          <el-table-column
            prop="unit"
            label="单位"
            width="80"
          />
          <el-table-column
            prop="detailExtra"
            label="属性"
            width="180"
          />
        </el-table>

      </div>
    </el-drawer>
    <x-table
      v-model="searchData"
      :config="tableConfig"
      :data="tableData"
      :page.sync="page"
      :load="getCompletedorderPage"
    />
  </div>

</template>

<script>
import { getCompletedorderDetail, getCompletedorderPage } from '@/api/completedorder'

export default {
  data() {
    return {
      drawer: false,
      innerDrawer: false,
      loading: 0,
      tableData: [],
      detailData: [],
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },
      searchdetailData: {
        orderId: ''
      },
      searchData: {
        orderId: '',
        wmOrderIdView: '',
        appPoiCode: '',
        wmPoiName: ''
      },
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
          /* { text: '新增', click: () => _this.operate('add'), icon: 'el-icon-circle-plus' }*/
        ],
        column: [
          {
            name: 'orderId',
            label: '订单号',
            width: 170,
            search: 'true',
            xType: 'input'
          },
          /* {
            name: 'orderTagList',
            label: '订单信息'
          },
          {
            name: 'wmOrderIdView',
            label: '订单展示id',
            search: 'true',
            xType: 'input'
          },*/
          {
            name: 'appPoiCode',
            label: 'app方门店id',
            width: 130,
            search: 'true',
            xType: 'input'
          },
          {
            name: 'wmPoiName',
            label: '商家门店名称',
            width: 240,
            search: 'true',
            align: 'left',
            xType: 'input'
          },
          /* {
            name: 'wmPoiPhone',
            label: '商家门店联系电话'
          },
          {
            name: 'recipientAddress',
            label: '订单收货人地址，'
          },
          {
            name: 'recipientAddressDetail',
            label: '订单收货人地址'
          },
          {
            name: 'recipientPhone',
            label: '订单收货人联系电话'
          },
          {
            name: 'backupRecipientPhone',
            label: '备用隐私号'
          },
          {
            name: 'recipientName',
            label: '订单收货人姓名'
          },*/
          {
            name: 'shippingFee',
            width: 100,
            label: '门店配送费，单位是元'
          },
          {
            name: 'total',
            width: 100,
            label: '订单的实际在线支付总价'
          },
          {
            name: 'originalPrice',
            width: 100,
            label: '订单的总原价'
          },
          /* {
            name: 'caution',
            label: '订单备注信息。'
          },
          {
            name: 'shipperPhone',
            label: '配送员联系电话'
          },*/
          {
            name: 'status',
            width: 90,
            label: '订单状态'
          },
          /* {
            name: 'cityId',
            label: '城市id'
          },
          {
            name: 'hasInvoiced',
            label: '是否支持开发票'
          },
          {
            name: 'invoiceTitle',
            label: '发票抬头'
          },
          {
            name: 'taxpayerId',
            label: '纳税人识别号'
          },
          {
            name: 'ctime',
            label: '订单创建时间'
          },
          {
            name: 'utime',
            label: '订单更新时间'
          },
          {
            name: 'deliveryTime',
            label: '预计送达时间。'
          },
          {
            name: 'isThirdShipping',
            label: '是否是第三方配送平台配送'
          },
          {
            name: 'payType',
            label: '支付类型'
          },
          {
            name: 'pickType',
            label: '取货类型'
          },
          {
            name: 'latitude',
            label: '订单收货地址的纬度'
          },
          {
            name: 'longitude',
            label: '订单收货地址的经度'
          },*/
          {
            name: 'daySeq',
            label: '当日订单流水号',
            width: 90
          },
          /* {
            name: 'isFavorites',
            label: '订单用户是否收藏此门店'
          },
          {
            name: 'isPoiFirstOrder',
            label: '订单用户是否第一次在此门店下单'
          },
          {
            name: 'isPreSaleOrder',
            label: '是否为预售单'
          },
          {
            name: 'dinnersNumber',
            label: '用餐人数'
          },
          {
            name: 'logisticsCode',
            label: '订单配送方式 '
          },
          {
            name: 'poiReceiveDetail',
            label: '订单维度的商家对账信息'
          },
          {
            name: 'detail',
            label: '订单商品详情'
          },*/
          {
            name: 'extras',
            label: '订单优惠信息',
            align: 'left',
            width: 200
          },
          /* {
            name: 'skuBenefitDetail',
            label: '商品优惠详情'
          },
          {
            name: 'userMemberInfo',
            label: '订单用户会员信息'
          },
          {
            name: 'avgSendTime',
            label: '门店平均送货时长'
          },
          {
            name: 'packageBagMoney',
            label: '订单维度的打包袋金额'
          },
          {
            name: 'estimateArrivalTime',
            label: '订单预计送达时间'
          },
          {
            name: 'packageBagMoneyYuan',
            label: '订单维度的打包袋金额'
          },
          {
            name: 'poiReceiveDetailYuan',
            label: '订单维度的商家对账信息'
          },
          {
            name: 'totalWeight',
            label: '订单重量'
          },
          {
            name: 'incmpCode',
            label: '订单数据状态标记'
          },
          {
            name: 'incmpModules',
            label: '有降级的数据模块的集合'
          },
          {
            name: 'orderPhoneNumber',
            label: '推送订单的预订人手机号'
          },*/
          {
            name: 'date',
            width: 180,
            label: '订单时间'
          },
          /* {
            name: 'timemillis',
            label: ''
          },
          {
            name: 'pickingCompleted',
            label: '是否拣货完成（0-未完成，1-完成）'
          },*/
          {
            name: 'je',
            label: '预计到账收入'
          },
          {
            name: 'tkje',
            label: '退款金额'
          },
          {
            name: 'cfJe',
            label: '处方金额'
          },
          {
            name: 'yyflv',
            label: '运营费单价'
          },
          {
            name: 'yyfJe',
            label: '运营费金额'
          },
          {
            name: 'zji',
            label: '总收入'
          },
          {
            name: 'fzje',
            label: '分账金额'
          },
          {
            name: 'skje',
            label: '实扣金额'
          },
          {
            name: 'tzje',
            label: '退款后调整金额'
          },
          {
            name: 'chId',
            label: '渠道id'
          },
          {
            name: 'chFyCf',
            label: '渠道处方分润'
          },
          {
            name: 'chFyYyf',
            label: '渠道运营费分润'
          },
          {
            name: 'chZji',
            label: '渠道分润金额'
          },
          {
            name: 'chTzje',
            label: '渠道调整金额'
          }
        ],
        operate: [
          {
            text: '编辑',
            show: _this.checkPermission(['completedOrder.edit']),
            click: data => _this.operate('edit', data)
          },
          {
            text: '删除',
            show: _this.checkPermission(['completedOrder.del']),
            click: _this.del
          },
          {
            text: '详情',
            show: true,
            click: data => {
              _this.operate(data)
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.getCompletedorderPage()
  },
  methods: {
    getCompletedorderPage() {
      this.loading++
      getCompletedorderPage(this.searchData, this.page.pageNum, this.page.pageSize).then(res => {
        this.tableData = res.data
        this.page.total = res.total
      }).catch(e => console.error(e)).finally(() => this.loading--)
    },
    operate(data) {
      this.searchdetailData.orderId = data.orderId
      this.drawer = true
      this.loading++
      getCompletedorderDetail(this.searchdetailData).then(ress => {
        this.detailData = ress.rows
        console.log(ress.rows)
      }).catch(e => console.error(e)).finally(() => this.loading--)
    },
    closeDialog() {
      this.dialogName = ''
    }
  }
}
</script>

<style scoped>

</style>
