<template>
  <div class="loading">
    <img src="./loading.gif" class="loading-icon">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .loading
    width 100%
    text-align: center
    .loading-icon
      width: 32px
      height: 32px
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-l
</style>
