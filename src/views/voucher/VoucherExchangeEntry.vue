<template>
  <div>
    礼券兑换入口
    <van-field
      v-model="form.exchangeCode"
      placeholder="请输入兑换码"
    />
  </div>
</template>
<script>
export default {
  name: 'VoucherExchangeEntry',
  data () {
    return {
      form: {
        exchangeCode: '1221'
      }
    }
  }
}
</script>
